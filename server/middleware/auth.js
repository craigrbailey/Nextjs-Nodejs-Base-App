import { verifyToken, extractTokenFromHeader } from '../services/authService.js';

/**
 * Middleware to authenticate requests using JWT
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = extractTokenFromHeader(authHeader);

    if (!token) {
        return res.status(401).json({ message: 'Authentication token is required' });
    }

    const decoded = verifyToken(token);
    console.log("Decoded token:", decoded);
    if (!decoded) {
        return res.status(403).json({ message: 'Invalid or expired token' });
    }

    // Add the decoded user information to the request object
    req.user = decoded;
    next();
}

export { authenticateToken };
