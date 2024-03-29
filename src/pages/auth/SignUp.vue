<template>
  <div class="signup__page">
    <div class="signup__card">
      <h1>Sign Up</h1>
      <form @submit.prevent="submitHandler">
        <div class="form-control names">
          <div>
            <label
              for="firstName"
              :class="{
                'error-label': v$.firstName.$errors.length && v$.firstName.$dirty,
              }"
              >First Name</label
            >
            <input
              type="text"
              id="firstName"
              v-model.trim="formState.firstName"
              @blur="v$.firstName.$touch"
              :class="{
                'error-input': v$.firstName.$errors.length && v$.firstName.$dirty,
              }"
            />
            <p class="error-message" v-if="v$.firstName.$error">First name is required!</p>
          </div>
          <div>
            <label
              for="lastName"
              :class="{
                'error-label': v$.lastName.$errors.length && v$.lastName.$dirty,
              }"
              >Last Name</label
            >
            <input
              type="text"
              id="lastName"
              v-model.trim="formState.lastName"
              @blur="v$.lastName.$touch"
              :class="{
                'error-input': v$.lastName.$errors.length && v$.lastName.$dirty,
              }"
            />
            <p class="error-message" v-if="v$.lastName.$error">Last name is required!</p>
          </div>
        </div>
        <div class="form-control email">
          <label
            for="email"
            :class="{
              'error-label': v$.email.$errors.length && v$.email.$dirty,
            }"
            >E-Mail</label
          >
          <input
            type="email"
            id="email"
            v-model.trim="formState.email"
            @blur="v$.email.$touch"
            :class="{
              'error-input': v$.email.$errors.length && v$.email.$dirty,
            }"
          />
          <p class="error-message" v-if="v$.email.$error">Please enter a valid email!</p>
        </div>
        <div class="form-control password">
          <label
            for="password"
            :class="{
              'error-label': v$.password.$errors.length && v$.password.$dirty,
            }"
            >Password</label
          >
          <input
            type="password"
            id="password"
            v-model.trim="formState.password"
            @blur="v$.password.$touch"
            :class="{
              'error-input': v$.password.$errors.length && v$.password.$dirty,
            }"
          />
          <p class="error-message" v-if="v$.password.$error">
            The password should be at least 6 symbols!
          </p>
        </div>
        <div class="form-control repeat-password">
          <label
            for="repeatPassword"
            :class="{
              'error-label': v$.repeatPassword.$errors.length && v$.repeatPassword.$dirty,
            }"
            >Confirm your password</label
          >
          <input
            type="password"
            id="repeatPassword"
            v-model.trim="formState.repeatPassword"
            @blur="v$.repeatPassword.$touch"
            :class="{
              'error-input': v$.repeatPassword.$errors.length && v$.repeatPassword.$dirty,
            }"
          />
          <p class="error-message" v-if="v$.repeatPassword.$error">Passwords should match!</p>
        </div>
        <div class="form-control" id="chekboxes">
          <div>
            <input type="checkbox" id="terms" v-model.trim="formState.terms" />
            <label for="terms" id="id-terms">I agree with the terms and conditions</label>
          </div>
          <div>
            <input type="checkbox" id="updates" v-model.trim="formState.updates" />
            <label for="updates">I want regular updates by email</label>
          </div>
        </div>
        <base-button
          type="submit"
          tag="button"
          :disabled="v$.$invalid"
          :class="{
            forbidden: v$.$invalid,
          }"
          >Submit</base-button
        >
        <p class="error-message submit-error" v-if="errorMessage">
          {{ errorMessage }}
        </p>
        <base-spinner v-if="isLoading"></base-spinner>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, ref } from "@vue/reactivity";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const formState = reactive({
  email: "",
  password: "",
  repeatPassword: "",
  firstName: "",
  lastName: "",
  terms: false,
  updates: false,
});

let isLoading = ref(false);
let errorMessage = ref(null);

const rules = computed(() => {
  return {
    email: { required, email },
    password: { required, minLength: minLength(6) },
    repeatPassword: { required, sameAs: sameAs(`${formState.password}`) },
    firstName: { required },
    lastName: { required },
  };
});

const v$ = useVuelidate(rules, formState);

const submitHandler = async () => {
  errorMessage.value = null;
  isLoading.value = true;

  if (v$._value.$invalid) {
    isLoading.value = false;
    return;
  } else {
    try {
      await store.dispatch("signup", formState);
      router.push("/journals");
    } catch (err) {
      errorMessage.value = err.response?.data?.message || "Could not sign up!";
    } finally {
      isLoading.value = false;
    }
  }
};
</script>

<style scoped>
.signup__page {
  padding-bottom: 4rem;
}
.signup__card {
  width: 30rem;
  max-width: 30rem;
  padding: 1rem 0.5rem;
  margin: 0 auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
  border-radius: 4px;
}
h1 {
  margin: 0;
}
form {
  margin: 1rem;
  height: 100%;
  padding: 1rem;
  gap: 1.35rem;
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

label {
  font-weight: 500;
  margin-bottom: 0.5rem;
  display: block;
}
#chekboxes {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 0.5rem;
}
#chekboxes div {
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
}
#chekboxes label {
  font-size: 0.8rem;
  font-weight: normal;
  position: relative;
  top: -0.2rem;
}
#chekboxes input {
  width: auto;
}

input {
  display: block;
  width: 100%;
  font: inherit;
  border: 1.5px solid rgb(173, 169, 169);
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
  margin-top: 0.5rem;
  width: 100%;
  max-width: 8rem;
}
.error-label {
  color: var(--color-error);
}
.error-input,
.error-input:focus {
  background: rgb(255, 233, 233);
}
.error-message {
  color: var(--color-error);
  font-size: 0.8rem;
  position: absolute;
}
.submit-error {
  position: static;
  font-weight: bold;
}

@media (max-width: 64em) {
  .signup__card {
    margin-top: 1rem;
  }
}

@media (max-width: 40em) {
  .signup__card {
    width: 95%;
    margin-top: 1.5rem;
    box-shadow: none;
    padding: 1rem 0;
  }
  .names {
    flex-direction: column;
    gap: 1.35rem;
  }
  .names div {
    width: 100%;
  }
  button {
    max-width: none;
  }
}
</style>
