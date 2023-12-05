// models/product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productname: String,
    price: Number,
    admin: String,
    // Add more fields as needed
});

module.exports = mongoose.model('product', productSchema);
