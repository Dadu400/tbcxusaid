const body = document.querySelector("body");
const navbar = document.getElementById("navbar");

const toggleBurgerButton = (burgerBtn) => {
  burgerBtn.classList.toggle("hamburger-active");

  document.getElementById("navbar-menu").classList.toggle("active");
  document.getElementById("mobile-navbar-open-blur").classList.toggle("active");
};

body.style.paddingTop = navbar.offsetHeight + "px";

document
  .getElementById("mobile-navbar-open-blur")
  .addEventListener("click", () => {
    toggleBurgerButton(document.getElementsByClassName("hamburger")[0]);
  });

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY == 0) {
    navbar.classList.remove("navbar-scrolled");
    body.style.paddingTop = navbar.offsetHeight + "px";
  } else {
    navbar.classList.add("navbar-scrolled");
    body.style.paddingTop = Math.min(scrollY, navbar.offsetHeight) + "px";
  }
});
