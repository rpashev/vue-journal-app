<template>
  <div class="new-entry__page">
    <form @submit.prevent="submitHandler">
      <div class="entry__container">
        <div class="entry__title">
          <label for="entry-title">Entry title</label>
          <input
            type="text"
            id="entry-title"
            name="entry-title"
            v-model="title"
          />
        </div>
        <div class="entry__date">
          <label for="entry-date">Date</label
          ><input
            type="date"
            id="entry-date"
            name="entry-date"
            v-model="date"
          />
        </div>
      </div>
      <div class="entry__body">
        <h2>Share your thoughts...</h2>
        <vue-editor
          class="entry-editor__content"
          v-model="content"
          :editorToolbar="customToolbar"
        />
      </div>
      <div class="actions">
        <base-button
          type="submit"
          tag="button"
          :disabled="isInvalid"
          :class="{
            forbidden: isInvalid,
          }"
          >Submit</base-button
        >
        <base-button
          class="btn-back"
          mode="dark"
          link
          :to="`/journals/${journalID}`"
          >Back</base-button
        >
      </div>

      <!-- <div v-html="content"></div> -->
      <p class="error-message submit-error" v-if="errorMessage">
        {{ errorMessage }}
      </p>
      <base-spinner v-if="isLoading"></base-spinner>
    </form>
  </div>
</template>

<script>
import { VueEditor } from "vue3-editor";
import { computed, ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";

import entryService from "../../../services/entryService";
import { customToolbar } from "../../../helper-functions/vue-editor";

export default {
  components: { VueEditor },
  setup() {
    const content = ref("");
    const title = ref("");
    const date = ref(new Date().toISOString().substr(0, 10));

    let isLoading = ref(false);
    let errorMessage = ref(null);
    const router = useRouter();
    const route = useRoute();
    const journalID = route.params.journalID;

    const isInvalid = computed(() => {
      return content.value === "";
    });

    const submitHandler = async () => {
      isLoading.value = true;
      try {
        await entryService.createEntry(
          title.value,
          content.value,
          date.value,
          journalID
        );
        router.push(`/journals/${journalID}`);
      } catch (err) {
        errorMessage.value =
          err.response?.data?.message || "Could not create entry!";
      } finally {
        isLoading.value = false;
      }
    };

    return {
      content,
      submitHandler,
      date,
      title,
      customToolbar,
      isInvalid,
      errorMessage,
      isLoading,
      journalID,
    };
  },
};
</script>
<style scoped>
.new-entry__page {
  padding: 3rem 2rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
form {
  display: flex;
  width: 55%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
input,
label,
h2 {
  color: #59595e;
  font: inherit;
  outline: none;
  width: 100%;
}
.entry__body {
  width: 100%;
}
.entry__container {
  display: flex;
  width: 100%;
  justify-content: space-around;
}
.entry__container input {
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 0.25rem;
  border: 1.5px solid rgb(173, 169, 169);
  padding: 0.2rem 0.5rem;
}
.entry-editor__content {
  max-width: 60rem;
  width: 100%;
}
input:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
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
h2 {
  text-align: center;
  font-size: 1.2rem;
}
.actions {
  display: flex;
  width: 100%;
  justify-content: center;
}
button,
a {
  margin-top: 2rem;
  min-width: 6rem;
}
.btn-back {
  margin-left: 1rem;
}

@media (max-width: 1024px) {
  form {
    width: 90%;
  }
}

@media (max-width: 40rem) {
  form {
    width: 100%;
  }
  .entry__container {
    flex-direction: column;
  }
}
</style>
