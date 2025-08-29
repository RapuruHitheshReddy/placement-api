const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const bfhlRoutes = require("./routes/bfhlRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/bfhl", bfhlRoutes);

// Default route for invalid paths
app.use((req, res) => {
  res.status(404).json({ is_success: false, message: "Route not found" });
});

module.exports = app;
