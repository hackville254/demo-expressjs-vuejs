const express = require('express');
const app = express();
const cors = require('cors');
const Formulaire = require('./models');
const port = 3000;

// Middleware pour parser les requêtes JSON
app.use(express.json());
// Ajouter les cors pour permettre a vue d'acceder a l'application express
app.use(cors());
// Definir les url autorisées a acceder a l'application
app.use(cors({
    origin: 'http://localhost:5173' // Remplacez par votre domaine autorisé
}));

// Définir les routes
app.get('/', (req, res) => {
    res.send('Bienvenue sur mon formulaire!');
});

app.post('/submit', (req, res) => {
    const { nom, prenom, age, pays, ville } = req.body;
    console.log("request")
    Formulaire.create({ nom, prenom, age, pays, ville })
        .then(() => {
            res.send('Formulaire soumis avec succès!');
        })
        .catch(error => {
            console.error('Erreur lors de l\'insertion des données:', error);
            res.status(500).send('Erreur lors de la soumission du formulaire');
        });
});


// Démarrer le serveur
app.listen(port, () => {
    console.log(`Le serveur est en écoute sur le port ${port}`);
});
