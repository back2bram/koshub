const navBarNav = document.querySelector(".navbar-nav");

// klik menu untuk memunculkan list side bar
document.querySelector("#menu-list").onclick = () => {
  navBarNav.classList.toggle("active");
};

// disable side bar menu jika diklik di luar side bar menu-nya
const menuList = document.querySelector("#menu-list");

document.addEventListener("click", function (event) {
  if (!navBarNav.contains(event.target) && !menuList.contains(event.target)) {
    navBarNav.classList.remove("active");
  }
});
