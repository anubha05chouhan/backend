const express = require('express');
const Menu = require('../models/Menu');

// Initialize Express router
const app = express();

// Route to list all menus
app.get('/menus/list', async (req, res) => {
    try {
        const menus = await Menu.find().populate('items');
        res.json(menus);
    } catch (error) {
        console.error('Error fetching menus:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Add more routes as needed

module.exports = app;
