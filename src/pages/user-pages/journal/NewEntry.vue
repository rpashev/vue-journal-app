<template>
  <div class="new-entry__page">
    <h2>Share your thoughts</h2>
    <vue-editor v-model="content" />
    <div v-html="content"></div>
  </div>
</template>

<script>
import { VueEditor } from "vue3-editor";
import { ref } from "@vue/reactivity";

export default {
  components: { VueEditor },
  setup() {
    const content = ref("");
    return {
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
