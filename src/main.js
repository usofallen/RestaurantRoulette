import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

// Import the functions you need from the SDKs you need

const firebaseConfig = {
    apiKey: "AIzaSyCxty3sSiH0Wu2O5uV0XAUQMs-YzEihiKI",
    authDomain: "restaurantroulett.firebaseapp.com",
    projectId: "restaurantroulett",
    storageBucket: "restaurantroulett.appspot.com",
    messagingSenderId: "793178725782",
    appId: "1:793178725782:web:5c0f2b3693acf0cac591b7",
    measurementId: "G-93ZJETL6M2"
};

import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
