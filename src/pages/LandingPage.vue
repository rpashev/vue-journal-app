<template>
  <div class="landing-page main">
    <landing-page-intro />
    <landing-page-promotion class="max-container" />
    <landing-page-privacy class="max-container" />
    <landing-page-prompt class="max-container" />
    <landing-page-resources title="Journal writing resources" class="max-container" />
    <landing-page-features class="max-container" />
    <landing-page-final-prompt />
  </div>
</template>

<script setup>
import LandingPageIntro from "../components/landing-page/Intro.vue";
import LandingPagePromotion from "../components/landing-page/Promotion.vue";
import LandingPagePrivacy from "../components/landing-page/Privacy.vue";
import LandingPagePrompt from "../components/landing-page/Prompt.vue";
import LandingPageResources from "../components/landing-page/Resources.vue";
import LandingPageFeatures from "../components/landing-page/Features.vue";
import LandingPageFinalPrompt from "../components/landing-page/FinalPrompt.vue";
</script>

<style scoped>
.landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
}

@media (max-width: 64em) {
  .landing-page {
    gap: 6rem;
  }
}
</style>
