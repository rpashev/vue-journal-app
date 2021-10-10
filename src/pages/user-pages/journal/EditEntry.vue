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
            type="date"
            id="entry-date"
            name="entry-date"
            v-model="date"
          />
        </div>
      </div>

      <vue-editor v-model="body"> </vue-editor>
      <base-button
        type="submit"
        tag="button"
        :disabled="isInvalid"
        :class="{
          forbidden: isInvalid,
        }"
        >Submit entry</base-button
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
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import entryService from "../../../services/entryService";

export default {
  components: { VueEditor },
  setup() {
    const route = useRoute();
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
        title.value = entry.value.title;
        body.value = entry.value.body;
        date.value = entry.value.date;
      }
    };
    loadEntry();

    const readableDate = (date) => {
      if (date) {
        return date.substr(0, 10);
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
    };
  },
};
</script>
<style scoped>
.edit-entry__page {
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
