<template>
  <div class="login__page">
    <base-card class="login__card">
      <div>
        <h1>Sign In</h1>
        <form @submit.prevent="submitHandler">
          <div class="form-control">
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
              @blur="v$.email.$touch"
              v-model.trim="formState.email"
              :class="{
                'error-input': v$.email.$errors.length && v$.email.$dirty,
              }"
            />
            <p class="error-message" v-if="v$.email.$error">
              Please enter a valid email!
            </p>
          </div>
          <div class="form-control">
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
              Please enter a valid password!
            </p>
          </div>
          <!-- <button></button> -->
          <base-button
            type="submit"
            tag="button"
            :disabled="v$.$invalid"
            :class="{
              forbidden: v$.$invalid,
            }"
            >Submit</base-button
          >
        </form>
      </div>
    </base-card>
  </div>
</template>

<script>
import { computed, reactive } from "@vue/reactivity";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  setup() {
    const formState = reactive({
      email: "",
      password: "",
    });

    const rules = computed(() => {
      return {
        email: { required, email },
        password: { required },
      };
    });
    // eslint-disable-next-line no-unused-vars
    const v$ = useVuelidate(rules, formState);

    function submitHandler() {
      console.log(formState.email, formState.password);
      if (v$._value.$invalid) {
        console.log("invalid");
      }
    }

    return {
      submitHandler,
      formState,
      v$,
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
  margin: 1.2rem 0;
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

.error-label {
  color: red;
}
.error-input,
.error-input:focus {
  background: rgb(238, 181, 177);
}
.error-message {
  color: red;
  font-size: 0.8rem;
  position: absolute;
}
</style>
