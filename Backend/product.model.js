const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: String,
  url: String,
  thumbnail: String,
  duration: String,
  description: String
});

const featureSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String
});

const productItemSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  price: Number,
  link: String
});
const reelVideoSchema = new mongoose.Schema({
  url: String,
  thumbnail: String
});

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  features: [String],
  images: [String],
  videos: [videoSchema],
  reelvideos: [reelVideoSchema],
  juniorpack: [featureSchema],
  inthebox: [featureSchema],
  freeinapp: [featureSchema],
  alsobought: [productItemSchema],
  relatedproducts: [productItemSchema],
  ageRange: String,
  category: String,
  rating: Number,
  reviews: Number,
  inStock: Boolean
});

module.exports = mongoose.model('Product', productSchema);