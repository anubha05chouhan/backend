const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

// Route to list all carts
router.get('/list', async (req, res) => {
    try {
        const carts = await Cart.find();
        res.json(carts);
    } catch (error) {
        console.error('Error fetching carts:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route to add a food item to the cart
app.post('/cart/add', async (req, res) => {
    try {
        const { foodItemId } = req.body;
        const foodItem = await FoodItem.findById(foodItemId);
        if (!foodItem) {
            return res.status(404).json({ message: 'Food item not found' });
        }
        // Assuming cart is associated with the user, you may need to add authentication
        const cartItem = new Cart({ foodItemId });
        await cartItem.save();
        res.status(201).json({ message: 'Food item added to cart successfully' });
    } catch (error) {
        console.error('Error adding food item to cart:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Add more routes as needed

module.exports = router;
