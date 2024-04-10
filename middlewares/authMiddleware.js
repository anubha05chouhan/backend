const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key_here';

// Middleware to check if user is logged in
const isLoggedIn = (req, res, next) => {
    // Your logic to check if the user is logged in using JWT token
    const token = req.headers.authorization;

    // Check if token is provided
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    // Verify token
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }
        req.user = decoded;
        next();
    });
};

module.exports = isLoggedIn;
