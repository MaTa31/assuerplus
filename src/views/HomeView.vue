<template>


  <div class="container">
    <div class="form d-flex flex-column">
      <div class="alert alert-success d-flex align-items-center" role="alert" v-if="success201">
        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-check-circle-fill flex-shrink-0 me-2"
          viewBox="0 0 16 16" role="img" aria-label="Warning:" style="height: 16px;">
          <path
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </svg>
        <div>
          Votre compte a bien été créé, veuillez vous connecter
        </div>
      </div>

      <div class="alert alert-warning d-flex align-items-center" role="alert" v-if="warning400_500">
        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
          viewBox="0 0 16 16" role="img" aria-label="Warning:" style="height: 16px;">
          <path
            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <div>
          Une erreur est survenue veuillez réessayer
        </div>
      </div>

      <div class="alert alert-danger d-flex align-items-center" role="alert" v-if="error401">
        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
          viewBox="0 0 16 16" role="img" aria-label="Warning:" style="height: 16px;">
          <path
            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <div>
          Combinaison mail/mot de passe incorrecte
        </div>
      </div>


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
          oninput="this.value=this.value.slice(0,this.dataset.maxlength)" placeholder="..."
          v-model="n_client" @blur="validateN_client" v-bind:class="{ 'is-invalid': invalideN_client }" />
        <div class="invalid-feedback">
          Merci d'utiliser votre numéro client à 6 chiffres
        </div>

      </div>

      <div class="input">
        <label for="password">Mot de passe :</label>
        <input class="form-control" type="password" placeholder="..." v-model="password" @blur="validatePwd"  v-bind:class="{ 'is-invalid': invalidePwd }" />
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
      invalidePwd: false,
      success201 : false,
      warning400_500: false,
      error401: false,




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

      axios.post("/register", newUser)
        
        .then((response) => {
            if (response.status == 201) {
              this.success201 = true;
            } else {
              this.warning400_500 = true;
            }
          })

    },

    login() {

      let User = {
        email: this.email,
        password: this.password,

      };

      axios.post("/login", User)
        .then((response) => {
          
          localStorage.setItem("token", response.data.token)
          this.$router.push("/dashboard")
        })
        .catch((error) => {
          if (error.response.status == 401) {
              this.error401 = true;
            } else {
              this.warning400_500 = true;
            }
          
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
