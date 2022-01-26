<template>
  <intro-info
    image="https://d3c2plo0qyv3hc.cloudfront.net/images/public/seo-background.jpg"
    title="Let's write!"
  />
  <div class="home-user__page">
    <p class="error-message submit-error" v-if="errorMessage">
      {{ errorMessage }}
    </p>
    <base-spinner v-if="isLoading"></base-spinner>
    <div v-if="!isLoading && !errorMessage" class="home-user__page-journals">
      <h1>Your journals</h1>
      <div class="fallback" v-if="!isLoading && !errorMessage && !journals.length">
        <p>No journals have yet been created.</p>
        <base-button link :to="`/journals/create-journal`"
          >GET STARTED</base-button
        >
      </div>

      <div class="journals__list">
        <journal-card
          v-for="journal in journals"
          :journalName="journal.journalName"
          :key="journal.id"
          :journalID="journal.id"
          :entriesAmount="journal.entriesAmount"
        ></journal-card>
      </div>
    </div>
    <div v-if="!isLoading && !errorMessage" class="home-user__page-prompts">
      <go-pro />
    </div>
  </div>
</template>

<script>
import JournalCard from "../../components/journal/JournalCard.vue";
import IntroInfo from "../../components/info-pages-components/IntroInfo.vue";
import GoPro from "../../components/journal/GoPro.vue";
import journalService from "../../services/journalService";
import { useStore } from "vuex";
// import { useStore } from "vuex";
import { ref } from "@vue/reactivity";

export default {
  components: { JournalCard, GoPro, IntroInfo },
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

        console.log(response.data);
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
  padding: 0 4rem 2rem 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  background-color: #f9fafb;
}
.home-user__page-journals {
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.journals__list {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}
.fallback {
  text-align: center;
}
.home-user__page-prompts {
  margin-top: 4.5rem;
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
h1 {
  margin-bottom: 2rem;
}

@media (max-width: 1024px) {
  .home-user__page {
    display: block;
    padding: 0 2rem;
  }
  .home-user__page-journals {
    width: 100%;
  }
  .home-user__page-prompts {
    margin-top: 0;
  }
}

@media (max-width: 40rem) {
  .home-user__page {
    padding: 2rem 0;
  }
}
</style>
