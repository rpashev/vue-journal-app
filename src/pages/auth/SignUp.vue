<template>
  <div class="signup__page">
    <base-card class="signup__card">
      <div>
        <h1>Sign Up</h1>
        <form @submit.prevent="submitHandler">
          <div class="form-control names">
            <div>
              <label for="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                v-model.trim="formState.firstName"
              />
            </div>
            <div>
              <label for="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                v-model.trim="formState.lastName"
              />
            </div>
          </div>
          <div class="form-control email">
            <label for="email">E-Mail</label>
            <input type="email" id="email" v-model.trim="formState.email" />
          </div>
          <div class="form-control password">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              v-model.trim="formState.password"
            />
          </div>
          <div class="form-control repeat-password">
            <label for="repeatPassword">Confirm your password</label>
            <input
              type="password"
              id="repeatPassword"
              v-model.trim="formState.repeatPassword"
            />
          </div>
          <div class="form-control" id="chekboxes">
            <div>
              <input
                type="checkbox"
                id="terms"
                v-model.trim="formState.terms"
              />
              <label for="terms" id="id-terms"
                >I agree with the terms and conditions</label
              >
            </div>
            <div>
              <input
                type="checkbox"
                id="updates"
                v-model.trim="formState.updates"
              />
              <label for="updates">I want regular updates by email</label>
            </div>
          </div>
          <base-button type="submit" tag="button">Submit</base-button>
        </form>
      </div>
    </base-card>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  setup() {
    const formState = reactive({
      email: "",
      password: "",
      repeatPassword: "",
      firstName: "",
      lastName: "",
      terms: false,
      updates: false,
    });

    function submitHandler() {
      console.log(
        formState.email,
        formState.password,
        formState.firstName,
        formState.lastName,
        formState.terms,
        formState.updates,
        formState.repeatPassword
      );
    }

    return {
      submitHandler,
      formState,
    };
  },
};
</script>

<style scoped>
.signup__page {
  height: 60rem;
  padding-top: 2rem;
}
.signup__card {
  height: 40rem;
  width: 30rem;
}
form {
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}
.form-control {
  margin: 1.2rem 0;
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
