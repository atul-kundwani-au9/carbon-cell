

const jwtUtils = require('../utils/jwtUtils');
const User = require('../models/user');

exports.login = (req, res) => {
  // Authenticate user (you may have your own authentication logic here)
  const { username, password } = req.body;
  const user = User.findByCredentials(username, password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  // Generate JWT token
  const token = jwtUtils.generateToken(user.id, user.username);
  res.json({ token });
};
