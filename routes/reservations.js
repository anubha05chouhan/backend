const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

// Route to list all reservations
router.get('/list', async (req, res) => {
    try {
        const reservations = await Reservation.find().populate('madeBy');
        res.json(reservations);
    } catch (error) {
        console.error('Error fetching reservations:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Add more routes as needed

module.exports = router;
