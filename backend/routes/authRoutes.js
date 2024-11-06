const express = require("express");
const Admin = require("../models/Admin"); // Model Admin
const router = express.Router();

// Rute login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Cari admin berdasarkan username dan password
    const admin = await Admin.findOne({ username, password });

    if (!admin) {
      return res.status(401).json({ message: "Username atau password salah" });
    }

    // Simpan sesi login
    req.session.isLoggedIn = true;
    req.session.username = username;

    return res.status(200).json({ message: "Login berhasil" });
  } catch (error) {
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
});

// Rute logout
router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Gagal logout" });
    }

    res.status(200).json({ message: "Logout berhasil" });
  });
});

// Middleware untuk melindungi rute tertentu
const authMiddleware = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.status(403).json({ message: "Anda belum login" });
  }
  next();
};

// Rute untuk halaman admin yang dilindungi
router.get("/admin", authMiddleware, (req, res) => {
  res.sendFile("admin.html", { root: "./frontend/src" });
});

module.exports = router;
