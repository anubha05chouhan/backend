// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Initialize Express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/restaurantDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(bodyParser.json());

// Secret key for JWT token (should be stored securely)
const secretKey = 'your_secret_key_here';

// Middleware to check if user is logged in
const isLoggedIn = require('./middlewares/authMiddleware');

// Import routes
const authRoutes = require('./routes/auth');
const cartRoutes = require('./routes/carts');
const foodItemRoutes = require('./routes/fooditems');
const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/orders');
const reservationRoutes = require('./routes/reservations');

// Use routes
app.use('/auth', authRoutes);
app.use('/carts', isLoggedIn, cartRoutes);
app.use('/fooditems', isLoggedIn, foodItemRoutes);
app.use('/menu', isLoggedIn, menuRoutes);
app.use('/orders', isLoggedIn, orderRoutes);
app.use('/reservations', isLoggedIn, reservationRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
