const express = require('express');
const FoodItem = require('../models/FoodItem');
const isLoggedIn = require('../middlewares/authMiddleware');

// Initialize Express router
const app = express();

// Route to add a new food item
app.post('/fooditems/add', isLoggedIn, async (req, res) => {
    // Your logic to add a new food item here
    if (req.user && req.user.role === 'admin') {
        try {
            const { name, price } = req.body;
            const newFoodItem = new FoodItem({ name, price });
            await newFoodItem.save();
            res.status(201).json({ message: 'Food item added successfully' });
        } catch (error) {
            console.error('Error adding food item:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        return res.status(403).json({ message: 'Forbidden: You do not have permission to access this resource' });
    }
});

// Route to delete a food item
app.delete('/fooditems/:id', isLoggedIn, async (req, res) => {
    // Your logic to delete a food item here
    if (req.user && req.user.role === 'admin') {
        try {
            const { id } = req.params;
            const deletedFoodItem = await FoodItem.findByIdAndDelete(id);
            if (!deletedFoodItem) {
                return res.status(404).json({ message: 'Food item not found' });
            }
            res.json({ message: 'Food item deleted successfully' });
        } catch (error) {
            console.error('Error deleting food item:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        return res.status(403).json({ message: 'Forbidden: You do not have permission to access this resource' });
    }
});

// Route to update a food item
app.put('/fooditems/:id', isLoggedIn, async (req, res) => {
    // Your logic to update a food item here
    if (req.user && req.user.role === 'admin') {
        try {
            const { id } = req.params;
            const { name, price } = req.body;
            const updatedFoodItem = await FoodItem.findByIdAndUpdate(id, { name, price }, { new: true });
            if (!updatedFoodItem) {
                return res.status(404).json({ message: 'Food item not found' });
            }
            res.json({ message: 'Food item updated successfully', updatedFoodItem });
        } catch (error) {
            console.error('Error updating food item:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        return res.status(403).json({ message: 'Forbidden: You do not have permission to access this resource' });
    }
});

module.exports = app;
