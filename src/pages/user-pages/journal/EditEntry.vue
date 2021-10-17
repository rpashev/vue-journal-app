<template>
  <div class="edit-entry__page">
    <form @submit.prevent="submitHandler">
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
      <base-button
        type="submit"
        tag="button"
        :disabled="isInvalid"
        :class="{
          forbidden: isInvalid,
        }"
        >Edit entry</base-button
      >
      <p class="error-message submit-error" v-if="errorMessage">
        {{ errorMessage }}
      </p>
      <base-spinner v-if="isLoading"></base-spinner>
    </form>
  </div>
</template>

<script>
import { VueEditor } from "vue3-editor";
import { ref, computed } from "@vue/reactivity";
import { useRoute, useRouter  } from "vue-router";
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
      } catch (err) {
        errorMessage.value =
          err.response.data.message || "Could not load entry!";
      } finally {
        isLoading.value = false;
        // console.log(entry.value.date.slice(0,10));
        title.value = entry.value.title;
        body.value = entry.value.body;
        date.value = entry.value.date.slice(0, 10);
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
          err.response.data.message || "Could not edit entry!";
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
  /* padding-top: 6rem; */
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
}
input,
label,
h2 {
  color: #59595e;
  font: inherit;
  outline: none;
}
.entry__container {
  display: flex;
  justify-content: space-around;
}
.entry__container input {
  margin: 0 1rem 1rem 1rem;
  border: 1.5px solid rgb(173, 169, 169);
  padding: 0.2rem 0.5rem;
}
.entry-editor__content {
  width: 50rem;
  max-width: 50rem;
}
input:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
input[disabled] {
  cursor: not-allowed;
}
.error-message {
  color: red;
  font-size: 0.8rem;
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
</style>
