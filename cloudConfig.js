const cloudinary = require('cloudinary').v2
const {CloudinaryStorage} = require("multer-storage-cloudinary");

cloudinary.config({//by default the key names are as it is set
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret : process.env.CLOUD_API_SECRET,
});

//to define/create new storage/folder on cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'wanderlust_DEV',
    allowedFormats: ['png','jpg','jpeg'],
  },
});

module.exports ={
    cloudinary,
    storage
};