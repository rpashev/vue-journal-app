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
          <div
            class="entry-list__item-title"
            @click="viewEntry(entry.id)"
            title="View Entry"
          >
            {{ entry.title }}
          </div>
          <div class="entry__description">
            {{ entry.body.slice(0, 60) + "..." }}
          </div>
        </div>
        <div class="entry__date">{{ entry.date }}</div>
        <div class="entry__actions">
          <base-button
            id="entry__actions-view"
            link
            :to="`/journals/${journalID}/${entry.id}`"
            >View</base-button
          >
          <base-button
            mode="allowed"
            id="entry__actions-edit"
            link
            :to="`/journals/${journalID}/${entry.id}/edit`"
            >Edit</base-button
          >
          <base-button id="entry__actions-delete" mode="alternative"
            >Delete</base-button
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  props: ["entriesData", "journalID"],
  setup(props) {
    const router = useRouter();
    const viewEntry = (entry) => {
      router.push(`/journals/${props.journalID}/${entry}`);
    };
    return {
      viewEntry,
    };
  },
};
</script>

<style scoped>
.entries-list__container {
  margin-top: 1rem;
  width: 60%;
  padding-bottom: 3rem;
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
.entry__description {
  font-size: 0.8rem;
  color: #9098a5;
}
.entry__actions {
  display: flex;
  /* margin: 0 auto; */
}

.entry__actions button,
.entry__actions a {
  height: 2rem;
  text-align: center;
  padding: 0.5rem;
  margin: 0 0.5rem;
}
#entry__actions-view {
  margin-left: 0rem;
}
.entry-list__item-title:hover {
  cursor: pointer;
  color: black;
}
</style>
