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

