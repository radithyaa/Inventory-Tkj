const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const session = require("express-session"); // Untuk mengelola sesi
const MongoStore = require("connect-mongo"); // Untuk menyimpan sesi di MongoDB
const Admin = require("./models/Admin"); // Model Admin

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("frontend/src")); // Menyajikan file statis dari folder src di frontend

// Konfigurasi session
app.use(
  session({
    secret: process.env.SECRET_KEY || "mysecretkey123", // Gunakan SECRET_KEY dari .env atau default
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      collectionName: "sessions",
    }),
    cookie: { maxAge: 1000 * 60 * 60 }, // Sesi berlaku selama 1 jam
  })
);

// Koneksi ke MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// Rute root
app.get("/", (req, res) => {
  res.send("Welcome to the Inventory API");
});

// Rute untuk login dan validasi
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Cari user di database berdasarkan username
    const user = await Admin.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Username tidak ditemukan" });
    }

    // Validasi password (disini tanpa hashing)
    if (user.password !== password) {
      return res.status(401).json({ message: "Password salah" });
    }

    // Simpan informasi user ke session
    req.session.user = user;
    res.status(200).json({ message: "Login berhasil" });
  } catch (error) {
    res.status(500).json({ message: "Terjadi kesalahan server" });
  }
});

// Middleware untuk mengecek apakah user sudah login
const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    return next();
  }
  res.redirect("/login.html"); // Redirect ke halaman login jika belum login
};

// Route untuk halaman admin yang hanya bisa diakses jika user sudah login
app.get("/admin", isAuthenticated, (req, res) => {
  res.sendFile(__dirname + "/frontend/src/admin.html");
});

// Menjalankan server pada port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
