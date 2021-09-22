<template>
  <div class="login__page">
    <base-card class="login__card">
      <div>
        <h1>Sign In</h1>
        <form @submit.prevent="submitHandler">
          <div class="form-control">
            <label for="email">E-Mail</label>
            <input type="email" id="email" v-model.trim="email" />
          </div>
          <div class="form-control">
            <label for="password">Password</label>
            <input type="password" id="password" v-model.trim="password" />
          </div>
          <!-- <button></button> -->
          <base-button type="submit" tag="button">Submit</base-button>
        </form>
      </div>
    </base-card>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const email = ref("");
    const password = ref("");

    function submitHandler() {
      console.log(email.value, password.value);
    }

    return {
      submitHandler,
      email,
      password,
    };
  },
};
</script>

<style scoped>
.login__page {
  padding-top: 2rem;
}
.login__card {
  height: 25rem;
  width: 30rem;
}
form {
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.form-control {
  margin: 1rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.2rem 0.5rem;
}

input:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
h1 {
  text-align: center;
}
button {
  margin-top: 2rem;
}
</style>
