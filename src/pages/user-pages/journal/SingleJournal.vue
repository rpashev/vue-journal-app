<template>
  <div class="single-journal__page">
    <div class="single-journal__page-entries">
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
        @deleted-entry="loadJournal"
        :entriesData="filteredEntries"
        :journalID="journalID"
      ></entries-list>
      <p v-if="noEntries">No entries in this journal yet!</p>
      <p class="error-message submit-error" v-if="errorMessage">
        {{ errorMessage }}
      </p>
      <base-spinner v-if="isLoading"></base-spinner>
    </div>
    <div class="single-journal__page-prompts">
      <div v-if="journal" class="single-journal__page-description">
        <h3>Journal description</h3>
        <p v-if="journal.description">{{ journal.description }}</p>
        <p v-else>
          You have not added a description of this journal yet! You can add one
          below.
        </p>
        <div class="actions">
          <base-button
            link
            :to="`/journals/${journalID}/edit-journal`"
            mode="allowed"
            >Edit Journal</base-button
          >
          <base-button @click="toggleShowDialog" mode="alternative"
            >Delete Journal</base-button
          >
        </div>
      </div>
    </div>
    <base-dialog
      @remove="deleteJournal"
      @close="toggleShowDialog"
      title="Are you sure you want to delete this journal with all its entries?"
      :show="showDialog"
    ></base-dialog>
  </div>
</template>

<script>
import EntriesFilters from "../../../components/journal/EntriesFilters.vue";
import EntriesList from "../../../components/journal/EntriesList.vue";
import { useRoute, useRouter } from "vue-router";
import journalService from "../../../services/journalService";
import { ref, computed } from "@vue/reactivity";
import { filterAndSortEntries } from "../../../helper-functions/filter-and-sort-entries";

export default {
  components: {
    EntriesFilters,
    EntriesList,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const journalID = route.params.journalID;
    let journal = ref(null);
    let isLoading = ref(false);
    let errorMessage = ref(null);
    let searchQuery = ref("");
    let timeFilter = ref("alltime");
    const showDialog = ref(false);

    const loadJournal = async () => {
      isLoading.value = true;
      errorMessage.value = null;
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
      return filterAndSortEntries(
        journal.value.entries,
        timeFilter.value,
        searchQuery.value
      );
    });

    const toggleShowDialog = () => {
      showDialog.value = !showDialog.value;
    };
    const deleteJournal = async () => {
      isLoading.value = true;
      errorMessage.value = null;
      try {
        await journalService.deleteJournal(journalID);
        router.push("/journals");
      } catch (err) {
        errorMessage.value =
          err.response.data.message || "Could not delete, please try again!";
        showDialog.value = false;
      } finally {
        isLoading.value = false;
        showDialog.value = false;
      }
    };

    return {
      journal,
      journalID,
      isLoading,
      errorMessage,
      noEntries,
      saveQueries,
      filteredEntries,
      loadJournal,
      toggleShowDialog,
      showDialog,
      deleteJournal,
    };
  },
};
</script>

<style scoped>
.single-journal__page {
  padding-top: 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.single-journal__page-entries {
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.single-journal__page-prompts {
  display: flex;
  flex-direction: column;
  width: 28%;
}
.actions {
  width: 80%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
}
h1 {
  margin-bottom: 2rem;
}
p,
h3 {
  text-align: center;
}
.submit-error {
  position: static;
  text-align: center;
}
</style>
