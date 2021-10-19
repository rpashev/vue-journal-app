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
      <div class="per__filter">
        <!-- <label for="timeFilter">Since</label> -->
        <select name="per" id="per" v-model="per">
          <option value="5">Show 5</option>
          <option value="10">Show 10</option>
          <option value="20">Show 20</option>
          <option value="50">Show 50</option>
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
    <date-modal
      @custom-dates="getDates"
      :show="showDateModal"
      @close="cancelShowDateModal"
    />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import DateModal from "./DateModal.vue";

export default {
  props: ["entries"],
  components: { DateModal },

  setup(props, context) {
    const timeQuery = ref("alltime");
    const contentQuery = ref("");
    const per = ref(10);
    const showDateModal = ref(false);
    // const startDate = ref(null);
    // const endDate = ref(null);

    watch([timeQuery, contentQuery, per], (current) => {
      if (current[0] === "custom") {
        console.log("custom");
        showDateModal.value = true;
      }
      context.emit("getqueries", current);
    });

    const cancelShowDateModal = () => {
      showDateModal.value = !showDateModal.value;
      timeQuery.value = "alltime";
    };
    const getDates = (startDateFilter, endDateFilter) => {
      context.emit("custom-filter", startDateFilter, endDateFilter);
      showDateModal.value = false;
    };

    return {
      timeQuery,
      contentQuery,
      per,
      showDateModal,
      cancelShowDateModal,
      getDates,
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
  padding-left: 1.5rem;
  margin-top: 1.5rem;
  /* height: 4rem; */
}
.time__filter,
.search,
.per__filter {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  position: relative;
}
.form-control {
  height: 3rem;
  margin: 0 1rem;
}
input,
select {
  width: 16rem;
  padding: 0.4rem;
  outline: none;
  font: inherit;
  font-size: 0.8rem;
}
input {
  width: 25rem;
}
.per__filter select {
  width: 7rem;
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
