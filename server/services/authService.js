import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Generate a JWT token for a user
 * @param {Object} user - The user object to generate a token for
 * @param {string} user.id - The user's ID
 * @param {string} user.email - The user's email
 * @returns {string} The generated JWT token
 */
function generateToken(user) {
    const payload = {
        id: user.id,
        email: user.email,
        // Add any other user properties you want to include in the token
    };

    return jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || '24h' }
    );
}

/**
 * Verify a JWT token
 * @param {string} token - The JWT token to verify
 * @returns {Object|null} The decoded token payload or null if invalid
 */
function verifyToken(token) {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return null;
    }
}

/**
 * Extract token from Authorization header
 * @param {string} authHeader - The Authorization header value
 * @returns {string|null} The extracted token or null if not found
 */
function extractTokenFromHeader(authHeader) {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return null;
    }

    return authHeader.split(' ')[1];
}

export { generateToken, verifyToken, extractTokenFromHeader }; 