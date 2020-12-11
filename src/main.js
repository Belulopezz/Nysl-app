import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase/app'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDssid9RA4GFw-MMBCiDuIchFTI6cS9yL0",
  authDomain: "nysl-app-b.firebaseapp.com",
  databaseURL: "https://nysl-app-b.firebaseio.com",
  projectId: "nysl-app-b",
  storageBucket: "nysl-app-b.appspot.com",
  messagingSenderId: "193504859462",
  appId: "1:193504859462:web:a2d5b1a19f031d40b58147"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
