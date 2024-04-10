// Middleware to check if user is an admin
const isAdmin = (req, res, next) => {
    // Check if user is logged in and has admin role
    if (req.user && req.user.role === 'admin') {
        next(); // Allow access to the route
    } else {
        res.status(403).json({ message: 'Forbidden: You do not have permission to access this resource' });
    }
};

module.exports = isAdmin;
