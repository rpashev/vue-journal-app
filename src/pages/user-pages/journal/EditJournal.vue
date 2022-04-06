<template>
  <div class="edit-journal__page">
    <p
      class="error-message submit-error"
      v-if="errorMessage && !isLoading && !journal"
    >
      {{ errorMessage }}
    </p>
    <form @submit.prevent="submitHandler" v-if="!isLoading && journal">
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
          v-model.trim="journalName"
          @blur="v$.journalName.$touch"
          :class="{
            'error-input':
              v$.journalName.$errors.length && v$.journalName.$dirty,
          }"
        />
        <span class="length-note"
          >The name is required and must be at most 40 characters long.</span
        >
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
      <div class="actions">
        <base-button
          type="submit"
          tag="button"
          :disabled="v$.$invalid"
          :class="{
            forbidden: v$.$invalid,
          }"
          >Submit</base-button
        >
        <base-button id="entry__actions-back" link :to="'/'" mode="dark"
          >Back</base-button
        >
      </div>

      <p class="error-message submit-error" v-if="errorMessage">
        {{ errorMessage }}
      </p>
    </form>
    <base-spinner v-if="isLoading"></base-spinner>
  </div>
</template>
<script>
import { ref, computed } from "@vue/reactivity";
import useVuelidate from "@vuelidate/core";
import { required, maxLength } from "@vuelidate/validators";
import journalService from "../../../services/journalService";
import { useRouter, useRoute } from "vue-router";

export default {
  setup() {
    const description = ref("");
    const journalName = ref("");
    let journal = ref(null);

    let isLoading = ref(false);
    let errorMessage = ref(null);

    const router = useRouter();
    const route = useRoute();
    const journalID = route.params.journalID;

    const rules = computed(() => {
      return {
        journalName: { required, maxLengthValue: maxLength(40) },
      };
    });

    const v$ = useVuelidate(rules, { journalName });

    const loadJournal = async () => {
      isLoading.value = true;
      errorMessage.value = null;

      try {
        journal.value = await journalService.getJournal(journalID);
        description.value = journal.value.description;
        journalName.value = journal.value.journalName;
      } catch (err) {
        errorMessage.value =
          err.response?.data?.message || "Couldn't load journal!";
      } finally {
        isLoading.value = false;
      }
    };

    loadJournal();

    const submitHandler = async () => {
      errorMessage.value = null;
      isLoading.value = true;

      if (v$._value.$invalid) {
        isLoading.value = false;
        return;
      } else {
        try {
          await journalService.updateJournal(journalID, {
            journalName: journalName.value,
            description: description.value,
          });
          router.push(`/journals/${journalID}`);
        } catch (err) {
          errorMessage.value =
            err.response?.data?.message ||
            "Could not create journal, please try again!";
        } finally {
          isLoading.value = false;
        }
      }
    };

    return {
      submitHandler,
      v$,
      journalName,
      description,
      isLoading,
      errorMessage,
      journal,
    };
  },
};
</script>

<style scoped>
.edit-journal__page {
  padding: 3rem 2rem;
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
  gap: 1.5rem;
}
.form-control {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
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
  margin-top: 0.2rem;
  width: 100%;
}

.length-note::before {
  content: "*";
  color: red;
}
#journalName {
  padding: 0.5rem;
  width: 100%;
  font-size: 1.1rem;
  outline: none;
  color: #59595e;
}
.actions {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1.5rem;
}
h2 {
  margin-top: 0;
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
  color: #59595e;
  outline: none;
  padding: 0.5rem;
  resize: none;
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
  font-size: 1rem;
  position: absolute;
  text-align: center;
  width: 100%;
}
.submit-error {
  position: static;
  text-align: center;
}

@media (max-width: 40em) {
  .edit-journal__page {
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
