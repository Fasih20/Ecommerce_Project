// models/admin.js
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: String,
    phonenumber: Number,
    password: String,
    // Add more fields as needed
});

module.exports = mongoose.model('admin', adminSchema);
