const mongoose = require('mongoose');

// Define Schema for User
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true }
}, { timestamps: true }); // Add timestamps

// Create User model
const User = mongoose.model('User', userSchema);

module.exports = User;
