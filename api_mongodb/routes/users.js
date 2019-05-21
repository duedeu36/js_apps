const express = require("express");
const router = express.Router();

// Login
router.get("/login", (req, res) => res.send("Hello from the users/login"));

// Login
router.get("/register", (req, res) =>
  res.send("Hello from the users/register")
);

module.exports = router;
