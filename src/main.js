import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as firebase from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyCsHxmbcm1Zg_w5EV7RuOsCxCUxLmgG13w",
  authDomain: "volodymyr-litvinovsky.firebaseapp.com",
  projectId: "volodymyr-litvinovsky",
  storageBucket: "volodymyr-litvinovsky.appspot.com",
  messagingSenderId: "743670319049",
  appId: "1:743670319049:web:d3e887c46c38ba34fdca18"
}
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
