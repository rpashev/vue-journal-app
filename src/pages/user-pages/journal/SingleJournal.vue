<template>
  <div class="single-journal__page">
    <h1 v-if="journal">{{ journal.journalName }}</h1>
    <base-button link :to="`/journals/${journalID}/new-entry`"
      >New Entry</base-button
    >
    <entries-filters></entries-filters>
    <entries-list
      v-if="journal"
      :entriesData="journal.entries"
      :journalID="journalID"
    ></entries-list>
    <p v-if="noEntries">No entries in this journal yet!</p>
    <p class="error-message submit-error" v-if="errorMessage">
      {{ errorMessage }}
    </p>
    <base-spinner v-if="isLoading"></base-spinner>
  </div>
</template>

<script>
import EntriesFilters from "../../../components/journal/EntriesFilters.vue";
import EntriesList from "../../../components/journal/EntriesList.vue";
import { useRoute } from "vue-router";
import journalService from "../../../services/journalService";
import { ref, computed } from "@vue/reactivity";

export default {
  components: {
    EntriesFilters,
    EntriesList,
  },
  setup() {
    const route = useRoute();
    const journalID = route.params.journalID;
    let journal = ref(null);
    let isLoading = ref(false);
    let errorMessage = ref(null);

    const loadJournal = async () => {
      isLoading.value = true;
      errorMessage = null;
      try {
        journal.value = await journalService.getJournal(journalID);
      } catch (err) {
        errorMessage.value =
          err.response.data.message || "Couldn't load journal!";
      } finally {
        isLoading.value = false;
      }
    };
    loadJournal();

    const noEntries = computed(() => {
      if (journal.value) {
        return journal.value.entries.length === 0;
      } else {
        return false;
      }
    });

    return {
      journal,
      journalID,
      isLoading,
      errorMessage,
      noEntries,
    };
  },
};
</script>

<style scoped>
.single-journal__page {
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1 {
  margin-bottom: 2rem;
}
.submit-error {
  position: static;
  text-align: center;
}
</style>
