<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import router
const form = reactive({ email: "", password: "" });
// ERROR MESSAGE
const router = useRouter();

// get a reference to our vue router
function signIn() {
  const auth = getAuth();
  // we also renamed this method
  signInWithEmailAndPassword(auth, form.email, form.password) // THIS LINE CHANGED
    .then((data) => {
      console.log(data);
      alert("iets gaat goed");
      router.push("/feed"); // redirect to the feed
    })
    .catch((error) => {
      console.log(error);
      alert("iets gaat fout");
    });
}
</script>
<template>
  <div class="registration">
    <h1>Sign in</h1>
    <form @submit.prevent>
      <p><input type="text" placeholder="E-mail" v-model="form.email" /></p>
      <p>
        <input type="password" placeholder="Password" v-model="form.password" />
      </p>
      <button @click="signIn">Submit</button>
    </form>
  </div>
</template>
