const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("frontend/public")); // Menyajikan file statis

// Koneksi ke MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// Tambahkan rute untuk root
app.get("/", (req, res) => {
  res.send("Welcome to the Inventory API");
});

// Import rute dari file routes
const formRoutes = require("./routes/formRoutes"); // Pastikan nama file rute sesuai

// Gunakan rute form
app.use("/api/form", formRoutes);

// Menjalankan server pada port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
