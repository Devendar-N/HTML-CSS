
function toggleMenu() {
  document.getElementById("main-header-menu-links").classList.toggle("show");
}

const year = new Date().getFullYear();
document.getElementById("copyright-text").textContent = `Copyright Rimel ${year}. All right reserved`;

