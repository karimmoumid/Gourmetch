# GourmeTech

GourmeTech est une application de recettes de cuisine qui permet aux utilisateurs de rechercher, filtrer et sauvegarder des recettes dans leurs favoris. L'application offre également une fonctionnalité de changement de thème (clair/sombre) et permet la persistance des données via `localStorage`.

## Prérequis

Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (version recommandée : `14.x` ou supérieure)
- Un éditeur de texte comme [Visual Studio Code](https://code.visualstudio.com/)

## Installation

### 1. Clonez le repository

Clonez ce repository sur votre machine locale en utilisant la commande suivante :

```bash
git clone https://github.com/votre-utilisateur/gourmetech.git
2. Accédez au répertoire du projet
Accédez au répertoire du projet que vous venez de cloner :

bash
Copier
cd gourmetech
3. Installer les dépendances
Bien que ce projet n'utilise pas de gestionnaire de paquets pour les dépendances externes (comme npm ou yarn), assurez-vous d'avoir un éditeur de texte capable de gérer des fichiers HTML, CSS et JavaScript.

Lancer le projet
Ouvrir le projet dans votre éditeur : Vous pouvez maintenant ouvrir le répertoire gourmetech dans votre éditeur de texte préféré.

Lancer le projet : Vous pouvez simplement ouvrir le fichier index.html dans votre navigateur préféré. Aucun serveur local n'est nécessaire pour ce projet statique.

Pour ce faire, ouvrez index.html avec un double-clic ou utilisez la commande suivante dans votre terminal (si vous avez un serveur local comme Live Server dans Visual Studio Code) :

bash
Copier
# Si vous utilisez Visual Studio Code, installez et ouvrez le projet avec Live Server
code .
Puis, lancez le serveur en cliquant sur "Go Live" dans Visual Studio Code.

Fonctionnalités
Recherche et filtres : Vous pouvez rechercher des recettes par mots-clés et affiner les résultats par catégorie (entrée, plat, dessert), temps de préparation, ou niveau de difficulté.

Favoris : Vous pouvez ajouter des recettes à vos favoris et les retrouver dans la page "Favoris".

Changement de thème : Passez du thème clair au thème sombre, avec persistance via localStorage.

Responsive : L'interface s'adapte à différentes tailles d'écrans (mobiles, tablettes, bureau).

Structure des fichiers
index.html : Page d'accueil avec la recherche, les filtres et la grille de recettes.

recette.html : Page contenant les détails d'une recette spécifique.

favoris.html : Page affichant les recettes favorites de l'utilisateur.

a-propos.html : Page à propos du site.

css/styles.css : Fichier CSS contenant les styles du projet.

js/scripts.js : Fichier JavaScript principal pour la gestion des interactions.

assets/ : Contient les images des recettes et les icônes pour l'interface.

Développement
Si vous souhaitez contribuer au projet, voici les étapes à suivre :

Forkez le repository.

Créez une branche pour vos nouvelles fonctionnalités (git checkout -b feature/nouvelle-fonctionnalité).

Faites vos modifications et committez-les (git commit -am 'Ajout de la fonctionnalité X').

Poussez la branche (git push origin feature/nouvelle-fonctionnalité).

Ouvrez une Pull Request pour discuter de vos changements.

Tests et Optimisation
Tests de compatibilité : Assurez-vous que le projet fonctionne sur les navigateurs modernes comme Chrome, Firefox, Safari et Edge.

Tests de responsivité : Vérifiez que le design est bien responsive et s'adapte à différents types d'écrans.

Optimisation des performances : Optimisez les images et minimisez les fichiers CSS et JavaScript si nécessaire.

Licence
Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.
