const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Backend is running 🚀" });
});

module.exports = app;