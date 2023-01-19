<template>
  <div class="container">
    <form @submit.prevent="register">
      <h2 class="mb-3">AssuerPlus</h2>
      <img alt="logo Accidents" src="../assets/logoAccident.png" style = "width: 50%">
      <div class="input">
        <label for="email">Email :</label>
        <input
          class="form-control"
          type="text"
          name="email"
          placeholder="..."
        />
      </div>
      <div class="input">
        <label for="password">Mot de passe :</label>
        <input
          class="form-control"
          type="password"
          name="password"
          placeholder="..."
        />
      </div>

      <div class="alternative-option mt-4">
        Vous avez déja un compte? <RouterLink :to= "{ name: 'login'}" >se connecter</RouterLink>
      </div>

      <button type="submit" id="register_button" class="mt-4 btn-pers">
        s'enregister
      </button>
      <div
        class="alert alert-warning alert-dismissible fade show mt-5 d-none"
        role="alert"
        id="alert_2"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </form>
  </div>
</template>

<script>
/* import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; */

/* export default {
  data() {
    return {
      email: "",
      password: "123456",
    };
  }, */
/*   methods: {
    register(submitEvent) {
      // data update
      this.email = submitEvent.target.elements.email.value;
      this.password = submitEvent.target.elements.password.value;

      // firebase registration
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          console.log("Registration completed");
          this.$router.push("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          let alert_2 = document.querySelector("#alert_2");
          alert_2.classList.remove("d-none");
          alert_2.innerHTML = errorMessage;
          console.log(alert_2);
        });
    },
    moveToLogin() {
      this.$router.push("/");
    },
  },
}; */
</script>

<style scoped lang="scss">
  .container  { 
  
  color: black;
  width: 500px;
  max-width: 95%;
  
}


.input {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  color: black;
}
.input > label {
  text-align: start;
  
  
}
.input > input {
  margin-top: 3px;
  height: 40px ;
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
.btn-pers:hover {
  background-color: #198754;
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
.alternative-option > span {
  color: #0d6efd;
  cursor: pointer;
}
#sign_out {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

</style>
