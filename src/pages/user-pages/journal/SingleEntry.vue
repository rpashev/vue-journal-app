<template>
  <div v-if="entry" class="single-entry__page">
    <h1>{{ entry.title }}</h1>
    <h3>{{ readableDate(entry.date) }}</h3>
    <div v-html="entry.body" class="entry__body"></div>
    <p class="error-message submit-error" v-if="errorMessage">
      {{ errorMessage }}
    </p>
    <base-spinner v-if="isLoading"></base-spinner>
    <div class="entry__actions">
      <base-button
        mode="allowed"
        id="entry__actions-edit"
        link
        :to="`/journals/${journalID}/${entryID}/edit`"
        >Edit</base-button
      >
      <base-button id="entry__actions-delete" mode="alternative"
        >Delete</base-button
      >
    </div>
    <base-button id="entry__actions-back" link :to="`/journals/${journalID}`"
      >Back to journal</base-button
    >
  </div>
  <base-spinner class="spinner" v-if="isLoading"></base-spinner>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import entryService from "../../../services/entryService";

export default {
  setup() {
    const route = useRoute();
    const entryID = route.params.entryID;
    const journalID = route.params.journalID;
    const errorMessage = ref(null);
    const isLoading = ref(false);
    let entry = ref(null);
    const loadEntry = async () => {
      isLoading.value = true;
      try {
        const response = await entryService.getEntry(journalID, entryID);
        console.log(response);
        entry.value = response;
        console.log(entry.value);
      } catch (err) {
        errorMessage.value =
          err.response.data.message || "Could not load entry!";
      } finally {
        isLoading.value = false;
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
      entry,
      readableDate,
    };
  },
};
</script>

<style scoped>
.single-entry__page {
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.entry__body {
  width: 50%;
}
.entry__actions {
  width: 12%;
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
}
#entry__actions-back {
  margin-top: 2rem;
}
.submit-error {
  position: static;
  text-align: center;
}
.spinner {
  padding-top: 12rem;
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
.ql-align-justify{
  text-align: justify;
}
</style>
