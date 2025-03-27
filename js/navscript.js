const burgerButton = document.querySelector("header img[alt='icon burger']"); 
const navMenu = document.querySelector("header nav");
const heartIcons = document.querySelectorAll('img[alt="icon de coeur pour rajouter aus favoris"]');
const savedTheme = localStorage.getItem('theme') || 'light';
const themeButton = document.querySelector('img[alt="icon pour changer de theme"]');


document.body.classList.add(savedTheme);
if(savedTheme ==="dark"){
    burgerButton.src="assets/icons/burgerblanc.png";
    themeButton.src="assets/icons/solar_sun-bold.png"
}


themeButton.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);
    localStorage.setItem('theme', newTheme); 
    if(newTheme ==="dark"){
        burgerButton.src="assets/icons/burgerblanc.png";
        themeButton.src="assets/icons/solar_sun-bold.png"
    }else{
        burgerButton.src="assets/icons/Vector (2).png";
        themeButton.src="assets/icons/Vector (1).png"
    }
});

burgerButton.addEventListener('click', function () {
    navMenu.classList.toggle('show');
});