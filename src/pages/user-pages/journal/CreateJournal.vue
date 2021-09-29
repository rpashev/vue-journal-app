<template>
  <div class="create-journal__page">
    <form @submit.prevent="submitHandler">
      <div class="form-control">
        <label for="journalName"
          ><h2
            :class="{
              'error-label':
                v$.journalName.$errors.length && v$.journalName.$dirty,
            }"
          >
            Name of your journal
          </h2></label
        >
        <input
          type="text"
          id="journalName"
          name="journalName"
          v-model="journalName"
          @blur="v$.journalName.$touch"
          :class="{
            'error-input':
              v$.journalName.$errors.length && v$.journalName.$dirty,
          }"
        />
        <div class="error__container">
          <p class="error-message" v-if="v$.journalName.$error">
            You have to enter a name for the journal!
          </p>
        </div>
      </div>
      <div class="form-control">
        <label for="journalDescription"
          ><h3>What is this journal about?</h3></label
        >
        <textarea
          type="textarea"
          rows="8"
          cols="50"
          id="journalDescription"
          name="journalDescription"
          v-model="description"
        />
      </div>

      <base-button
        type="submit"
        tag="button"
        :disabled="v$.$invalid"
        :class="{
          forbidden: v$.$invalid,
        }"
        >Create</base-button
      >
    </form>
  </div>
</template>
<script>
import { ref, computed } from "@vue/reactivity";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  setup() {
    const description = ref("");
    const journalName = ref("");
    const rules = computed(() => {
      return {
        journalName: { required },
      };
    });

    const v$ = useVuelidate(rules, { journalName });

    const submitHandler = () => {
      if (v$._value.$invalid) {
        console.log("invalid");
      } else {
        console.log(journalName.value, description.value);
      }
    };

    return {
      submitHandler,
      v$,
      journalName,
      description,
    };
  },
};
</script>

<style scoped>
.create-journal__page {
  margin: 0 auto;
  width: 60%;
  padding-top: 3rem;
}
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form-control {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  font: inherit;
}
input, textarea {
  /* margin: 0 1rem 1rem 1rem; */
  border: 1.5px solid rgb(173, 169, 169);
}
input:focus, textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
#journalName {
  height: 3rem;
  padding: 0.5rem 1rem;
  width: 100%;
  font-size: 1.2rem;
  outline: none;
  color: #59595e;
}
button {
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 10rem;
}
textarea {
  font-size: 1.1rem;
  width: 100%;
  color: #59595e;
  outline: none;
  padding: 0.25rem;
}
.error__container {
  position: relative;
  width: 100%;
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
  text-align: center;
  width: 100%;
}
</style>
