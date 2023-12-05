// models/sales.js
const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
    productname: String,
    quantity: Number,
  
    // Add more fields as needed
});

module.exports = mongoose.model('sales', salesSchema);
