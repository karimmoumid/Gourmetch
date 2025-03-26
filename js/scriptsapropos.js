const questions =document.querySelectorAll('.faq-toggle');
const nickname = document.querySelector("#nickname");
const email = document.querySelector("#email");
const rgpd = document.querySelector("#rgpd");
const message = document.querySelector("textarea")
const button = document.querySelector("form button");

function validateform() {
    const nicknameValidate = nickname.value.length > 5;
    const emailValidate = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value);
    const messageValidate = nickname.value.length > 50;
    const rgpdValidate = rgpd.checked;
    if (nicknameValidate && emailValidate && messageValidate && rgpdValidate) {
        button.removeAttribute("disabled")
    } else {
        button.setAttribute("disabled", "true");
    }

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

    if (this.value.length >= 5 ) {
        this.classList.remove("is-invalid");
    }
    else {
        this.classList.add("is-invalid");
    }
    validateform();
});
message.addEventListener("change", function () {

    if (this.value.length >= 50 ) {
        this.classList.remove("is-invalid");
    }
    else {
        this.classList.add("is-invalid");
    }
    validateform();
}

);
email.addEventListener("change", function () {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (regex.test(this.value)) {
        this.classList.remove("is-invalid");
    } else {
        this.classList.add("is-invalid");
    }
    validateform();
}
);

rgpd.addEventListener("change", function () {
    if (!this.checked) {
        this.nextElementSibling.nextElementSibling.classList.remove("invalid-feedback");
    }
    else {
        this.nextElementSibling.nextElementSibling.classList.add("invalid-feedback");
    }
    validateform();
});
