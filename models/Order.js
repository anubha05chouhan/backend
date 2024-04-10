const mongoose = require('mongoose');

// Define Schema for Order
const orderSchema = new mongoose.Schema({
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem' }],
    totalPrice: { type: Number, required: true },
    estTime: { type: String, required: true }, // Change type to String
    orderBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true }); // Add timestamps

// Create Order model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
