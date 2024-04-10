const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Route to handle user registration
router.post('/register', async (req, res) => {
    // Your registration logic here
});

// Route to handle user login and generate JWT token
router.post('/login', async (req, res) => {
    // Your login logic here
});

module.exports = router;
