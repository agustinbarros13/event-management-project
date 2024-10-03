const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const generateToken = (user) => {
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'Email already in use' });

        const user = new User({ name, email, password });
        await user.save();

        const token = generateToken(user);
        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user' });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = generateToken(user);
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in' });
    }
};
