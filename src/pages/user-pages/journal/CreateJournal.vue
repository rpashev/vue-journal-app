<template>
  <div class="create-journal__page">
    <form @submit.prevent="submitHandler">
      <div class="form-control">
        <label for="journalName"
          ><h2
            :class="{
              'error-label': v$.journalName.$errors.length && v$.journalName.$dirty,
            }"
          >
            Name of your journal
          </h2></label
        >
        <input
          type="text"
          id="journalName"
          name="journalName"
          v-model.trim="journalName"
          @blur="v$.journalName.$touch"
          :class="{
            'error-input': v$.journalName.$errors.length && v$.journalName.$dirty,
          }"
        />
        <span class="length-note"
          >The name is required and must be at most 40 characters long.</span
        >
        <div class="error__container">
          <p class="error-message" v-if="v$.journalName.$error">You have to enter a valid name!</p>
        </div>
      </div>
      <div class="form-control">
        <label for="journalDescription"><h3>What is this journal about?</h3></label>
        <textarea
          type="textarea"
          rows="8"
          cols="50"
          id="journalDescription"
          name="journalDescription"
          v-model="description"
        />
      </div>
      <div class="actions">
        <base-button
          type="submit"
          tag="button"
          :disabled="v$.$invalid"
          :class="{
            forbidden: v$.$invalid,
          }"
          >Create</base-button
        >
        <base-button id="entry__actions-back" link :to="'/'" mode="dark">Cancel</base-button>
      </div>

      <p class="error-message submit-error" v-if="errorMessage">
        {{ errorMessage }}
      </p>
      <base-spinner v-if="isLoading"></base-spinner>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from "@vue/reactivity";
import useVuelidate from "@vuelidate/core";
import { required, maxLength } from "@vuelidate/validators";
import journalService from "../../../services/journalService";
import { useRouter } from "vue-router";

const description = ref("");
const journalName = ref("");

let isLoading = ref(false);
let errorMessage = ref(null);

const router = useRouter();

const rules = computed(() => {
  return {
    journalName: { required, maxLengthValue: maxLength(40) },
  };
});

const v$ = useVuelidate(rules, { journalName });

const submitHandler = async () => {
  errorMessage.value = null;
  isLoading.value = true;

  if (v$._value.$invalid) {
    isLoading.value = false;
    return;
  } else {
    try {
      await journalService.createJournal({
        journalName: journalName.value,
        description: description.value,
      });
      router.push("/");
    } catch (err) {
      errorMessage.value =
        err.response?.data?.message || "Could not create journal, please try again!";
    } finally {
      isLoading.value = false;
    }
  }
};
</script>

<style scoped>
.create-journal__page {
  padding: 3rem 2rem 8rem 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
form {
  width: 30rem;
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
.form-control {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font: inherit;
  width: 100%;
}
input,
textarea {
  border: 1.5px solid rgb(173, 169, 169);
}
input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.length-note {
  font-size: 0.8rem;
  width: 100%;
}

.length-note::before {
  content: "*";
  color: var(--color-error);
}

#journalName {
  padding: 0.5rem;
  width: 100%;
  font-size: 1.1rem;
  outline: none;
  color: var(--color-gray-dark);
}

.actions {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1.5rem;
}
button,
a {
  margin-top: 1rem;
  margin-bottom: 2rem;
  min-width: 6rem;
}

textarea {
  font-size: 1.1rem;
  width: 100%;
  color: var(--color-gray-dark);
  outline: none;
  padding: 0.5rem;
  resize: none;
}
.error__container {
  position: relative;
  width: 100%;
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
  text-align: center;
  width: 100%;
}
.submit-error {
  position: static;
  text-align: center;
}

@media (max-width: 40em) {
  .create-journal__page {
    padding: 3rem 1.5rem;
  }
  form {
    width: 100%;
  }
  h2 {
    font-size: 1.3rem;
  }
  #journalName {
    font-size: 1rem;
  }
  button,
  a {
    width: 50%;
  }
}
</style>
