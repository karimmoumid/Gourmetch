// Sélectionne les éléments nécessaires dans le DOM
const questions = document.querySelectorAll('.faq-toggle');
const nickname = document.querySelector("#nickname");
const email = document.querySelector("#email");
const rgpd = document.querySelector("#rgpd");
const message = document.querySelector("textarea");
const form = document.querySelector("section #contact-form");

// Déclaration des variables de validation pour chaque champ
let nicknameValid = false;
let emailValid = false;
let messageValid = false;
let rgpdValid = false;

// Fonction de validation globale du formulaire
function formulaireValid() {
    // Si tous les champs sont validés, le formulaire est valide
    let validation = !(nicknameValid && emailValid && messageValid && rgpdValid);
    return !validation;
}

// Gestion de l'événement pour afficher/masquer les réponses des questions dans la FAQ
for (let question of questions) {
    question.addEventListener("click", function () {
        const content = document.querySelector(`#${question.dataset.id}`);
        const isExpanded = content.style.display === 'block';
        
        // Toggle l'affichage de la réponse
        content.style.display = isExpanded ? 'none' : 'block';

        // Met à jour les attributs d'accessibilité pour l'état de l'élément
        question.setAttribute('aria-expanded', !isExpanded);
        content.setAttribute('aria-hidden', isExpanded);
    });
}

// Validation du champ "nickname" (pseudo)
nickname.addEventListener("change", function () {
    if (nickname.value.length >= 5) {
        this.classList.remove("is-invalid"); // Enlève la classe d'erreur
        nicknameValid = true;
    } else {
        this.classList.add("is-invalid"); // Ajoute la classe d'erreur
        nicknameValid = false;
    }
    formulaireValid(); // Vérifie la validité du formulaire à chaque changement
});

// Validation du champ "message"
message.addEventListener("change", function () {
    if (this.value.length >= 50) {
        this.classList.remove("is-invalid"); // Enlève la classe d'erreur
        messageValid = true;
    } else {
        this.classList.add("is-invalid"); // Ajoute la classe d'erreur
        messageValid = false;
    }
    formulaireValid(); // Vérifie la validité du formulaire à chaque changement
});

// Validation du champ "email"
email.addEventListener("change", function () {
    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expression régulière pour l'email

    if (mailRegex.test(email.value)) {
        this.classList.remove("is-invalid"); // Enlève la classe d'erreur
        emailValid = true;
    } else {
        this.classList.add("is-invalid"); // Ajoute la classe d'erreur
        emailValid = false;
    }
    formulaireValid(); // Vérifie la validité du formulaire à chaque changement
});

// Validation du champ RGPD (case à cocher)
rgpd.addEventListener("change", function () {
    if (this.checked) {
        // Affiche le message d'erreur si non coché
        this.nextElementSibling.nextElementSibling.classList.add("invalid-feedback");
        rgpdValid = false;
    } else {
        // Enlève le message d'erreur si coché
        this.nextElementSibling.nextElementSibling.classList.remove("invalid-feedback");
        rgpdValid = true;
    }
    formulaireValid(); // Vérifie la validité du formulaire à chaque changement
});

// Gestion de l'événement de soumission du formulaire
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche la soumission réelle du formulaire

    // Si le formulaire est valide, affiche une alerte
    if (formulaireValid()) {
        alert("Le formulaire est valide.");
    } else {
        // Si le formulaire n'est pas valide, déclenche les événements de validation pour chaque champ
        const evenement = new Event("change");
        nickname.dispatchEvent(evenement);
        email.dispatchEvent(evenement);
        message.dispatchEvent(evenement);
        rgpd.dispatchEvent(evenement);
    }
});
