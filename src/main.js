import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgabbMnvBBjqSAa6rYc7hqhbh4fI6jp7s",
  authDomain: "inlogregistration.firebaseapp.com",
  projectId: "inlogregistration",
  storageBucket: "inlogregistration.appspot.com",
  messagingSenderId: "1078680582428",
  appId: "1:1078680582428:web:36cf44fa923c8b36c662d9",
  measurementId: "G-5WMGX7CNG8",
};

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount("#app");
