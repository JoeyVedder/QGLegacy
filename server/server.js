const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const pointsRoutes = require('./routes/pointsRoutes');

dotenv.config();

const app = express();

//Middleware
app.use(express.json());

//Routes
app.use('/api/points'), pointsRoutes;

//Database connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Database connected"))
.catch(err => console.error("Database connection failed:", err));

//Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));