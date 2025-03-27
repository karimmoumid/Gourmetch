// Sélectionne tous les éléments checkbox pour filtrer les recettes
const checkboxes = document.querySelectorAll('#filtre input[type="checkbox"]');

// Sélectionne toutes les recettes (articles) à filtrer
const recettes = document.querySelectorAll('#recette article');

// Récupère la liste des favoris depuis le localStorage, ou initialise une liste vide si elle n'existe pas
let articlesListe = JSON.parse(localStorage.getItem("Liste des favorites")) ?? [];

// Fonction de filtrage des recettes en fonction des critères sélectionnés
function filterRecettes() {
    // Filtrer les checkboxes pour les catégories, les temps et les difficultés sélectionnées
    const categories = [...checkboxes].filter(checkbox => checkbox.checked && ['entree', 'plat', 'dessert'].includes(checkbox.name));
    const temps = [...checkboxes].filter(checkbox => checkbox.checked && ['rapide', 'moyen', 'long'].includes(checkbox.name));
    const difficultes = [...checkboxes].filter(checkbox => checkbox.checked && ['facile', 'dmoyen', 'difficile'].includes(checkbox.name));

    // Boucle à travers chaque recette et applique le filtre
    for (let recette of recettes) {
        const matchesCategory = categories.length === 0 || categories.some(c => c.id === recette.dataset.categ);
        const matchesTemps = temps.length === 0 || temps.some(t => t.id === recette.dataset.temps);
        const matchesDifficulte = difficultes.length === 0 || difficultes.some(d => d.id === recette.dataset.diff);

        // Affiche ou cache la recette en fonction des filtres
        recette.style.display = (matchesCategory && matchesTemps && matchesDifficulte) ? '' : 'none';
    }
}

// Ajoute un événement 'change' à chaque checkbox pour appliquer le filtre lorsque l'utilisateur sélectionne/désélectionne un critère
for (let checkbox of checkboxes) {
    checkbox.addEventListener('change', filterRecettes);
}

// Met à jour les icônes de cœur en fonction des articles favoris stockés dans localStorage
for (let icon of heartIcons) {
    // Vérifie si l'élément est déjà dans la liste des favoris
    if (articlesListe.some(article => article.id === icon.dataset.id)) {
        icon.src = "assets/icons/mdi_heart.png"; // Cœur plein
    } else {
        icon.src = "assets/icons/mdi_heart (1).png"; // Cœur vide
    }

    // Ajoute un événement de clic pour alterner entre l'ajout et le retrait des favoris
    icon.addEventListener('click', function () {
        // Alterne l'icône du cœur entre plein et vide
        icon.src = icon.src.includes('(1)') ? "assets/icons/mdi_heart.png" : "assets/icons/mdi_heart (1).png";
        
        // Si l'icône est pleine, ajoute l'article aux favoris, sinon le retire
        if (!icon.src.includes('(1)')) {
            articlesListe.push(this.dataset); // Ajoute l'article à la liste des favoris
            localStorage.setItem("Liste des favorites", JSON.stringify(articlesListe)); // Sauvegarde la liste dans localStorage
        } else {
            articlesListe = articlesListe.filter(article => article.id !== this.dataset.id); // Retire l'article des favoris
            localStorage.setItem("Liste des favorites", JSON.stringify(articlesListe)); // Sauvegarde la liste mise à jour
        }
    });
}
