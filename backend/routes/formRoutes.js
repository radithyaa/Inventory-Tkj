// routes/formRoutes.js
const express = require("express");
const router = express.Router();

// Model form (sesuaikan dengan struktur schema form)
const Form = require("../models/form");

// Rute untuk menyimpan data form ke database MongoDB
router.post("/", async (req, res) => {
  try {
    // Buat instance form berdasarkan data yang diterima dari request body
    const newForm = new Form(req.body);

    // Simpan data form ke database
    await newForm.save();
    res.status(201).json({ message: "Data successfully saved!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to save data", error });
  }
});

module.exports = router;
