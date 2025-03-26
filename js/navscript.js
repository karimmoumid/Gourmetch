const burgerButton = document.querySelector("header img[alt='icon burger']"); 
const navMenu = document.querySelector("header nav");

burgerButton.addEventListener('click', function () {
    navMenu.classList.toggle('show');
});