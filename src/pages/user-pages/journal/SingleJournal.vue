<template>
  <div class="single-journal__page">
    <div class="single-journal__page-entries">
      <h1 v-if="journal">{{ journal.journalName }}</h1>
      <div class="actions-main">
        <base-button
          class="btn-entry"
          link
          :to="`/journals/${journalID}/new-entry`"
          >New Entry</base-button
        >
        <base-button class="btn-back" link :to="`/journals/`">Back</base-button>
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
      <base-spinner v-if="isLoading"></base-spinner>
    </div>
    <div class="single-journal__page-prompts">
      <base-card class="card_description">
        <div v-if="journal" class="single-journal__page-description">
          <h2>Journal description</h2>
          <p v-if="journal.description">{{ journal.description }}</p>
          <p v-else>
            You have not added a description of this journal yet! You can add
            one below.
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
      </base-card>
      <writing-resources class="resources" />
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
import { watch } from "@vue/runtime-core";
import { filterAndSortEntries } from "../../../helper-functions/filter-and-sort-entries";
import WritingResources from "../../../components/journal/WritingResources.vue";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

export default {
  components: {
    EntriesFilters,
    EntriesList,
    WritingResources,
    VPagination,
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
          err.response.data.message || "Could not delete, please try again!";
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
.single-journal__page {
  /* padding-top: 2rem; */
  padding-right: 2rem;
  display: flex;
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
.single-journal__page-prompts {
  display: flex;
  flex-direction: column;
  width: 32%;
  height: 100%;
}
.card_description {
  background: #eff6ff;
  width: 100%;
  min-width: 30rem;
}
.card_description p,
.card_description h2 {
  color: #312e81;
}
.pagination {
  margin-bottom: 2rem;
}
.actions-main {
  width: 30%;
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
}
.actions {
  width: 80%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
}
.btn-entry {
  /* align-self: center;margin-left: 3rem; */
}
h1 {
  margin-bottom: 2rem;
  /* align-self: center; */
  /* width: 50%; */
}
p,
h2 {
  text-align: center;
}
.submit-error {
  position: static;
  text-align: center;
}
</style>
