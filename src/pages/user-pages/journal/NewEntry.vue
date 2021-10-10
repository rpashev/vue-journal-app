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
      <base-button
        type="submit"
        tag="button"
        :disabled="isInvalid"
        :class="{
          forbidden: isInvalid,
        }"
        >Submit entry</base-button
      >
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
      console.log(journalID);
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
          err.response.data.message || "Could not create entry!";
      } finally {
        isLoading.value = false;
      }
    };

    const customToolbar = [
      [{ header: [false, 1, 2, 3, 4, 5, 6] }],
      ["bold", "italic", "underline", "strike"], // toggled buttons
      [
        { align: "" },
        { align: "center" },
        { align: "right" },
        { align: "justify" },
      ],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ color: [] }],
    ];

    return {
      content,
      submitHandler,
      date,
      title,
      customToolbar,
      isInvalid,
      errorMessage,
      isLoading,
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
form {
  display: flex;
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
}
.entry__container {
  display: flex;
  justify-content: space-around;
}
.entry__container input {
  margin: 0 1rem 1rem 1rem;
  border: 1.5px solid rgb(173, 169, 169);
  padding: 0.2rem 0.5rem;
}
.entry-editor__content {
  width: 50rem;
  max-width: 50rem;
}
input:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
.submit-error {
  position: static;
  text-align: center;
}
h2 {
  text-align: center;
  font-size: 1.2rem;
}
button {
  margin-top: 2rem;
}
</style>
