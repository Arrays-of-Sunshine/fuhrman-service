const mongoose = require('mongoose');

const productImagesSchema = new mongoose.Schema({
  product_id: Number,
  product_name: String,
  image_desc: String,
  company_name: String,
  category: String,
  image_loc: String,
});

const ProductImages = mongoose.model('ProductImages', productImagesSchema);

module.exports = ProductImages;
