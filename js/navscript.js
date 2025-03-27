// Sélection des éléments du DOM
const burgerButton = document.querySelector("header img[alt='icon burger']"); 
const navMenu = document.querySelector("header nav");
const heartIcons = document.querySelectorAll('img[alt="icon de coeur pour rajouter aus favoris"]');
const savedTheme = localStorage.getItem('theme') || 'light'; // Récupère le thème sauvegardé dans localStorage (par défaut 'light')
const themeButton = document.querySelector('img[alt="icon pour changer de theme"]');

// Applique le thème sauvegardé au body de la page
document.body.classList.add(savedTheme);

// Si le thème est sombre, change l'icône du burger et du thème
if (savedTheme === "dark") {
    burgerButton.src = "assets/icons/burgerblanc.png"; // Change l'icône du burger en version blanche pour le thème sombre
    themeButton.src = "assets/icons/solar_sun-bold.png"; // Change l'icône de changement de thème pour le mode sombre
}

// Ajoute un événement de clic sur le bouton de changement de thème
themeButton.addEventListener('click', () => {
    // Vérifie quel est le thème actuel (clair ou sombre)
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'; // Inverse le thème

    // Change le thème sur le body
    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);

    // Sauvegarde le nouveau thème dans le localStorage pour qu'il soit persistant
    localStorage.setItem('theme', newTheme);

    // Si le thème est sombre, ajuste les icônes (burger et thème)
    if (newTheme === "dark") {
        burgerButton.src = "assets/icons/burgerblanc.png"; // Burger blanc pour le thème sombre
        themeButton.src = "assets/icons/solar_sun-bold.png"; // Icône du soleil pour le mode sombre
    } else {
        burgerButton.src = "assets/icons/Vector (2).png"; // Burger normal pour le thème clair
        themeButton.src = "assets/icons/Vector (1).png"; // Icône de lune pour le mode clair
    }
});

// Ajoute un événement de clic sur le bouton du burger pour afficher ou masquer le menu
burgerButton.addEventListener('click', function () {
    navMenu.classList.toggle('show'); // Ajoute ou enlève la classe 'show' pour afficher/masquer le menu
});
