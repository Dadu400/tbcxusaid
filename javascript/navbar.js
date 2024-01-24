
const toggleBurgerButton = (burgerBtn) => {
    burgerBtn.classList.toggle("hamburger-active");
    
    document.getElementById("navbar-menu").classList.toggle("active");
}