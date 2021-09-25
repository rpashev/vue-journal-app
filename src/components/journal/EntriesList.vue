<template>
  <div class="entries-list__container">
    <ul class="entries-list">
      <li class="entries-list__title">
        <div>Entry</div>
        <div>Date</div>
        <div>Actions</div>
      </li>
      <li
        v-for="entry in entriesData"
        :key="entry.id"
        class="entries-list__item"
      >
        <div class="entry__intro">
          <div>{{ entry.title }}</div>
          <div class="entry__description">
            {{ entry.body.slice(0, 60) + "..." }}
          </div>
        </div>
        <div class="entry__date">{{ entry.date }}</div>
        <div class="entry__actions">
          <div class="entry__actions-edit">Edit</div>
          <div class="entry__actions-delete">Delete</div>
        </div>
      </li>
      <li
        v-for="entry in entriesData"
        :key="entry.id"
        class="entries-list__item"
      >
        <div class="entry__intro">
          <div>{{ entry.title }}</div>
          <div class="entry__description">
            {{ entry.body.slice(0, 60) + "..." }}
          </div>
        </div>
        <div class="entry__date">{{ entry.date }}</div>
        <div class="entry__actions">
          <div class="entry__actions-edit">Edit</div>
          <div class="entry__actions-delete">Delete</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { journals } from "../../../DUMMY_DATA";
import { ref } from "@vue/reactivity";

export default {
  setup() {
    const entriesData = ref(journals[0].entries);

    return {
      entriesData,
    };
  },
};
</script>

<style scoped>
.entries-list__container {
  margin-top: 1rem;
  width: 60%;
}
.entris-list {
  width: 100%;
  list-style: none;
}

.entries-list__item,
.entries-list__title {
  display: grid;
  grid-template-columns: 4fr 2fr 2fr;
  align-items: center;
}
.entries-list__title {
  border-bottom: 1px solid black;
  padding-bottom: 0.5rem;
  color: #4b525b;
  font-weight: bold;
}
.entries-list__item {
  margin-top: 1rem;
  color: #4b525b;
}
.entry__actions {
  display: flex;
  /* justify-content: flex-start; */
  /* margin: 0 auto; */
}
.entry__description {
  font-size: 0.8rem;
  color: #9098a5;
}
.entry__actions-edit {
  margin: 0 1rem 0 0;
}
</style>
