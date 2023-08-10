<script setup>
import { reactive } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const form = reactive({ email: "", password: "" });
const router = useRouter();

function register() {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, form.email, form.password)
    .then(() => {
      console.log("succesfully registered!");
      router.push("/feed");
    })
    .catch((error) => {
      console.log(error);
      alert("hahahahahhaah");
    });
}
</script>
<template>
  <h1>Create an Account</h1>
  <p><input type="text" placeholder="Email" v-model="form.email" /></p>
  <p>
    <input type="password" placeholder="Password" v-model="form.password" />
  </p>
  <p><button @click="register">Submit</button></p>
  <p><button @click="signInWithGoogle">Sign In with google</button></p>
</template>
