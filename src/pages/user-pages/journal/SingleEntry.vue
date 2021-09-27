<template>
  <div class="single-entry__page">
    <h1>{{ title }}</h1>
    <h3>{{ date }}</h3>
    <div class="entry__body">{{ body }}</div>
    <div class="entry__actions">
      <base-button
        mode="allowed"
        id="entry__actions-edit"
        link
        :to="`/journals/${journalID}/${entryID}/edit`"
        >Edit</base-button
      >
      <base-button id="entry__actions-delete" mode="alternative"
        >Delete</base-button
      >
    </div>
    <base-button id="entry__actions-back" link :to="`/journals/${journalID}`"
      >Back to journal</base-button
    >
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { journals } from "../../../../DUMMY_DATA";

export default {
  setup() {
    const route = useRoute();
    const entryID = route.params.entryID;
    const journalID = route.params.journalID;
    const journal = journals.find((el) => el.id === journalID);
    console.log(journalID);
    const entry = journal.entries.find((entry) => entry.id === entryID);
    return {
      title: entry.title,
      date: entry.date,
      body: entry.body,
      journalID,
      entryID,
    };
  },
};
</script>

<style scoped>
.single-entry__page {
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.entry__body {
  width: 50%;
}
.entry__actions {
  width: 12%;
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
}
#entry__actions-back {
  margin-top: 2rem;
}
</style>
