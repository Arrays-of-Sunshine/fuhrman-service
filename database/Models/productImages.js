const mongoose = require('mongoose');

const productImagesSchema = new mongoose.Schema({
  _id: Number,
  product_id: Number,
  product_name: String,
  product_description: String,
  company_name: String,
  category: String,
  images: String,
});

const ProductImages = mongoose.model('ProductImages', productImagesSchema);

module.exports = ProductImages;
