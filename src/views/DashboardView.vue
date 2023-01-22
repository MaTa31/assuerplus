<template>
  <div id="logout" class="d-flex flex-column justify-content-center">
    <div class="text-center text-black">Bienvenue, </div>
    <div id="username_display" class="display-7 text-primary">{{ email }}</div>
    <div class="text-center text-black">Numéro client : {{ n_client }} </div>
    <button id="sign_out" class="mt-4 btn btn-danger " @click="signOut">
      Se déconnecter
    </button>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: "dashboard",
  
  data : function () {

    return {

      email: "",
      n_client : ""

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
  },
};
</script>

<style scoped lang="scss">
#sign_out {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}


</style>
