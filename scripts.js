const navbar = document.querySelector("nav");
const navbarButton = navbar.querySelector("button");
const navbutton = document
  .getElementById("menu-button")
  .querySelector("button");

navbutton.addEventListener("click", () => {
  navbar.classList.add("open");
});

navbarButton.addEventListener("click", () => {
  navbar.classList.remove("open");
});
