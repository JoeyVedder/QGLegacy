const express = require('express');
const { registerUser, loginUser, getUserPoints } = require('../controllers/authController');

const router = express.Router();

// Register endpoint
router.post('/signup', registerUser);

// Login endpoint
router.post('/signin', loginUser);

// Get user points
router.get('/points/:userId', getUserPoints);

module.exports = router;