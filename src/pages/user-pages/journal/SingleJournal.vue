<template>
  <div class="single-journal__page">
    <h1>{{ journalName }}</h1>
    <base-button link :to="`/journals/${journalName}/new-entry`">New Entry</base-button>
    <entries-filters></entries-filters>
    <entries-list :entriesData="entries"></entries-list>
  </div>
</template>

<script>
import EntriesFilters from "../../../components/journal/EntriesFilters.vue";
import EntriesList from "../../../components/journal/EntriesList.vue";
import { journals } from "../../../../DUMMY_DATA";

import { useRoute } from "vue-router";

export default {
  components: {
    EntriesFilters,
    EntriesList,
  },
  setup() {
    const route = useRoute();
    const journalID = route.params.journalID;
    const journal = journals.find((el) => el.id === journalID);
    const entries = journal.entries;
    const journalName = journal.journalName;

    return {
      journalName,
      entries,
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
h1{
  margin-bottom: 2rem;
}

</style>
