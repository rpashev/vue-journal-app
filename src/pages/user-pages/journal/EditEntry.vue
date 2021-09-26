<template>
  <div class="new-entry__page">
    <h2>Share your thoughts</h2>
    <vue-editor v-model="content"> </vue-editor>
    <div v-html="content"></div>
  </div>
</template>

<script>
import { VueEditor } from "vue3-editor";
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { journals } from "../../../../DUMMY_DATA";

export default {
  components: { VueEditor },
  setup() {
    const route = useRoute();
    const entryID = route.params.entryID;
    const journalID = route.params.journalID;
    const journal = journals.find((el) => el.id === journalID);
    console.log(journalID);
    const entry = journal.entries.find((entry) => entry.id === entryID);
    const content = ref(entry.body);
    return {
      title: entry.title,
      date: entry.date,
      body: entry.body,
      content,
    };
  },
};
</script>
<style scoped>
.new-entry__page {
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
