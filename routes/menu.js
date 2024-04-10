const express = require('express');
const router = express.Router();
const Menu = require('../models/Menu');

// Route to list all menus
router.get('/list', async (req, res) => {
    try {
        const menus = await Menu.find().populate('items');
        res.json(menus);
    } catch (error) {
        console.error('Error fetching menus:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Add more routes as needed

module.exports = router;
