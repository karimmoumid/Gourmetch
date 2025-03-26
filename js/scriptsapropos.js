const questions =document.querySelectorAll('.faq-toggle');
for(let question of questions){
    question.addEventListener("click", function(){
        const content = document.querySelector(`#1`);
console.log(content);
        // Basculer l'affichage du contenu
        const isExpanded = content.style.display === 'block';
        content.style.display = isExpanded ? 'none' : 'block';
        button.setAttribute('aria-expanded', !isExpanded);
        content.setAttribute('aria-hidden', isExpanded);
    })};

