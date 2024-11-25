const User = require('../models/userModel');

// Leaderboard endpoint
exports.getLeaderboard = async (req, res) => {
    try {
        const leaderboard = await User.find()
            .sort({ points: -1 })
            .limit(10)
            .select('username points');
        res.json(leaderboard);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch leaderboard" });
    }
};

// Add points for social media actions
exports.addPoints = async (req, res) => {
    const { userId, action } = req.body;
    const pointsMap = { twitter: 10, instagram: 10, discord: 20 };

    try {
        const user = await User.findById(userId);

        if (action === "twitter" && !user.socialMedia.twitterFollowed) {
            user.points += pointsMap.twitter;
            user.socialMedia.twitterFollowed = true;
        } else if (action === "instagram" && !user.socialMedia.instagramFollowed) {
            user.points += pointsMap.instagram;
            user.socialMedia.instagramFollowed = true;
        } else if (action === "discord" && !user.socialMedia.discordJoined) {
            user.points += pointsMap.discord;
            user.socialMedia.discordJoined = true;
        } else {
            return res.status(400).json({ message: "Action already completed or invalid" });
        }

        await user.save();
        res.json({ message: "Points added successfully", points: user.points });
    } catch (error) {
        res.status(500).json({ error: "Failed to update points" });
    }
};
