const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Route untuk menambah user
router.post("/add", async (req, res) => {
  const { name, email } = req.body;

  try {
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json({ message: "User created!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
