document
  .getElementById("formLogin")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      // Perbaiki URL sesuai rute backend
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        credentials: "include", // Tambahkan ini untuk menyertakan cookie pada request
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login berhasil");
        window.location.href = "admin.html"; // Redirect ke halaman admin
      } else {
        alert(data.message); // Tampilkan pesan error dari server
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Gagal login");
    }
  });
