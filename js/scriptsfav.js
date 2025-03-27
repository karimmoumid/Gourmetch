// Récupère la liste des favoris depuis le localStorage (s'il y en a)
let articlesListe = JSON.parse(localStorage.getItem("Liste des favorites"));

// Fonction qui affiche un message si la liste des favoris est vide
function phrase() {
    // Vérifie si la liste des favoris est vide
    if (articlesListe.length == 0) {
        // Crée un élément de paragraphe
        let phrase = document.createElement("p");
        // Définit le texte du paragraphe
        phrase.textContent = "Vous n'avez pas de favoris";
        // Ajoute le paragraphe dans l'élément avec l'id #listefav
        document.querySelector("#listefav").appendChild(phrase);
    }
}

// Appelle la fonction phrase() pour vérifier si la liste des favoris est vide
phrase();

// Parcourt chaque article dans la liste des favoris
for (let article of articlesListe) {
    // Sélectionne le modèle HTML pour l'affichage des favoris (template avec l'id "fav")
    let template = document.querySelector("#fav");

    // Clone le contenu du template pour chaque article
    let clone = template.content.cloneNode("true");

    // Modifie l'image du clone avec les informations de l'article
    clone.querySelector("img").src = article.imagesrc;
    clone.querySelector("img").alt = article.titre;

    // Modifie le titre de l'article dans le clone
    clone.querySelector("figcaption").textContent = article.titre;

    // Modifie la catégorie, le temps de préparation et la difficulté dans le clone
    clone.querySelector("div p:first-of-type").textContent = article.categ;
    clone.querySelector("div p:nth-of-type(2)").textContent = article.temps;
    clone.querySelector("div p:last-of-type").textContent = article.diff;

    // Ajoute un gestionnaire d'événements pour le bouton de suppression de l'article
    clone.querySelector("article button:last-of-type").addEventListener("click", function() {
        // Supprime l'élément de l'article du DOM
        this.parentElement.remove();

        // Retire l'article de la liste des favoris en filtrant par l'ID
        articlesListe = articlesListe.filter(art => article.id !== art.id);

        // Met à jour le localStorage avec la nouvelle liste des favoris
        localStorage.setItem("Liste des favorites", JSON.stringify(articlesListe));

        // Réaffiche le message si la liste est vide
        phrase();
    });

    // Si l'article a pour titre "Tagine", on ajoute un lien spécifique
    if (article.titre === "Tagine") {
        // Crée un lien pour la recette
        let phrase = document.createElement("a");
        // Définit l'attribut href du lien pour rediriger vers la page de recette
        phrase.setAttribute("href", "recette.html");
        // Définit le texte du lien
        phrase.textContent = "Voir recette";

        // Modifie le premier bouton dans l'article pour y mettre le lien à la place
        clone.querySelector("article button:first-of-type").textContent = "";
        clone.querySelector("article button:first-of-type").appendChild(phrase);
    }

    // Ajoute le clone dans l'élément avec l'id #listefav
    document.querySelector("#listefav").appendChild(clone);
}
