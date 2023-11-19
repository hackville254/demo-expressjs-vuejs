const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

// Définir le modèle pour le formulaire
const Formulaire = sequelize.define('formulaire', {
  nom: {
    type: Sequelize.STRING
  },
  prenom: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  pays: {
    type: Sequelize.STRING
  },
  ville: {
    type: Sequelize.STRING
  }
});

// Synchroniser le modèle avec la base de données
sequelize.sync()
  .then(() => {
    console.log('Base de données synchronisée');
  })
  .catch(error => {
    console.error('Erreur lors de la synchronisation de la base de données:', error);
  });

module.exports = Formulaire;
