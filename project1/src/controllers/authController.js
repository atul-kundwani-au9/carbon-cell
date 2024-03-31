const jwt = require('jsonwebtoken');
const User = require('../models/user');

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

exports.register = (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    // Check if username is already taken
    if (users.some(user => user.username === username)) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    // Simulating user creation
    const newUser = new User(users.length + 1, username, password);
    users.push(newUser);
    res.status(201).json({ message: 'User created successfully', user: newUser });
};

exports.login = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    const accessToken = jwt.sign({ username: user.username, id: user.id }, JWT_SECRET_KEY);
    res.json({ accessToken });
};

exports.logout = (req, res) => {
    
    res.json({ message: 'Logged out successfully' });
};

exports.protectedRoute = (req, res) => {
    res.json({ message: 'You are accessing a protected route!', user: req.user });
};

// Sample user database
const users = [
    new User(1, 'user1', 'password1'),
    new User(2, 'user2', 'password2')
];

