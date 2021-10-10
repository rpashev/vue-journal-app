<template>
  <div class="home-user__page">
    <div>
      <base-button link :to="`/journals/create-journal`"
        >Create a New Journal</base-button
      >
    </div>
    <div class="journals__list">
      <journal-card
        v-for="journal in journals"
        :journalName="journal.journalName"
        :description="journal.description"
        :key="journal.id"
        :journalID="journal._id"
      ></journal-card>
    </div>
    <p class="error-message submit-error" v-if="errorMessage">
        {{ errorMessage }}
      </p>
      <base-spinner v-if="isLoading"></base-spinner>
  </div>
</template>

<script>
import JournalCard from "../../components/journal/JournalCard.vue";
import journalService from "../../services/journalService";
// import { useStore } from "vuex";
import { ref } from "@vue/reactivity";

export default {
  components: { JournalCard },
  setup() {
    let isLoading = ref(false);
    let errorMessage = ref(null);
    let journals = ref([]);
    // const store = useStore();

    const loadJournals = async () => {
      try {
        isLoading.value = true;
        const response = await journalService.getJournals();

        journals.value = response.data;
      } catch (err) {
        errorMessage.value =
          err.response.data.message || "Could not load journals!";
      } finally {
        isLoading.value = false;
      }
    };
    loadJournals();

    return {
      journals,
      isLoading,
      errorMessage,
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
.submit-error {
  position: static;
  text-align: center;
}
</style>
