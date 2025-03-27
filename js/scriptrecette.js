const ajouterFav = document.querySelector("#infosGenerales button");

let articlesListe = JSON.parse(localStorage.getItem("Liste des favorites")) ?? [];

if(articlesListe.some(article =>article.titre =="Tagine")){
    ajouterFav.textContent="✔️ Déja ajouter à vos favoris"
}else{
    ajouterFav.textContent="Ajouter au favoris"
}

ajouterFav.addEventListener("click",function(){
    if(!articlesListe.some(article =>article.titre =="Tagine")){
        articlesListe.push(this.dataset);
        this.textContent="✔️ Déja ajouter à vos favoris"
    }else{
        articlesListe=articlesListe.filter(article => article.titre !=="Tagine");
        this.textContent="Ajouter au favoris"
    }
localStorage.setItem("Liste des favorites",JSON.stringify(articlesListe));
})

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