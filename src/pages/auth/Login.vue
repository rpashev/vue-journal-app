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
              The password should be at least 6 symbols!
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
          <p class="error-message submit-error" v-if="errorMessage">
            {{ errorMessage }}
          </p>
          <base-spinner v-if="isLoading"></base-spinner>
        </form>
      </div>
    </base-card>
  </div>
</template>

<script>
import { computed, reactive, ref } from "@vue/reactivity";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const formState = reactive({
      email: "",
      password: "",
    });
    let isLoading = ref(false);
    let errorMessage = ref(null);

    const rules = computed(() => {
      return {
        email: { required, email },
        password: { required, minLength: minLength(6) },
      };
    });
    // eslint-disable-next-line no-unused-vars
    const v$ = useVuelidate(rules, formState);

    const submitHandler = async () => {
      errorMessage.value = null;
      isLoading.value = true;

      if (v$._value.$invalid) {
        console.log("invalid");
      } else {
        try {
          await store.dispatch("login", formState);
          router.push("/journals");
        } catch (err) {
          errorMessage.value =
            err.response.data.message ||
            "Could not log in, please check your input!";
        } finally {
          isLoading.value = false;
        }
      }
    };

    return {
      submitHandler,
      formState,
      v$,
      isLoading,
      errorMessage,
    };
  },
};
</script>

<style scoped>
.login__page {
  /* background: white; */
  /* margin-bottom: 0; */
  /* padding-top: 2rem; */
}
.login__card {
  height: 27rem;
  width: 30rem;
  margin-top: 0rem !important;

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
  margin-top: 2rem;
}

.error-label {
  color: red;
}
.error-input,
.error-input:focus {
  background: rgb(255, 233, 233);
}
.error-message {
  color: red;
  font-size: 0.8rem;
  position: absolute;
}
.submit-error {
  position: static;
  text-align: center;
}
</style>
