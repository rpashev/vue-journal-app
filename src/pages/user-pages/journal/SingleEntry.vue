<template>
  <div class="single-entry__page">
    <h2>haha</h2>
    <h1>{{ title }}</h1>
    <h3>{{ date }}</h3>
    <div>{{ body }}</div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import {journals} from "../../../../DUMMY_DATA"

export default {
  setup() {
    const route = useRoute();
    const entryID = route.params.entryID;
    const journalID = route.params.journalID;
    const journal = journals.find(el=>el.id===journalID);
    console.log(journalID)
    const entry = journal.entries.find(entry=>entry.id===entryID);
    return {
        title: entry.title,
        date: entry.date,
        body: entry.body
    }
  },
};
</script>
