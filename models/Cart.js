const mongoose = require('mongoose');

// Define Schema for Cart
const cartSchema = new mongoose.Schema({
    items: { type: String, required: true },
    total: { type: Number, required: true }
}, { timestamps: true }); // Add timestamps

// Create Cart model
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
