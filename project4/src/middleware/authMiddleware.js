// src/middleware/authMiddleware.js

const jwtUtils = require('../utils/jwtUtils');

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  jwtUtils.verifyToken(token)
    .then(decoded => {
      req.user = decoded;
      next();
    })
    .catch(err => {
      res.status(403).json({ message: 'Unauthorized: Invalid token' });
    });
};

module.exports = verifyToken;
