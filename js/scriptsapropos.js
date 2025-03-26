const questions =document.querySelectorAll('.faq-toggle');
const nickname = document.querySelector("#nickname");
const email = document.querySelector("#email");
const rgpd = document.querySelector("#rgpd");
const message = document.querySelector("textarea")
const form = document.querySelector("section #contact-form");


let nicknameValid = false;
let emailValid = false;
let messageValid = false;
let rgpdValid = false;



function formulaireValid() {
    let validation= !(nicknameValid && emailValid && messageValid );
    return !validation;
}



for(let question of questions){
    question.addEventListener("click", function(){
        const content = document.querySelector(`#${question.dataset.id}`);
        const isExpanded = content.style.display === 'block';
        content.style.display = isExpanded ? 'none' : 'block';
        question.setAttribute('aria-expanded', !isExpanded);
        content.setAttribute('aria-hidden', isExpanded);
    })};



    nickname.addEventListener("change", function () {
        if (nickname.value.length >= 5) {
            this.classList.remove("is-invalid");
            nicknameValid = true;
    
        } else {
            this.classList.add("is-invalid");
            nicknameValid = false;
        }
        formulaireValid();
    })

message.addEventListener("change", function () {

    if (this.value.length >= 50 ) {
        this.classList.remove("is-invalid");
        emailValid =true;
    }
    else {
        this.classList.add("is-invalid");
        emailValid=false;
    }
    formulaireValid();
}

);
email.addEventListener("change", function () {
    const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (mail.test(email.value)) {
        this.classList.remove("is-invalid");
        emailValid = true;
    } else {
        this.classList.add("is-invalid");
        emailValid = false;
    }
    formulaireValid();
});

rgpd.addEventListener("change", function () {
    
    if (!this.checked) {
        this.nextElementSibling.nextElementSibling.classList.remove("invalid-feedback");
        rgpdValid = true;
    }
    else {
        this.nextElementSibling.nextElementSibling.classList.add("invalid-feedback");
        rgpdValid = false;
    }
    formulaireValid();
})
form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (formulaireValid()) {
        alert("le formulaire est valide.")
    } else {
        const evenement = new Event("change");
        nickname.dispatchEvent(evenement);
        email.dispatchEvent(evenement);
        rgpd.dispatchEvent(evenement);
    }
}) 