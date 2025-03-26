const questions =document.querySelectorAll('.faq-toggle');
for(let question of questions){
    question.addEventListener("click", function(){
        const content = document.querySelector(`#${question.dataset.id}`);
console.log(content);
        const isExpanded = content.style.display === 'block';
        content.style.display = isExpanded ? 'none' : 'block';
        question.setAttribute('aria-expanded', !isExpanded);
        content.setAttribute('aria-hidden', isExpanded);
    })};

