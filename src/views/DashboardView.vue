<template>
  <div  class="d-flex flex-column">
    <div class="d-flex flex-row justify-content-center">
      <div class="text-center text-black">Bienvenue,&nbsp</div>
      <div id="username_display" class="display-7 text-primary">{{ email }}</div>
    </div>
    
    <div class="text-center text-black ">Numéro client : {{ n_client }} </div>

    <button  class="mt-4 btn btn-danger align-self-center" @click="signOut">
      Se déconnecter
    </button>

    <div v-if="!sinister" class="text-center text-black mt-4">Vous n'avez pas de sinistre déclarer voulez vous ajouter un sinistre ? </div>
    <button v-if="!sinister"  class="mt-4 btn btn-primary align-self-center " @click="switchSinister">Faire une déclaration de sinistre</button>
    <button v-if="sinister" class="mt-4 btn btn-secondary align-self-center " @click="cancelSinister">Annuler</button>


    <div v-if="sinister" class="mb-3 mt-4">
    <label for="formFile" class="form-label text-black ">Document d'assurance (Carte verte)</label>
    <input class="form-control" type="file" id="formFile" accept=".jpg,.jpeg,.png,.pdf">
    </div>

    <div v-if="sinister" class="mb-3 mt-4">
    <label for="formFile" class="form-label text-black">Document du constat</label>
    <input class="form-control" type="file" id="formFile" accept=".jpg,.jpeg,.png,.pdf">
    </div>

    <div v-if="sinister" class="mb-3 mt-4">
    <label for="formFile" class="form-label text-black">Photos du sinistre</label>
    <input class="form-control" type="file" id="formFile" accept=".jpg,.jpeg,.png,.pdf">
    </div>

    <div v-if="sinister" id="Filerules" class="text-center text-black ">Nous n'acceptons que les fichiers image (png/jpeg/jpg) ou PDF d'une taille maximum de 5Mo par fichier</div>

    <button v-if="sinister" class="mt-4 btn btn-success align-self-center " @click="SaveSinister">Enregistrer</button>


  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: "dashboard",
  
  data  () {

    return {

      email: "",
      n_client : "",
      sinister : false

    }

  }, 
  created() {
    if (localStorage.getItem("token") === null) {
      this.$router.push({ name: "home" });
    }
  },

  mounted() {

    axios.get('http://localhost:5000/user', { headers: { token: localStorage.getItem('token')}})
     .then(response => {
        this.email = response.data.user.email;
        this.n_client = response.data.user.n_client;
     })



  },

  methods: {
    signOut() {
      localStorage.clear();
      this.$router.push({ name: "home" });
    },

  switchSinister() {
    this.sinister =true;
  },

  cancelSinister() {
    this.sinister =false;
  },

  SaveSinister(){

    this.sinister=false

  

  } 
  },
};
</script>

<style scoped lang="scss">

#Filerules {

  font-size: 0.7rem;

}



</style>
