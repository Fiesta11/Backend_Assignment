const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const postRoutes = require("./routes/postRoutes");
const {DBConnection} = require("./database/db");
const {limiter} = require('./ip_rate_limiter/ip_rate')

// mongoose.connect('mongodb://localhost:27017')
// .then(()=> console.log("Connection Done"))
// .catch(err => console.error("Could not connect to mongodb" , err))

dotenv.config();
const app = express();

// Connect to MongoDB
DBConnection();

// Middleware
app.use(express.json());
app.use(limiter);

// Routes
app.use("/", postRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
