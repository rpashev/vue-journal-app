<template>
  <div class="single-journal__page">
    <h1>{{ journalName }}</h1>
    <entries-filters></entries-filters>
    <entries-list :entriesData="entries"></entries-list>
  </div>
</template>

<script>
import EntriesFilters from "../../../components/journal/EntriesFilters.vue";
import EntriesList from "../../../components/journal/EntriesList.vue";
import { journals } from "../../../../DUMMY_DATA";

export default {
  components: {
    EntriesFilters,
    EntriesList,
  },
  setup() {
    const journalName = journals[0].journalName;
    const entries = journals[0].entries;

    return {
      journalName,
      entries
    }
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
</style>
