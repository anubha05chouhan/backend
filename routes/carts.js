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

// Add more routes as needed

module.exports = router;
