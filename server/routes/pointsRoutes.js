const express = require('express');
const { getLeaderboard, addPOints } = require('../controllers/pointsController');
const router = express.Router();

router.get('/leaderboard', getLeaderboard);
router.post('/add', addPoints);

module.exports = router;