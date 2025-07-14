const Listing = require('../models/listing.js');
const mbxGeoCoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeoCoding({ accessToken: mapToken });


module.exports.index = async (req, res) => {
    // const allListings = await Listing.find({});
    const {category} =req.query;
    if (category) {
        allListings = await Listing.find({ category: category });
    } else {
        allListings = await Listing.find({});
    }

    res.render('listings/index.ejs', { allListings,category });
}

module.exports.renderNewForm = (req, res) => {

    res.render('listings/new.ejs');
}

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({
        path: "reviews", populate: {
            path: "author"
        }
    }).populate("owner");
    if (!listing) {//listing doesn't exist
        req.flash("error", "Listing you requested does not exist!!");
        return res.redirect('/listings');
    }
    console.log(listing);
    res.render('listings/show.ejs', { listing });
}

module.exports.createListing = async (req, res, next) => {
    //GeoCoding
    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
    })
        .send()

    //   console.log(response.body.features[0].geometry);

    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);  //the JS obj returned is stored

    // if(!req.body.listing){
    //     throw new ExpressError(400,"Send Valid Data For Listing");
    // }

    // let {title,description,image,price,country,location} = req.body;
    //better is to create the name in ejs as value of Listing[]
    // let listing = req.body.listing;
    newListing.image = { url, filename };
    newListing.geometry = response.body.features[0].geometry;

    newListing.owner = req.user._id;
    let savedListing = await newListing.save();
    console.log(savedListing);
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
}
module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {//listing doesn't exist
        req.flash("error", "Listing you requested does not exist!!");
        return res.redirect('/listings');
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_250");
    res.render("listings/edit.ejs", { listing, originalImageUrl });
}

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }); //deconstructing body.listing

    if (typeof req.file !== "undefined") {//if new file is upload than only do this
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
}

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let delListing = await Listing.findByIdAndDelete(id);
    console.log(delListing);
    req.flash("success", "Listing Deleted!");
    res.redirect('/listings');
}

