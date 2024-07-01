import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as firebase from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyAnNtkKHoxhlQ13UiWvCGy33Nzo42yZ_Us",
  authDomain: "rezume-2024-lv.firebaseapp.com",
  projectId: "rezume-2024-lv",
  storageBucket: "rezume-2024-lv.appspot.com",
  messagingSenderId: "490173535908",
  appId: "1:490173535908:web:edce5b2a70748a47123831",
  measurementId: "G-H73SNHYW1B"
}
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
