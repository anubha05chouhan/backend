const mongoose = require('mongoose');

// Define Schema for FoodItem
const foodItemSchema = new mongoose.Schema({
    price: { type: Number, required: true },
    name: { type: String, required: true },
    time: { type: String, required: true }, // Change type to String
    images: { type: String } // New field for image URL
}, { timestamps: true }); // Add timestamps

// Create FoodItem model
const FoodItem = mongoose.model('FoodItem', foodItemSchema);

module.exports = FoodItem;
