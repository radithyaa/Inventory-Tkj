function toggle() {
  const sidebar = document.getElementById("sidebar");
  const toggle = document.getElementById("toggle");
  const search = document.getElementById("search");
  const main = document.getElementById("main");
  const today = document.getElementById("Date");

  sidebar.classList.toggle("w-64"); // Untuk membuka sidebar
  sidebar.classList.toggle("w-[5.5rem]"); // Untuk menutup sidebar
  toggle.classList.toggle("rotate-180"); // Rotasi ikon toggle
  search.classList.toggle("bg-bookmark4");
  search.classList.toggle("bg-bookmark1");
  main.classList.toggle("left-[5.5rem]");
  main.classList.toggle("left-64");

  // Update tanggal saat ini
  today.value = new Date().toISOString().split("T")[0];

  // Update posisi toggle mengikuti lebar sidebar
  if (sidebar.classList.contains("w-[5.5rem]")) {
    toggle.style.left = "4.8rem"; // Posisi toggle saat sidebar tertutup
  } else {
    toggle.style.left = "15.25rem"; // Posisi toggle saat sidebar terbuka
  }
}

// Set tanggal saat ini ketika halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  const nowUTC = new Date();
  const nowPlus7 = new Date(nowUTC.getTime() + 7 * 60 * 60 * 1000);

  const todayInput = document.getElementById("Date");
  todayInput.value = nowPlus7.toISOString().split("T")[0];
});
