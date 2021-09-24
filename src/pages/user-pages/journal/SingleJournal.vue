<template>
  <div class="single-journal__page">
    <entries-filters></entries-filters>
  </div>
</template>

<script>
import EntriesFilters from "../../../components/journal/EntriesFilters.vue";

export default {
  components: {
    EntriesFilters,
  },
  setup() {},
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
