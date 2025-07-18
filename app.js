if(process.env.NODE_ENV!="production"){
    require("dotenv").config();
}
console.log(process.env.SECRET);

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require('./models/listing.js');
const path = require('path');
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema,reviewSchema} = require("./schema.js");
const Review = require('./models/review.js');
const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore= require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const userRouter = require("./routes/user.js");


app.use(cookieParser());


app.listen(8080,(req,res)=>{
    console.log("Server is listening to port 8080");
});


// app.get('/',(req,res)=>{
//     res.send("Hi,I am root");
// });


// const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';
 const dbURL = process.env.ATLASTDB_URL

async function main() {
    await mongoose.connect(dbURL);
}

app.set('view engine','ejs');
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate); 
app.use(express.static(path.join(__dirname,'/public')));

const store = MongoStore.create({
    mongoUrl: dbURL,
    crypto:{//for encryption we use crypto
        secret: process.env.SECRET
    },
    //if there is no updation in session from user side, we dont want to update or clear the session data within 24hrs
    touchAfter: 24 * 3600, //secs
});

store.on("error",()=>{
    console.log("Error in Mongo Session store:",err);
});

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie: {
        expires: Date.now() + 7 * 24*60 *60*1000 ,//(miliseconds) //the data is store for this much date from today to,next 7 days
                                         //like if the user has loged In than he can use webpage without loggin again,but if he don't use for next 7 days ,he have to log In again
        maxAge: 7 * 24*60 *60*1000,
        httpOnly:true
    }
};


app.use(session(sessionOptions));
app.use(flash());


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


main().then(()=>{
    console.log("connected to DB");
}).catch((e)=>{
    console.log(e);
})

// app.get('/testlisting',async (req,res)=>{
//    let sampleListing = new Listing({
//     title: "My new Villa",
//     description: "By the beach",
//     price:1200,
//     location:"Goa",
//     country:"India",
//    });
//    await sampleListing.save();
//    console.log("Sample was save");
//    res.send("Successful testing");
// });

//Flash Middleware
app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.curUser = req.user;
    next();
})

// app.get("/demouser",async(req,res)=>{
//     let fakeUser = new User({
//         email:"student#52F",
//         username:"jbsxbjscbd"
//     });

//        let registeredUser = await User.register(fakeUser, "Password"); 
//       res.send(registeredUser);
// })


app.use("/listings",listingsRouter);
app.use("/listings/:id/reviews",reviewsRouter);
app.use("/",userRouter);

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

// standard response  (* =>for all req)
app.all(/.*/, (req,res,next)=>{
    next(new ExpressError(404,"PageNot Found!!"));
})

//middleware
app.use((err,req,res,next)=>{
    let {statusCode=500 , message="Something went wrong"} = err;
    res.status(statusCode).render("error.ejs",{message});
//    res.status(statusCode).send(message);
})



