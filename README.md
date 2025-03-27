# GourmeTech - Plateforme de Recettes Culinaires

**GourmeTech** est une plateforme interactive de recettes culinaires qui permet aux utilisateurs de rechercher, filtrer et sauvegarder leurs recettes favorites. Ce projet inclut des fonctionnalités telles que le filtrage dynamique, l'ajout et la suppression de favoris, ainsi que le changement de thème entre clair et sombre.

---

## Prérequis

Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :

- [Navigateur Web](https://www.google.com/chrome/) (Chrome, Firefox, Safari, etc.)
- [Éditeur de texte](https://code.visualstudio.com/) (Visual Studio Code, Sublime Text, etc.)
- [Node.js](https://nodejs.org/) (si vous souhaitez utiliser un serveur local ou des outils de développement)

---

## Installation

### 1. Cloner le dépôt

Clonez ce projet sur votre machine locale en utilisant Git :

```bash
git clone https://github.com/votre-utilisateur/gourmetech.git
2. Structure du projet
Le projet contient les fichiers suivants :

bash
Toujours afficher les détails

Copier
gourmetech/
├── index.html            # Page d'accueil
├── recette.html          # Page de recette
├── favoris.html          # Page des favoris
├── a-propos.html         # Page à propos
├── css/
│   ├── style.css         # Styles CSS
│   ├── normalize.css     # Réinitialisation CSS
├── js/
│   ├── main.js           # Logique principale de l'application
│   ├── navscript.js      # Script de gestion de la navigation
├── assets/
│   ├── icons/            # Icônes utilisées dans l'application
│   └── images/           # Images des recettes
└── README.md             # Fichier de documentation du projet
3. Ouvrir le projet dans votre éditeur
Ouvrez le dossier du projet avec votre éditeur de texte préféré (ex. : Visual Studio Code).

Lancer le projet
1. Lancer le projet localement
Vous pouvez ouvrir les fichiers HTML directement dans votre navigateur ou, si vous préférez, vous pouvez lancer un serveur local. Si vous avez installé Node.js, vous pouvez utiliser le module http-server :

Installez http-server :

bash
Toujours afficher les détails

Copier
npm install --global http-server
Démarrez le serveur dans le dossier de votre projet :

bash
Toujours afficher les détails

Copier
http-server
Cela démarrera un serveur local. Vous pourrez maintenant accéder à votre projet dans le navigateur à l'adresse suivante :

arduino
Toujours afficher les détails

Copier
http://localhost:8080
Fonctionnalités
Page d'Accueil
Recherche: Un champ de recherche pour trouver des recettes par mots-clés.

Filtres: Filtrage par catégorie, temps de préparation et niveau de difficulté.

Affichage des recettes: Une grille de recettes avec l'image, le titre, la catégorie, le temps de préparation et le niveau de difficulté.

Favoris: Ajouter et retirer des recettes de vos favoris.

Page des Recettes
Détails d'une recette: Affichage des détails de chaque recette avec les ingrédients et les étapes de préparation.

Ajouter aux favoris: Ajouter la recette à vos favoris.

Page des Favoris
Liste des favoris: Voir et supprimer les recettes que vous avez ajoutées à vos favoris.

Changement de thème
Thème clair/sombre: Permet de basculer entre les thèmes clair et sombre avec persistance via localStorage.

Technologies utilisées
HTML5: Structure et sémantique de la page.

CSS3: Mise en page responsive et gestion du thème clair/sombre.

JavaScript: Logique de filtrage des recettes, gestion des favoris et changement de thème.

localStorage: Sauvegarde des favoris pour qu'ils soient persistants entre les sessions.

Contribution
Si vous souhaitez contribuer à ce projet, voici quelques étapes pour commencer :

Forkez ce projet

Créez une branche pour votre fonctionnalité (git checkout -b feature/nouvelle-fonctionnalite)

Faites vos modifications

Testez vos modifications localement

Soumettez une pull request

Licence
Ce projet est sous licence MIT. Consultez le fichier LICENSE pour plus de détails.

Remerciements
Merci d'avoir consulté ce projet. Si vous avez des questions ou des suggestions, n'hésitez pas à ouvrir une issue ou à nous contacter. """
