const menuToggle = document.querySelector('.menu-toggle');
const navBarLinks = document.querySelector('.navbar__links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navBarLinks.classList.toggle('active');
})