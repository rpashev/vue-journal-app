<template>
  <div class="landing-page">
    <landing-page-intro />
    <landing-page-promotion />
    <landing-page-privacy />
    <landing-page-prompt />
    <landing-page-resources />
    <landing-page-features />
  </div>
</template>

<script>
import LandingPageIntro from "../components/landing-page/Intro.vue";
import LandingPagePromotion from "../components/landing-page/Promotion.vue";
import LandingPagePrivacy from "../components/landing-page/Privacy.vue";
import LandingPagePrompt from "../components/landing-page/Prompt.vue";
import LandingPageResources from "../components/landing-page/Resources.vue";
import LandingPageFeatures from "../components/landing-page/Features.vue";

export default {
  components: {
    LandingPageIntro,
    LandingPagePromotion,
    LandingPagePrivacy,
    LandingPagePrompt,
    LandingPageResources,
    LandingPageFeatures,
  },
};
</script>

<style scoped>
.landing-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
