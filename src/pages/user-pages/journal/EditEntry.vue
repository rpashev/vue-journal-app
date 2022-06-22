<template>
  <div class="edit-entry__page">
    <base-spinner v-if="isLoading"></base-spinner>
    <p class="error-message submit-error" v-if="errorMessage && !body">
      {{ errorMessage }}
    </p>
    <form v-if="!isLoading && !errorMessage" @submit.prevent="submitHandler">
      <div class="entry__container">
        <div class="entry__title">
          <label for="entry-title">Entry title</label>
          <input type="text" id="entry-title" name="entry-title" v-model="title" />
        </div>
        <div class="entry__date">
          <label for="entry-date">Date</label
          ><input disabled type="date" id="entry-date" name="entry-date" v-model="date" />
        </div>
      </div>
      <div class="entry__body">
        <vue-editor class="entry-editor__content" v-model="body" :editorToolbar="customToolbar">
        </vue-editor>
      </div>
      <div class="actions">
        <base-button
          type="submit"
          tag="button"
          :disabled="isInvalid"
          :class="{
            forbidden: isInvalid,
          }"
          >Submit</base-button
        >
        <base-button mode="dark" class="btn-back" link :to="`/journals/${journalID}`"
          >Back</base-button
        >
      </div>
      <p class="error-message submit-error" v-if="errorMessage">
        {{ errorMessage }}
      </p>
      <p class="error-message submit-error" v-if="errorMessageEditing">
        {{ errorMessageEditing }}
      </p>
    </form>
  </div>
</template>

<script setup>
import { VueEditor } from "vue3-editor";
import { ref, computed } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import entryService from "../../../services/entryService";
import { customToolbar } from "../../../helper-functions/vue-editor";

const route = useRoute();
const router = useRouter();
const entryID = route.params.entryID;
const journalID = route.params.journalID;

const errorMessage = ref(null);
const errorMessageEditing = ref(null);
const isLoading = ref(false);

let entry = ref(null);
const title = ref();
const body = ref();
const date = ref();

const loadEntry = async () => {
  isLoading.value = true;
  errorMessage.value = null;

  try {
    const response = await entryService.getEntry(journalID, entryID);

    entry.value = response;
    title.value = entry.value.title;
    body.value = entry.value.body;
    date.value = entry.value.date.slice(0, 10);
  } catch (err) {
    errorMessage.value = err.response?.data?.message || "Could not load entry!";
  } finally {
    isLoading.value = false;
  }
};

loadEntry();

const isInvalid = computed(() => {
  return body.value === "";
});

const submitHandler = async () => {
  isLoading.value = true;
  errorMessage.value = null;

  try {
    await entryService.editEntry(journalID, entryID, title.value, body.value);
    router.push(`/journals/${journalID}/${entryID}/`);
  } catch (err) {
    errorMessageEditing.value = err.response?.data?.message || "Could not edit entry!";
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.edit-entry__page {
  padding: 3rem 2rem 8rem 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 55%;
}
input,
label,
h2 {
  color: var(--color-gray-dark);
  font: inherit;
  outline: none;
  width: 100%;
}
.entry__container {
  display: flex;
  align-items: stretch;
  width: 100%;
  gap: 2rem;
  margin-bottom: 1rem;
}
.entry__title {
  width: 50%;
}

.entry__date {
  flex: 1;
}
.entry__body {
  width: 100%;
  margin-top: 1rem;
}
.entry__container input {
  width: 100%;
  margin-top: 0.25rem;
  border: 1.5px solid rgb(173, 169, 169);
  padding: 0.3rem 0.5rem;
  height: 40px;
}
.entry-editor__content {
  max-width: 60rem;
  width: 100% !important;
}
.entry-editor__content:focus {
  border-color: #3d008d;
}
input:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
input[disabled] {
  cursor: not-allowed;
}
.actions {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 2rem;
  gap: 1.5rem;
}
button,
a {
  min-width: 6rem;
}
.error-message {
  color: var(--color-error);
  font-size: 1rem;
  position: absolute;
  text-align: center;
  width: 100%;
  margin-top: 1rem;
}
.submit-error {
  position: static;
  text-align: center;
}
h2 {
  text-align: center;
  font-size: 1.2rem;
}

.ql-align-center {
  text-align: center;
}
.ql-align-right {
  text-align: right;
}
.ql-align-left {
  text-align: left;
}
.ql-align-justify {
  text-align: justify;
}

@media (max-width: 64em) {
  form {
    width: 90%;
  }
}

@media (max-width: 40em) {
  form {
    width: 100%;
  }
  .entry__container {
    flex-direction: column;
    gap: 1rem;
  }
  button,
  a {
    width: 50%;
  }
  .entry__title {
    width: 100%;
  }
}
</style>
