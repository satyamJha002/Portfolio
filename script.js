const header = document.querySelector("header");
const menuToggler = document.querySelectorAll("#menu_toggle");

menuToggler.forEach((toggler) => {
  toggler.addEventListener("click", () => header.classList.toggle("showMenu"));
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    document.querySelector("nav").style.backgroundColor = "#86B6F6";
  } else {
    document.querySelector("nav").style.backgroundColor = "";
  }
});
