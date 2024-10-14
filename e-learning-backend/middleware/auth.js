const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Access token required" }); // Unauthorized
    }

    jwt.verify(token, process.env.ACCESS_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid or expired token" }); // Forbidden
        }
        req.user = user; // Attach the decoded user to the request
        next(); // Proceed to the next middleware or route handler
    });
}

module.exports = authenticateToken;
