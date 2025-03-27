let articlesListe = JSON.parse(localStorage.getItem("Liste des favorites"));

function phrase(){if(articlesListe.length == 0){
    let phrase = document.createElement("p");
    phrase.textContent="Vous n'avez pas de favoris";
    document.querySelector("#listefav").appendChild(phrase);
}
}
phrase();
for(let article of articlesListe){
    let template = document.querySelector("#fav");
    let clone = template.content.cloneNode("true");
    clone.querySelector("img").src=article.imagesrc;
    clone.querySelector("img").alt=article.titre;
    clone.querySelector("figcaption").textContent=article.titre;
    clone.querySelector("div p:first-of-type").textContent=article.categ;
    clone.querySelector("div p:nth-of-type(2)").textContent=article.temps;
    clone.querySelector("div p:last-of-type").textContent=article.diff;
clone.querySelector("article button:last-of-type").addEventListener("click",function(){
this.parentElement.remove();
articlesListe= articlesListe.filter(art => article.id !== art.id )
localStorage.setItem("Liste des favorites", JSON.stringify(articlesListe))
phrase();
})

    document.querySelector("#listefav").appendChild(clone);
}