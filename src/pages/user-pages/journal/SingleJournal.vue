<template>
  <div class="single-journal__page">
    <p class="error-message submit-error" v-if="errorMessage && !journal">
      {{ errorMessage }}
    </p>
    <base-spinner class="spinner" v-if="isLoading"></base-spinner>

    <div v-if="journal" class="single-journal__page-entries">
      <h1>{{ journal.journalName }}</h1>
      <div class="actions-main">
        <base-button
          class="btn-entry"
          link
          :to="`/journals/${journalID}/new-entry`"
          >New Entry</base-button
        >
        <base-button mode="dark" class="btn-back" link :to="`/journals/`"
          >Back</base-button
        >
      </div>

      <entries-filters
        @custom-filter="saveCustomDates"
        @getqueries="saveQueries"
        v-if="journal"
        :entries="journal.entries"
      ></entries-filters>
      <entries-list
        v-if="journal"
        @deleted-entry="loadJournal"
        :entriesData="paginatedEntries"
        :journalID="journalID"
      ></entries-list>

      <p v-if="noEntries">No entries in this journal yet!</p>
      <p class="error-message submit-error" v-if="errorMessage">
        {{ errorMessage }}
      </p>
      <v-pagination
        class="pagination"
        v-model="page"
        :pages="numberOfPages"
        :range-size="1"
        active-color="#DCEDFF"
        @update:modelValue="updatePage"
      />
    </div>
    <journal-info
      v-if="journal"
      :description="journal.description"
      :journalID="journalID"
      :toggleShowDialog="toggleShowDialog"
    />

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
import { watch } from "@vue/runtime-core";
import { filterAndSortEntries } from "../../../helper-functions/filter-and-sort-entries";
import VPagination from "@hennge/vue3-pagination";
import JournalInfo from "../../../components/journal/JournalInfo.vue";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

export default {
  components: {
    EntriesFilters,
    EntriesList,
    VPagination,
    JournalInfo,
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
    let perPage = ref(10);
    let startDate = ref(null);
    let endDate = ref(null);

    // getting/loading journal
    const loadJournal = async () => {
      isLoading.value = true;
      errorMessage.value = null;
      try {
        journal.value = await journalService.getJournal(journalID);
      } catch (err) {
        errorMessage.value =
          err.response?.data?.message || "Couldn't load journal!";
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
    // sort & filter entries
    const saveQueries = (queries) => {
      timeFilter.value = queries[0];
      searchQuery.value = queries[1];
      perPage.value = +queries[2];
    };

    const saveCustomDates = (startingDate, endingDate) => {
      startDate.value = startingDate;
      endDate.value = endingDate;
    };

    const filteredEntries = computed(() => {
      return filterAndSortEntries(
        journal.value.entries,
        timeFilter.value,
        searchQuery.value,
        startDate.value,
        endDate.value
      );
    });

    // deleting journal
    const showDialog = ref(false);

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
          err.response?.data?.message || "Could not delete, please try again!";

        showDialog.value = false;
      } finally {
        isLoading.value = false;
        showDialog.value = false;
      }
    };

    //front end pagination
    const page = ref(1);

    const numberOfPages = computed(() => {
      if (journal.value) {
        return Math.ceil(filteredEntries.value.length / perPage.value);
      }
    });

    const updatePage = (currentPage) => {
      page.value = currentPage;
    };

    const paginatedEntries = computed(() => {
      if (journal.value) {
        return filteredEntries.value.slice(
          page.value * perPage.value - perPage.value,
          page.value * perPage.value
        );
      }
    });
    //resetting the page to page 1 if filters become active
    watch([searchQuery, timeFilter, perPage], () => {
      page.value = 1;
    });

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
      updatePage,
      page,
      numberOfPages,
      paginatedEntries,
      saveCustomDates,
    };
  },
};
</script>

<style scoped>
body {
  background-color: red;
}
.single-journal__page {
  padding-right: 2rem;
  display: flex;
  flex-wrap: wrap;
  background-color: #f9fafb;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
}
.single-journal__page-entries {
  width: 68%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.pagination {
  margin-bottom: 2rem;
}
.actions-main {
  width: 70%;
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
}
.actions {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  text-align: center;
}
.btn-entry,
.btn-back {
  width: 8rem;
  min-width: 8rem;
  text-align: center;
}

h1 {
  margin-bottom: 2rem;
}
p,
h2 {
  text-align: center;
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
  .single-journal__page {
    display: block;
    padding: 0;
  }
  .single-journal__page-entries {
    width: 100%;
  }
  .actions-main {
    width: 85%;
  }
}
</style>
