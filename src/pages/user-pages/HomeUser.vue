<template>
  <div class="home-user__page">
    <div>
      <base-button link :to="`/journals/create-journal`"
        >Create a New Journal</base-button
      >
    </div>
    <div class="journals__list">
      <journal-card
        v-for="journal in journalsData"
        :journalName="journal.journalName"
        :description="journal.description"
        :key="journal.id"
        :journalID="journal.id"
      ></journal-card>
    </div>
  </div>
</template>

<script>
import { journals } from "../../../DUMMY_DATA";
import JournalCard from "../../components/journal/JournalCard.vue";
import { useStore } from "vuex";

export default {
  components: { JournalCard },
  setup() {
    const store = useStore();
    const journalsData = journals;
    console.log(journals);
    console.log(store.getters.token);
    return {
      journalsData,
    };
  },
};
</script>

<style scoped>
.home-user__page {
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.journals__list {
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
