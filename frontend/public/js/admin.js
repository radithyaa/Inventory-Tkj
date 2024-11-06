// Fungsi untuk mengecek sesi login
async function checkSession() {
  try {
    const response = await fetch("http://localhost:5000/api/auth/admin", {
      method: "GET",
      credentials: "include", // Mengirim cookie sesi
    });

    if (!response.ok) {
      window.location.href = "login.html"; // Arahkan ke login jika belum login
    }
  } catch (error) {
    console.error("Error:", error);
    window.location.href = "login.html"; // Arahkan ke login jika ada error
  }
}

document.addEventListener("DOMContentLoaded", checkSession);
