<template>


  <div class="container">
    <div class="form d-flex flex-column">
      <div class="mb-3 text-center">
        <h2>AssuerPlus</h2>
        <img alt="logo Accidents" src="../assets/logoAccident.png" style="width: 50%">
      </div>

      <div class="input">
        <label for="Email" class="form-label">Email :</label>
        <input id="Email" class="form-control" type="text" placeholder="..." v-model="email" @blur="validateEmail"
          v-bind:class="{ 'is-invalid': invalideMail }" />
        <div class="invalid-feedback">
          Merci d'utiliser un email valide
        </div>

      </div>


      <div class="input" v-if="mode == 'viewregister'">
        <label for="n_client">Numéro Client :</label>
        <input id="n_client" class="form-control" type="number" data-maxlength="6"
          oninput="this.value=this.value.slice(0,this.dataset.maxlength)" name="Numéro Client" placeholder="..."
          v-model="n_client" @blur="validateN_client" v-bind:class="{ 'is-invalid': invalideN_client }" />
        <div class="invalid-feedback">
          Merci d'utiliser votre numéro client à 6 chiffres
        </div>

      </div>

      <div class="input">
        <label for="password">Mot de passe :</label>
        <input class="form-control" type="password" v-model="password" @blur="validatePwd"
          v-bind:class="{ 'is-invalid': invalidePwd }" />
        <div class="invalid-feedback">
          Mot de passe au minimum 8 caractère dont 1 Majuscule, 1 Minuscule, 1 Chiffre et 1 caractère spécial
          [?!@$%^&*-]
        </div>



      </div>
      <div class="alternative-option mt-4" v-if="mode == 'viewlogin'">Vous n'avez pas de compte? <span
          @click="switchregister">s'enregistré</span></div>
      <div class="alternative-option mt-4" v-else>Vous avez déja un compte? <span @click="switchlogin">se
          connecter</span></div>


      <button :disabled="ChampsLogvide" type="submit" class="mt-4 btn-pers align-self-center" id="login_button"
        v-if="mode == 'viewlogin'" @click="login">Connexion</button>
      <button :disabled="Champsregistervide" type="submit" class="mt-4 btn-pers align-self-center" id="register_button"
        v-else @click="register">s'enregister</button>




      <div class="alert alert-warning alert-dismissible fade show mt-5 d-none" role="alert" id="alert_1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
  </div>
</template>

<script>


import axios from "axios";


export default {


  data() {


    return {
      email: "",
      n_client: "",
      password: "",
      mode: "viewlogin",
      invalideMail: false,
      invalideN_client: false,
      invalidePwd: false



    };

  },





  methods: {

    validateEmail() {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {

        this.invalideMail = false

      } else {

        this.invalideMail = true
      }
    },

    validateN_client() {

      const value = this.n_client
      if (String(value).length == 6) {

        this.invalideN_client = false

      } else {

        this.invalideN_client = true
      }



    },


    validatePwd() {

      const value = this.password

      const containsUppercase = /[A-Z]/.test(value)
      const containsLowercase = /[a-z]/.test(value)
      const containsNumber = /[0-9]/.test(value)
      const containsSpecial = /[?!@$%^&*-]/.test(value)
      if (containsUppercase && containsLowercase && containsNumber && containsSpecial && value.length > 7) {

        this.invalidePwd = false
      }
      else {

        this.invalidePwd = true
      }
    },


    switchlogin() {
      this.mode = "viewlogin";
    },
    switchregister() {
      this.mode = "viewregister";
    },

    register() {
      let newUser = {
        email: this.email,
        password: this.password,
        n_client: this.n_client
      };

      axios.post(" http://localhost:5000/register", newUser)



    },

    login() {

      let User = {
        email: this.email,
        password: this.password,

      };

      axios.post("http://localhost:5000/login", User)
        .then((response) => {
          /* console.log(response) */

          localStorage.setItem("token", response.data.token)
          this.$router.push("/dashboard")
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },

  computed: {
    /* Pas Top voir si meilleur methode pour lock button  */
    ChampsLogvide() {

      return (this.email != "" && this.password != "") ? false : true;

    },

    Champsregistervide() {

      return (this.email != "" && this.password != "" && this.n_client != "") ? false : true;

    }
  }

}










/* methods: {
  login(submitEvent) {
    this.email = submitEvent.target.elements.email.value;
    this.password = submitEvent.target.elements.password.value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.email, this.password)
      .then(() => {
        this.$router.push("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        let alert_1 = document.querySelector("#alert_1");
        alert_1.classList.remove("d-none");
        alert_1.innerHTML = errorMessage;
        console.log(alert_1);
      });
  },
  
}, */

</script>

<style scoped lang="scss">
.container {

  color: black;
  width: 500px;
  max-width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* text-align: center; */

}


.input {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  color: black;
}

.input>label {
  text-align: start;


}

.input>input {
  margin-top: 3px;
  height: 40px;
}

.btn-pers {
  position: relative;
  padding: 1em 2.5em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 700;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  ;

}


.btn-pers:disabled {
  position: relative;
  padding: 1em 2.5em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 700;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: not-allowed;
  outline: none;




}

#login_button:enabled:hover {
  background-color: rgb(36, 39, 236);
  box-shadow: 0px 15px 20px rgb(36, 39, 236, 0.4);
  color: #fff;
  transform: translate(0, -7px);
}

#register_button:enabled:hover {
  background-color: rgba(46, 229, 157, );
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translate(0, -7px);
}

.btn-pers:active {
  transform: translate(0, -1px);
}

.alternative-option {
  text-align: center;
}

.alternative-option>span {
  color: #0d6efd;
  cursor: pointer;
}
</style>
