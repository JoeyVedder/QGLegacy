const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { //Replace this with the actual MONGO URI in the .env file
            useNewURlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1); // Exist process with failure
    }
};

module.exports = connectDB;