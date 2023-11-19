<template>
  <div>
    <form @submit.prevent="submitForm">
      <label>Nom:</label>
      <input type="text" v-model="nom" required><br>

      <label>Prénom:</label>
      <input type="text" v-model="prenom" required><br>

      <label>Âge:</label>
      <input type="number" v-model="age" required><br>

      <label>Pays:</label>
      <input type="text" v-model="pays" required><br>

      <label>Ville:</label>
      <input type="text" v-model="ville" required><br>

      <button type="submit">Soumettre</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      nom: '',
      prenom: '',
      age: '',
      pays: '',
      ville: ''
    };
  },
  methods: {
    submitForm() {
      axios.post('http://localhost:3000/submit', {
        nom: this.nom,
        prenom: this.prenom,
        age: this.age,
        pays: this.pays,
        ville: this.ville
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    }
  }
};
</script>
