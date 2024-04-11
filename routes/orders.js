const express = require('express');
const Order = require('../models/Order');
const isLoggedIn = require('../middlewares/authMiddleware');

// Initialize Express router
const app = express();

// Route to list all orders
app.get('/orders/list', isLoggedIn, async (req, res) => {
    try {
        const orders = await Order.find().populate('items').populate('orderBy');
        res.json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Add more routes as needed

module.exports = app;
