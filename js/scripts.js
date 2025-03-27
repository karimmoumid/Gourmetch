
const checkboxes = document.querySelectorAll('#filtre input[type="checkbox"]');
const recettes = document.querySelectorAll('#recette article');
let articlesListe = JSON.parse(localStorage.getItem("Liste des favorites")) ?? [];


function filterRecettes() {
    const categories = [...checkboxes].filter(checkbox => checkbox.checked && (checkbox.name === 'entree' || checkbox.name === 'plat' || checkbox.name === 'dessert'));
    const temps = [...checkboxes].filter(checkbox => checkbox.checked && (checkbox.name === 'rapide' || checkbox.name === 'moyen' || checkbox.name === 'long'));
    const difficultes = [...checkboxes].filter(checkbox => checkbox.checked && (checkbox.name === 'facile' || checkbox.name === 'dmoyen' || checkbox.name === 'difficile'));

    for (let recette of recettes) {
        const matchesCategory = categories.length === 0 || categories.some(c => c.id === recette.dataset.categ);
        const matchesTemps = temps.length === 0 || temps.some(t => t.id === recette.dataset.temps);
        const matchesDifficulte = difficultes.length === 0 || difficultes.some(d => d.id === recette.dataset.diff);

        recette.style.display = (matchesCategory && matchesTemps && matchesDifficulte) ? '' : 'none';
    };
}
for (let checkbox of checkboxes) {
    checkbox.addEventListener('change', filterRecettes);
}

for (let icon of heartIcons) {
    if (articlesListe.some(article => article.id === icon.dataset.id)) {
        icon.src = "assets/icons/mdi_heart.png";
    } else {
        icon.src = "assets/icons/mdi_heart (1).png";
    }
    icon.addEventListener('click', function () {
        icon.src = icon.src.includes('(1)') ? "assets/icons/mdi_heart.png" : "assets/icons/mdi_heart (1).png";
        icon.src = icon.src.includes('(1)') ? "assets/icons/mdi_heart (1).png" : "assets/icons/mdi_heart.png";

        if (!icon.src.includes('(1)')) {
            articlesListe.push(this.dataset);
            localStorage.setItem("Liste des favorites", JSON.stringify(articlesListe));
        } else {
            articlesListe = articlesListe.filter(article => article.id !== this.dataset.id);
            localStorage.setItem("Liste des favorites", JSON.stringify(articlesListe));
        }


    });

}
