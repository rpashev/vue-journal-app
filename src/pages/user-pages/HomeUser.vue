<template>
  <div class="home-user__page">
    <p class="error-message submit-error" v-if="errorMessage">
      {{ errorMessage }}
    </p>
    <base-spinner v-if="isLoading"></base-spinner>

    <div v-if="!isLoading && !errorMessage" class="home-user__page-journals">
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
    </div>
    <div v-if="!isLoading && !errorMessage" class="home-user__page-prompts">
      <go-pro />
      <writing-resources />
    </div>
  </div>
</template>

<script>
import JournalCard from "../../components/journal/JournalCard.vue";
import WritingResources from "../../components/journal/WritingResources.vue";
import GoPro from "../../components/journal/GoPro.vue";
import journalService from "../../services/journalService";
import { useStore } from "vuex";
// import { useStore } from "vuex";
import { ref } from "@vue/reactivity";

export default {
  components: { JournalCard, WritingResources, GoPro },
  setup() {
    const store = useStore();
    console.log(store.getters.token);
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
          err.response?.data?.message || "Could not load journals!";
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
  width: 100%;
  padding: 2rem 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
}
.home-user__page-journals {
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.journals__list {
  width: 100%;
  margin-top: 4rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}
.error-message {
  color: red;
  font-size: 1rem;
  position: absolute;
  text-align: center;
  width: 100%;
}
.submit-error {
  position: static;
  text-align: center;
}
</style>
