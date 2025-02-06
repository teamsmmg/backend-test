const express = require("express");
const app = express();

app.use(express.json());

// Sample API endpoint
app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from Vercel with HTTPS!" });
});

module.exports = app;
