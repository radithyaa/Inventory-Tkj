function toggle() {
  const sidebar = document.getElementById("sidebar");
  const toggle = document.getElementById("toggle");
  const search = document.getElementById("search");
  const main = document.getElementById("main");

  sidebar.classList.toggle("w-64"); // Untuk membuka sidebar
  sidebar.classList.toggle("w-[5.5rem]"); // Untuk menutup sidebar
  toggle.classList.toggle("rotate-180"); // Rotasi ikon toggle
  search.classList.toggle("bg-bookmark4");
  search.classList.toggle("bg-bookmark1");
  main.classList.toggle("left-[5.5rem]");
  main.classList.toggle("left-64");

  // Update posisi toggle mengikuti lebar sidebar
  if (sidebar.classList.contains("w-[5.5rem]")) {
    toggle.style.left = "4.8rem"; // Posisi toggle saat sidebar tertutup
  } else {
    toggle.style.left = "15.25rem"; // Posisi toggle saat sidebar terbuka
  }
}
