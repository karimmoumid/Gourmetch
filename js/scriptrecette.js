// Sélectionne le bouton pour ajouter aux favoris
const ajouterFav = document.querySelector("#infosGenerales button");

// Récupère la liste des favoris depuis localStorage ou crée une liste vide si elle n'existe pas
let articlesListe = JSON.parse(localStorage.getItem("Liste des favorites")) ?? [];

// Vérifie si "Tagine" est déjà dans la liste des favoris
if (articlesListe.some(article => article.titre === "Tagine")) {
    ajouterFav.textContent = "✔️ Déjà ajouté à vos favoris"; // Si présent, affiche "Déjà ajouté"
} else {
    ajouterFav.textContent = "Ajouter aux favoris"; // Si non, affiche "Ajouter aux favoris"
}

// Ajoute ou retire "Tagine" de la liste des favoris lorsqu'on clique sur le bouton
ajouterFav.addEventListener("click", function () {
    if (!articlesListe.some(article => article.titre === "Tagine")) {
        // Si "Tagine" n'est pas encore dans la liste, l'ajouter
        articlesListe.push(this.dataset);
        this.textContent = "✔️ Déjà ajouté à vos favoris"; // Change le texte du bouton
    } else {
        // Si "Tagine" est déjà dans la liste, le retirer
        articlesListe = articlesListe.filter(article => article.titre !== "Tagine");
        this.textContent = "Ajouter aux favoris"; // Réinitialise le texte du bouton
    }

    // Sauvegarde la liste mise à jour dans localStorage
    localStorage.setItem("Liste des favorites", JSON.stringify(articlesListe));
});

// Pour chaque icône de cœur, on vérifie si l'article est dans la liste des favoris
for (let icon of heartIcons) {
    // Si l'article est déjà dans les favoris, on change l'icône du cœur
    if (articlesListe.some(article => article.id === icon.dataset.id)) {
        icon.src = "assets/icons/mdi_heart.png"; // Cœur plein
    } else {
        icon.src = "assets/icons/mdi_heart (1).png"; // Cœur vide
    }

    // Ajoute un événement de clic à chaque icône de cœur
    icon.addEventListener('click', function () {
        // Alterne entre l'icône du cœur plein et vide
        icon.src = icon.src.includes('(1)') ? "assets/icons/mdi_heart.png" : "assets/icons/mdi_heart (1).png";

        // Si l'icône est pleine, on l'ajoute aux favoris, sinon on la retire
        if (!icon.src.includes('(1)')) {
            // Ajoute l'article à la liste des favoris et sauvegarde dans localStorage
            articlesListe.push(this.dataset);
            localStorage.setItem("Liste des favorites", JSON.stringify(articlesListe));
        } else {
            // Retire l'article de la liste des favoris et met à jour localStorage
            articlesListe = articlesListe.filter(article => article.id !== this.dataset.id);
            localStorage.setItem("Liste des favorites", JSON.stringify(articlesListe));
        }
    });
}
