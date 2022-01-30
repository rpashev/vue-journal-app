<template>
  <div class="single-entry__page">
    <base-spinner v-if="isLoading"></base-spinner>
    <p class="error-message submit-error" v-if="errorMessage && !entry">
      {{ errorMessage }}
    </p>
    <div v-if="!isLoading && entry" class="entry-container">
      <h2>{{ entry.title }}</h2>
      <h3>{{ readableDate(entry.date) }}</h3>
      <div v-html="entry.body" class="entry__body"></div>

      <div class="entry__actions">
        <base-button
          id="entry__actions-edit"
          link
          :to="`/journals/${journalID}/${entryID}/edit`"
          >Edit</base-button
        >
        <base-button
          id="entry__actions-delete"
          mode="alternative"
          @click="toggleShowDialog"
          >Delete</base-button
        >
      </div>
      <base-button
        mode="dark"
        id="entry__actions-back"
        link
        :to="`/journals/${journalID}`"
        >Back</base-button
      >
    </div>

    <base-dialog
      @remove="deleteEntry"
      @close="toggleShowDialog"
      title="Are you sure you want to delete the entry?"
      :show="showDialog"
    />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
import entryService from "../../../services/entryService";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const entryID = route.params.entryID;
    const journalID = route.params.journalID;
    const errorMessage = ref(null);
    const isLoading = ref(false);
    let entry = ref(null);

    const loadEntry = async () => {
      isLoading.value = true;
      try {
        const response = await entryService.getEntry(journalID, entryID);
        entry.value = response;
      } catch (err) {
        errorMessage.value =
          err.response?.data?.message || "Could not load entry!";
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

    const showDialog = ref(false);
    const toggleShowDialog = () => {
      showDialog.value = !showDialog.value;
    };

    const deleteEntry = async () => {
      isLoading.value = true;
      errorMessage.value = null;
      try {
        await entryService.deleteEntry(journalID, entryID);
        toggleShowDialog();
        router.push(`/journals/${journalID}/`);
      } catch (err) {
        errorMessage.value =
          err.response?.data?.message ||
          "Could not delete entry! Please try again!";
        showDialog.value = false;
      } finally {
        isLoading.value = false;
      }
    };

    return {
      journalID,
      entryID,
      isLoading,
      errorMessage,
      entry,
      readableDate,
      showDialog,
      toggleShowDialog,
      deleteEntry,
    };
  },
};
</script>

<style scoped>
.single-entry__page {
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.entry-container {
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h2 {
  width: 100%;
  overflow-wrap: break-word;
  text-align: center;
}

.entry__body {
  width: 100%;
}
.entry__body >>> * {
  background-color: transparent !important;
}
.entry__actions {
  width: 100%;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
}
.entry__actions a,
.entry__actions button {
  min-width: 6rem;
}

.entry__actions a:first-of-type,
.entry__actions button:first-of-type {
  margin-right: 1rem;
}
#entry__actions-back {
  margin-top: 2rem;
  min-width: 6rem;
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
.ql-align-justify {
  text-align: justify;
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

@media (max-width: 1024px) {
  .entry-container {
    width: 80%;
  }
}
@media (max-width: 40rem) {
  .entry-container {
    width: 90%;
  }
}
</style>
