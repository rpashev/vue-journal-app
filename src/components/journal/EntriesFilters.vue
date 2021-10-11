<template>
  <div class="entries__filters">
    <div class="form-control">
      <div class="time__filter">
        <!-- <label for="timeFilter">Since</label> -->
        <select name="timeFilter" id="timeFilter" v-model="timeQuery">
          <option value="alltime">All Time</option>
          <option value="today">Today</option>
          <option value="yesterday">Yesterday</option>
          <option value="this-week">This Week</option>
          <option value="this-month">This Month</option>
          <option value="this-year">This Year</option>
          <option value="custom">Custom</option>
        </select>
      </div>
    </div>
    <div class="form-control">
      <div class="search">
        <div class="search-icon"></div>
        <input
          v-model="contentQuery"
          type="search"
          id="search"
          placeholder="Search this journal..."
          name="search"
        />
      </div>
      <!-- <div>{{ filteredEntries }}</div> -->
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";

export default {
  props: ["entries"],

  setup(props, context) {
    const timeQuery = ref(null);
    const contentQuery = ref("");
    watch([timeQuery, contentQuery], (current) => {
      context.emit("getqueries", current);
    });

    return {
      timeQuery,
      contentQuery,
    };
  },
};
</script>

<style scoped>
.entries__filters {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  /* height: 4rem; */
}
.time__filter,
.search {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  position: relative;
}
.form-control {
  height: 3rem;
  margin: 0 1rem;
}
input,
select {
  width: 20rem;
  padding: 0.4rem;
  outline: none;
  font: inherit;
  font-size: 0.8rem;
}
input {
  width: 25rem;
}

.search-icon {
  background: url("../../assets/images/search-icon.png") center/contain
    no-repeat;
  width: 1rem;
  height: 1.5rem;
  position: absolute;
  right: 0.3rem;
  bottom: 0.15rem;
}
</style>
