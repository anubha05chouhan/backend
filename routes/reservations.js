const express = require('express');
const Reservation = require('../models/Reservation');
const isLoggedIn = require('../middlewares/authMiddleware');

// Initialize Express app
const app = express();

// Route to list all reservations
app.get('/reservations/list', isLoggedIn, async (req, res) => {
    try {
        const reservations = await Reservation.find().populate('madeBy');
        res.json(reservations);
    } catch (error) {
        console.error('Error fetching reservations:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route to add a new reservation
app.post('/reservations/add', isLoggedIn, async (req, res) => {
    try {
        const { time } = req.body;
        const newReservation = new Reservation({ time });
        await newReservation.save();
        res.status(201).json({ message: 'Reservation added successfully' });
    } catch (error) {
        console.error('Error adding reservation:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Route to delete a reservation
app.delete('/reservations/delete/:id', isLoggedIn, async (req, res) => {
    try {
        const { id } = req.params;
        const deletedReservation = await Reservation.findByIdAndDelete(id);
        if (!deletedReservation) {
            return res.status(404).json({ message: 'Reservation not found' });
        }
        res.json({ message: 'Reservation deleted successfully' });
    } catch (error) {
        console.error('Error deleting reservation:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Add more routes as needed

module.exports = app;
