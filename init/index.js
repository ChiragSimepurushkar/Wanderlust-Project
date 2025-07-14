const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';
async function main() {
    await mongoose.connect(MONGO_URL)
};


main().then(()=>{
    console.log("connected to DB");
}).catch((e)=>{
    console.log(e);
});

const initDB = async () => {
    //first if there is any data we clean completely
    await Listing.deleteMany({});
    initData.data =initData.data.map((obj)=>({...obj, owner:'6871b57cc8e28c640fc5505d'}))
    //and than save the new Data
    await Listing.insertMany(initData.data);
    console.log("data was initialised");
};

initDB();
