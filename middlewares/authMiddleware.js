const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key_here';

// Middleware to check if user is logged in
const isLoggedIn = (req, res, next) => {
    // Your logic to check if the user is logged in using JWT token
};

module.exports = isLoggedIn;
