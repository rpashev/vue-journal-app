<template>
  <div class="edit-entry__page">
    <base-spinner v-if="isLoading"></base-spinner>
    <p class="error-message submit-error" v-if="errorMessage && !body">
      {{ errorMessage }}
    </p>
    <form v-if="!isLoading && body" @submit.prevent="submitHandler">
      <div class="entry__container">
        <div class="entry__title">
          <label for="entry-title">Entry title</label>
          <input
            type="text"
            id="entry-title"
            name="entry-title"
            v-model="title"
          />
        </div>
        <div class="entry__date">
          <label for="entry-date">Date</label
          ><input
            disabled
            type="date"
            id="entry-date"
            name="entry-date"
            v-model="date"
          />
        </div>
      </div>
      <div class="entry__body">
        <vue-editor
          class="entry-editor__content"
          v-model="body"
          :editorToolbar="customToolbar"
        >
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
          >Edit</base-button
        >
        <base-button
          mode="dark"
          class="btn-back"
          link
          :to="`/journals/${journalID}`"
          >Back</base-button
        >
      </div>
      <p class="error-message submit-error" v-if="errorMessage">
        {{ errorMessage }}
      </p>
    </form>
  </div>
</template>

<script>
import { VueEditor } from "vue3-editor";
import { ref, computed } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import entryService from "../../../services/entryService";
import { customToolbar } from "../../../helper-functions/vue-editor";

export default {
  components: { VueEditor },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const entryID = route.params.entryID;
    const journalID = route.params.journalID;

    const errorMessage = ref(null);
    const isLoading = ref(false);
    let entry = ref(null);
    const title = ref();
    const body = ref();
    const date = ref();

    const loadEntry = async () => {
      isLoading.value = true;
      try {
        const response = await entryService.getEntry(journalID, entryID);

        entry.value = response;
        title.value = entry.value.title;
        body.value = entry.value.body;
        date.value = entry.value.date.slice(0, 10);
      } catch (err) {
        errorMessage.value =
          err.response?.data?.message || "Could not load entry!";
      } finally {
        isLoading.value = false;
        // console.log(entry.value.date.slice(0,10));
      }
    };
    loadEntry();

    const readableDate = (date) => {
      if (date) {
        return date.substr(0, 10);
      }
    };
    const isInvalid = computed(() => {
      return body.value === "";
    });
    const submitHandler = async () => {
      isLoading.value = true;
      try {
        await entryService.editEntry(
          journalID,
          entryID,
          title.value,
          body.value
        );
        router.push(`/journals/${journalID}/${entryID}/`);
      } catch (err) {
        errorMessage.value =
          err.response?.data?.message || "Could not edit entry!";
      } finally {
        isLoading.value = false;
      }
    };

    return {
      journalID,
      entryID,
      isLoading,
      errorMessage,
      title,
      body,
      date,
      readableDate,
      customToolbar,
      isInvalid,
      submitHandler,
    };
  },
};
</script>
<style scoped>
.edit-entry__page {
  padding: 3rem 2rem;
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
  color: #59595e;
  font: inherit;
  outline: none;
  width: 100%;
}
.entry__container {
  display: flex;
  width: 100%;
  justify-content: space-around;
}
.entry__body {
  width: 100%;
  margin-top: 1rem;
}
.entry__container input {
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 0.25rem;
  border: 1.5px solid rgb(173, 169, 169);
  padding: 0.2rem 0.5rem;
}
.entry-editor__content {
  max-width: 60rem;
  width: 100% !important;
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
}
button,
a {
  margin-top: 2rem;
  min-width: 6rem;
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
h2 {
  text-align: center;
  font-size: 1.2rem;
}
button {
  margin-top: 2rem;
}
.btn-back {
  margin-left: 1rem;
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

@media (max-width: 1024px) {
  form {
    width: 90%;
  }
}

@media (max-width: 40rem) {
  form {
    width: 100%;
  }
  .entry__container {
    flex-direction: column;
  }
}
</style>
