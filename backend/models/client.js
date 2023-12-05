// models/client.js
const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    username: String,
    phonenumber: Number,
    password: String,
    // Add more fields as needed
});

module.exports = mongoose.model('client', clientSchema);
