const express = require("express");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(bodyParser.json()); // Middleware to parse JSON
app.use("/tasks", taskRoutes); // Routes

// Error handling for unknown routes
app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

module.exports = app;
 
