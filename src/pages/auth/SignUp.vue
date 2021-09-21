<template>
  <base-card class="signup__page">
    <div>
      <h1>Sign Up</h1>
      <form @submit.prevent="submitHandler">
        <div class="form-control first-name">
          <label for="firstName">First Name</label>
          <input type="text" id="firstName" v-model.trim="firstName" />
        </div>
        <div class="form-control last-name">
          <label for="lastName">Last Name</label>
          <input type="text" id="lastName" v-model.trim="lastName" />
        </div>
        <div class="form-control email">
          <label for="email">E-Mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control password">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <div class="form-control repeat-password">
          <label for="repeatPassword">Confirm your password</label>
          <input
            type="password"
            id="repeatPassword"
            v-model.trim="repeatPassword"
          />
        </div>
        <div class="form-control terms">
          <label for="terms">I agree with the terms and conditions</label>
          <input type="checkbox" id="terms" v-model.trim="terms" />
        </div>
        <div class="form-control updates">
          <label for="updates">I want regular updates by email</label>
          <input type="checkbox" id="updates" v-model.trim="updates" />
        </div>
        <base-button type="submit" tag="button">Submit</base-button>
      </form>
    </div>
  </base-card>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const repeatPassword = ref("");
    const firstName = ref("");
    const lastName = ref("");
    const terms = ref(false);
    const updates = ref(false);

    function submitHandler() {
      console.log(
        email.value,
        password.value,
        firstName.value,
        lastName.value,
        terms.value,
        updates.value,
        repeatPassword.value
      );
    }

    return {
      submitHandler,
      email,
      password,
      firstName,
      lastName,
      terms,
      updates,
      repeatPassword,
    };
  },
};
</script>

<style scoped>
.signup__page {
  height: 35rem;
  position: relative;
  width: 30rem;
  top: 2rem;
}
form {
  margin: 1rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-template-rows: auto; */
  grid-gap: 0rem 0.5rem;
  grid-template-areas:
    "first-name last-name"
    "email email"
    "password password"
    "repeat-password repeat-password"
    "terms updates"
    "button button";
}

.form-control {
  margin: 0.5rem 0;
}
.first-name {
  grid-area: first-name;
}
.last-name {
  grid-area: last-name;
}
.email {
  grid-area: email;
}
.password {
  grid-area: password;
}
.repeat-password {
  grid-area: repeat-password;
}
.terms {
  grid-area: terms;
  display: inline-block;
}
.updates {
  grid-area: updates;
  display: inline-block;

}
button {
  grid-area: button;
  margin-top: 1.2rem;
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
  padding: 0.15rem;
}

input:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

h1 {
  text-align: center;
}
</style>
