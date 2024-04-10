const mongoose = require('mongoose');

// Define Schema for Menu
const menuSchema = new mongoose.Schema({
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FoodItem' }],
    stock: { type: Boolean, required: true }
}, { timestamps: true }); // Add timestamps

// Create Menu model
const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
