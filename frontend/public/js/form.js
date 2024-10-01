document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formInventory");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form melakukan refresh

    // Ambil nilai dari form
    const item = document.getElementById("Item").value;
    const total = document.getElementById("total").value;
    const name = document.getElementById("name").value;
    const className = document.getElementById("Class").value;
    const date = document.getElementById("Date").value;

    // Buat objek data untuk dikirim ke server
    const data = { item, total, name, class: className, date };

    // Kirim data ke server menggunakan fetch API
    fetch("http://localhost:5000/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        alert(result.message); // Tampilkan pesan berhasil
        form.reset(); // Reset form setelah berhasil
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Gagal menyimpan data!");
      });
  });
});
