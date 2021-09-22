<template>
  <base-card class="signup__page">
    <div>
      <h1>Sign Up</h1>
      <form @submit.prevent="submitHandler">
        <div class="form-control names">
          <div>
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" v-model.trim="firstName" />
          </div>
          <div>
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" v-model.trim="lastName" />
          </div>
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
        <div class="form-control" id="chekboxes">
          <div>
            <input type="checkbox" id="terms" v-model.trim="terms" />
            <label for="terms" id="id-terms"
              >I agree with the terms and conditions</label
            >
          </div>
          <div>
            <input type="checkbox" id="updates" v-model.trim="updates" />
            <label for="updates">I want regular updates by email</label>
          </div>
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
  display: flex;
  flex-direction: column;
}
.names,
.checkboxes {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.names div {
  width: 48%;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}
#chekboxes {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}
#chekboxes div {
  display: flex;
  width: 45%;
  justify-content: space-between;
  align-items: flex-start;
}
#chekboxes label {
  font-size: 0.8rem;
  font-weight: normal;
  
  }
#chekboxes input {
  width: auto;
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
</style>
