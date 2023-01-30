<template>

  <div class="container">
    <div class="d-flex flex-column">



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

      <div class="alert alert-warning d-flex align-items-center" role="alert" v-if="errorMissing">
        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
          viewBox="0 0 16 16" role="img" aria-label="Warning:" style="height: 16px;">
          <path
            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <div>
          Merci d'ajouter des fichers à tous les champs du formulaire
        </div>
      </div>


      <div class="alert alert-danger d-flex align-items-center" role="alert" v-if="errorExt">
        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
          viewBox="0 0 16 16" role="img" aria-label="Warning:" style="height: 16px;">
          <path
            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <div>
          Merci de sélectionner une extension de fichier autoriser
        </div>
      </div>

      <div class="alert alert-danger d-flex align-items-center" role="alert" v-if="errorSize">
        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
          viewBox="0 0 16 16" role="img" aria-label="Warning:" style="height: 16px;">
          <path
            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <div>
          le fichier ou la sommes des fichier dépasse {{ maxFilesSize }}Mb
        </div>
      </div>

      <div class="alert alert-danger d-flex align-items-center" role="alert" v-if="error401">
        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
          viewBox="0 0 16 16" role="img" aria-label="Warning:" style="height: 16px;">
          <path
            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <div>
          Vous n'etes pas autorisé a effectuer cette action, merci de vous reconnecter
        </div>
      </div>

      <div class="alert alert-warning d-flex align-items-center" role="alert" v-if="errorMax">
        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
          viewBox="0 0 16 16" role="img" aria-label="Warning:" style="height: 16px;">
          <path
            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        <div>
          Merci de sélectionner {{ maxFiles }} photos maximum
        </div>
      </div>

      <div class="d-flex flex-row justify-content-center">
        <div class="text-center text-black">Bienvenue,&nbsp</div>
        <div id="username_display" class="display-7 text-primary">{{ email }}</div>
      </div>

      <div class="text-center text-black ">Numéro client : {{ n_client }} </div>

      <button class="mt-4 btn btn-danger align-self-center" @click="signOut">
        Se déconnecter
      </button>
      <div class="mt-4 alert alert-success d-flex align-items-center" role="alert" v-if="successUpload">
        <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-check-circle-fill flex-shrink-0 me-2" viewBox="0 0 16 16"
          role="img" aria-label="Warning:" style="height: 16px;">
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </svg>
        <div>
          Vos documents ont été transmis , vous pouvez vous déconnecter
        </div>
      </div>
      <div v-if="!successUploadFiles" class="text-center text-black mt-4">Voulez vous déclarer un sinistre ? </div>
      <button v-if="!successUploadFiles" class="mt-4 btn btn-primary align-self-center " @click="switchSinister">Faire une
        déclaration de sinistre</button>
      <button v-if="sinister" class="mt-4 btn btn-secondary align-self-center " @click="cancelSinister">Annuler</button>

      <form @submit.prevent="sendFiles" action='/sendFiles' enctype='multipart/form-data' class="d-flex flex-column">

        <div v-if="sinister" class="mb-3 mt-4">
          <label for="formFile" class="form-label text-black ">Document d'assurance (Carte verte)</label>
          <input ref="input1" class="form-control" type="file" id="formFile" accept=".jpg,.jpeg,.png,.pdf"
            name="carte_verte">
        </div>

        <div v-if="sinister" class="mb-3 mt-4">
          <label for="formFile" class="form-label text-black">Document du constat</label>
          <input ref="input2" class="form-control" type="file" id="formFile" accept=".jpg,.jpeg,.png,.pdf"
            name="constat">
        </div>

        <div v-if="sinister" class="mb-3 mt-4">
          <label for="formFile" class="form-label text-black">Photos du sinistre</label>
          <input ref="input3" class="form-control" type="file" id="formFile" multiple accept=".jpg,.jpeg,.png,.pdf"
            name="photos">
        </div>

        <div v-if="sinister" id="Filerules" class="text-center text-black ">Nous n'acceptons que les fichiers image
          (png/jpeg/jpg) ou PDF d'une taille maximum de {{ maxFilesSize/ (10 ** 6) }}Mo par fichier et de {{ maxFiles }}
          photos </div>

        <button v-if="sinister" @click.prevent="sendFiles" class="mt-4 btn btn-success align-self-center ">Transmettre
          mes
          Documents</button>




      </form>





    </div>
  </div>

</template>

<script>


import axios from 'axios';
axios.defaults.headers.common['token'] = localStorage.getItem('token');
axios.defaults.baseURL = process.env.VUE_APP_URL_API + 'api';





export default {
  name: "dashboard",

  data() {

    return {

      email: "",
      n_client: "",
      sinister: false,
      successUploadFiles: false,
      files: [],
      maxFiles: 6,
      maxFilesSize: 25000000,
      timesShowAlerts: 5000,
      successUpload: false,
      warning400_500: false,
      error401: false,
      errorExt: false,
      errorType: false,
      errorSize: false,
      errorMissing: false,
      errorMax: false,
      noFiles: true


    }

  },
  created() {
    if (localStorage.getItem("token") === null) {
      this.$router.push({ name: "home" });
    }
  },

  mounted() {

    axios.get('/user')
      .then(response => {
        this.email = response.data.user.email;
        this.n_client = response.data.user.n_client;
      })
      .catch((error) => {
        if (error.response.status === 401) {
          this.error401 = true;
        } else {
          this.warning400_500 = true;
        }
      })

  },

  methods: {





    sendFiles(event) {

      this.files = []
      this.files.push(this.$refs.input1.files, this.$refs.input2.files, this.$refs.input3.files)
      const arr = this.files

      const formData = new FormData();

      if (this.$refs.input1.value === "" || this.$refs.input2.value === "" || this.$refs.input3.value === "") {
        event.preventDefault();
        this.errorMissing = true;
        setTimeout(() => {
          this.errorMissing = false
        }, this.timesShowAlerts);
        return;

      }


      if (this.$refs.input3.files.length > this.maxFiles) {
        event.preventDefault();
        this.errorMax = true;
        setTimeout(() => {
          this.errorMax = false
        }, this.timesShowAlerts);
        return;
      }



      for (let i = 0; i < arr.length; i++) {

        const filelist = arr[i]
        console.log(filelist)

        for (const files of filelist) {

          formData.append('files', files)

          console.log(files.type)

          if (files.type == "image/png" || files.type == "image/jpg" || files.type == "image/jpeg" || files.type == "application/pdf") {
            if (files.size > this.maxFilesSize) {
              event.preventDefault();
              this.errorSize = true;
              setTimeout(() => {
                this.errorSize = false
              }, this.timesShowAlerts);
              return;
            }

          } else {
            event.preventDefault();
            this.errorExt = true;
            setTimeout(() => {
              this.errorExt = false
            }, this.timesShowAlerts);
            return;
          }


        }


      }


      axios.post('/sendFiles',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',

          }
        },

      ).then(() => {

        this.successUpload = true;
        this.successUploadFiles = true;
        this.sinister = false


      })


        .catch((error) => {

          if (error.response.status === 401) {
            this.error401 = true;
            setTimeout(() => {
              this.error401 = false
            }, this.timesShowAlerts)

          } else {
            this.warning400_500 = true
            setTimeout(() => {
              this.warning400_500 = false
            }, this.timesShowAlerts)

          }

        });

      this.files = []


    },

    sendMail() {

      console.log(localStorage.getItem('token'))

      axios.post('/sendMail',

        {
          headers: {
            token: localStorage.getItem('token'),
            'Content-Type': 'multipart/form-data',

          }
        },

      ).then(() => {

        this.successUpload = true;
        setTimeout(() => {
          this.successUpload = false
        }, this.timesShowAlerts)


      })


        .catch((error) => {

          if (error.response.status === 401) {
            this.error401 = true;
            setTimeout(() => {
              this.error401 = false
            }, this.timesShowAlerts)

          } else {
            this.warning400_500 = true
            setTimeout(() => {
              this.warning400_500 = false
            }, this.timesShowAlerts)

          }

        });



    },

    signOut() {
      localStorage.clear();
      this.$router.push({ name: "home" });
    },

    switchSinister() {
      this.sinister = true;
    },

    cancelSinister() {
      this.sinister = false;
    },
  },
};
</script>

<style scoped lang="scss">
#Filerules {

  font-size: 0.7rem;

}
</style>
