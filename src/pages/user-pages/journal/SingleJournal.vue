<template>
  <div class="single-journal__page">
    <h1 v-if="journal">{{ journal.journalName }}</h1>
    <base-button link :to="`/journals/${journalID}/new-entry`"
      >New Entry</base-button
    >
    <entries-filters
      @getqueries="saveQueries"
      v-if="journal"
      :entries="journal.entries"
    ></entries-filters>
    <entries-list
      v-if="journal"
      :entriesData="filteredEntries"
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
import dayjs from "dayjs";

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
    let searchQuery = ref("");
    let timeFilter = ref("alltime");

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

    const saveQueries = (queries) => {
      timeFilter.value = queries[0];
      searchQuery.value = queries[1];
    };

    const filteredEntries = computed(() => {
      return journal.value.entries.filter((entry) => {
        const noTagsEntryBody = entry.body.replace(/<\/?[^>]+(>|$)/g, "");

        let currentDate = new Date().toISOString().substr(0, 10);
        let endDate = new Date(entry.date).toISOString().substring(0, 10);
        let today = dayjs(currentDate);
        let entryDate = dayjs(endDate);

        if (
          noTagsEntryBody
            .toLowerCase()
            .includes(searchQuery.value.toLowerCase()) ||
          entry.title.toLowerCase().includes(searchQuery.value.toLowerCase())
        ) {
          if (timeFilter.value === "alltime") {
            return entry;
          }

          if (timeFilter.value === "today") {
            if (entryDate.isSame(today)) {
              return entry;
            }
          }
          if (timeFilter.value === "yesterday") {
            if (entryDate.isSame(today.subtract(1, "day"))) {
              return entry;
            }
          }
          if (timeFilter.value === "this-week") {
            let diff = today.diff(entryDate, "day");
            if (diff <= 7) {
              return entry;
            }
          }
          if (timeFilter.value === "this-month") {
            let diff = today.diff(entryDate, "month");
            if (diff <= 1) {
              return entry;
            }
          }
          if (timeFilter.value === "this-year") {
            let diff = today.diff(entryDate, "year");
            if (diff <= 1) {
              return entry;
            }
          }
        }
      });
    });
    // console.log(new Date)
    return {
      journal,
      journalID,
      isLoading,
      errorMessage,
      noEntries,
      saveQueries,
      filteredEntries,
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
