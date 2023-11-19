Voici une documentation pour le projet :

# Documentation du Projet

Ce projet est une application Express.js avec une base de données SQLite et une interface utilisateur Vue.js. Il permet de créer un formulaire simple et d'interagir avec l'API Express.js pour soumettre les données du formulaire.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- Node.js : [Télécharger Node.js](https://nodejs.org)
- NPM (Node Package Manager) : NPM est inclus avec Node.js
- Nodemon `npm install -g nodemon`


## Installation

Suivez les étapes ci-dessous pour installer et exécuter le projet :

1. Clonez le dépôt GitHub du projet :

   ```
   git clone https://github.com/hackville254/demo-expressjs-vuejs.git
   ```

2. Accédez au répertoire du projet :

   ```
   cd demo-expressjs-vuejs
   ```
  Accédez au répertoire du server :
  
     ```
     cd server
     ```
  Accédez au répertoire du client :
  
     ```
     cd paulAm
     ```

3. Installez les dépendances du projet en exécutant la commande suivante (dans le server puis dans le client) :

   ```
   npm install
   ```

4. Démarrez le serveur en exécutant la commande suivante :

   ```
   npm start
   ```
5. Démarrez le client en exécutant la commande suivante :

   ```
   npm run dev
   ```

   Le serveur Express.js sera démarré et sera accessible à l'adresse `http://localhost:3000`.
   Le client Vue.js sera démarré et accesible à l'adresse `http://localhost:5173`.

## Structure du Projet

Le projet est organisé comme suit :

- `index.js` : Fichier principal contenant la configuration du serveur Express.js et les routes.
- `models.js` : Fichier contenant la définition du modèle pour le formulaire et la synchronisation avec la base de données SQLite.
- `HelloWorld.vue` : Fichier contenant le code du formulaire.
- `app.vue` : Fichier contenant le code du composant HelloWorld.vue.

## Utilisation

Une fois le serveur démarré, vous pouvez accéder à l'application dans votre navigateur à l'adresse `http://localhost:3000`. Vous verrez un formulaire avec des champs pour le nom, le prénom, l'âge, le pays et la ville.

Remplissez les champs du formulaire et cliquez sur le bouton "Soumettre". Les données du formulaire seront envoyées à l'API Express.js, qui les enregistrera dans la base de données SQLite.

## Personnalisation

Vous pouvez personnaliser l'application en modifiant les fichiers `index.js`, `models.js` et `HelloWorld.vue` selon vos besoins. Par exemple, vous pouvez ajouter des validations supplémentaires au formulaire, ajouter des champs supplémentaires au modèle de formulaire, ou modifier l'interface utilisateur Vue.js pour afficher les données soumises.

## Conclusion

Ce projet vous donne une base solide pour créer une application Express.js avec une base de données SQLite et une interface utilisateur Vue.js. Vous pouvez l'utiliser comme point de départ pour développer des fonctionnalités plus avancées ou l'adapter à vos propres besoins.

J'espère que cette documentation vous aide à comprendre le projet et à commencer à l'utiliser. N'hésitez pas à me contacter si vous avez des questions supplémentaires.
