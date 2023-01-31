import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';


axios.defaults.headers.common['token'] = localStorage.getItem('token');
axios.defaults.baseURL = process.env.VUE_APP_URL_API;


createApp(App).use(router).mount('#app')
