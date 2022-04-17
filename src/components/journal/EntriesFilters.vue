<template>
  <div class="entries__filters">
    <div class="form-control">
      <div class="time__filter">
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
        <select name="per" id="per" v-model="per">
          <option value="5">Show 5</option>
          <option value="10">Show 10</option>
          <option value="20">Show 20</option>
          <option value="50">Show 50</option>
        </select>
      </div>
    </div>
    <div class="form-control search-form-control">
      <div class="search">
        <input
          v-model="contentQuery"
          type="search"
          id="search"
          placeholder="Search this journal..."
          name="search"
        />
        <div class="search-icon"></div>
      </div>
    </div>
    <date-modal @custom-dates="getDates" :show="showDateModal" @close="cancelShowDateModal" />
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

    watch([timeQuery, contentQuery, per], (current) => {
      if (current[0] === "custom") {
        // console.log("custom");
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
  margin-top: 3rem;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr 8rem 1fr;
  gap: 1.5rem;
  width: 75%;
}

.form-control {
  height: 2.5rem;
  width: 100%;
}

.form-control > * {
  height: 100%;
}
input,
select {
  width: 100%;
  height: 100%;
  padding: 0.4rem;
  outline: none;
  font: inherit;
  border: 1.5px solid rgb(173, 169, 169);
  background-color: transparent;
  font-size: 0.8rem;
}

input:focus {
  background-color: #e9e9e98a;
}

.search {
  display: flex;
  align-items: center;
}

.search input {
  margin-right: -1.5rem;
  padding-right: 2rem;
  padding-left: 0.6rem;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}

.search-icon {
  background: url("https://res.cloudinary.com/rpashev/image/upload/v1643800563/journal-app/search-icon_uqpvfe.png")
    center/contain no-repeat;
  width: 1rem;
  height: 1rem;
}

@media (max-width: 56.25em) {
  .entries__filters {
    width: 90%;
  }
}

@media (max-width: 40em) {
  .entries__filters {
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
  }

  .search-form-control {
    grid-column: 1/-1;
  }
}
</style>
