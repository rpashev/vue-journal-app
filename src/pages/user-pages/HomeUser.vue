<template>
  <intro-info
    image="https://res.cloudinary.com/rpashev/image/upload/v1643817968/journal-app/seo-background_jr9i6c_tms19p.webp"
    title="Let's write!"
    opacity="0.4"
  />
  <div class="home-user__page">
    <p class="error-message submit-error" v-if="errorMessage">
      {{ errorMessage }}
    </p>
    <base-spinner v-if="isLoading"></base-spinner>
    <div v-if="!isLoading && !errorMessage" class="home-user__page-journals">
      <h1>{{ username }}'s journals</h1>
      <div
        class="fallback"
        v-if="!isLoading && !errorMessage && !journals.length"
      >
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

    <go-pro />
  </div>
</template>

<script>
import JournalCard from "../../components/journal/JournalCard.vue";
import IntroInfo from "../../components/info-pages-components/IntroInfo.vue";
import GoPro from "../../components/journal/GoPro.vue";
import journalService from "../../services/journalService";
import { ref, computed } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  components: { JournalCard, GoPro, IntroInfo },
  setup() {
    let isLoading = ref(false);
    let errorMessage = ref(null);
    let journals = ref([]);

    const store = useStore();

    const username = computed(() => {
      return store.getters.firstName;
    });

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
      username,
    };
  },
};
</script>

<style scoped>
.home-user__page {
  width: 100%;
  padding: 1rem 4rem 6rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9fafb;
  margin-top: 2rem;
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
  gap: 3rem;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}
.fallback {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-size: 1.05rem;
}

.error-message {
  color: var(--color-error);
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
  text-transform: uppercase;
}

@media (max-width: 64em) {
  .home-user__page {
    display: block;
    padding: 0 2rem;
  }
  .home-user__page-journals {
    width: 100%;
  }
}

@media (max-width: 40em) {
  .home-user__page {
    padding: 2rem 0;
  }
}
</style>
