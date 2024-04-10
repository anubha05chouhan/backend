const mongoose = require('mongoose');

// Define Schema for Reservation
const reservationSchema = new mongoose.Schema({
    time: { type: String, required: true }, // Change type to String
    madeBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true }); // Add timestamps

// Create Reservation model
const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
