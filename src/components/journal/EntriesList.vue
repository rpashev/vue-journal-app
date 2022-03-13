<template>
  <div class="entries-list__container">
    <p class="error-message submit-error" v-if="errorMessage">
      {{ errorMessage }}
    </p>
    <base-spinner v-if="isLoading"></base-spinner>
    <ul class="entries-list">
      <li class="entries-list__title">
        <div class="entry-heading">Entry</div>
        <div class="date-heading">Date</div>
        <div class="actions-heading">Actions</div>
      </li>
      <li
        v-for="entry in entriesData"
        :key="entry.id"
        class="entries-list__item"
      >
        <div class="entry__intro">
          <div
            class="entry-list__item-title"
            @click="viewEntry(entry._id)"
            title="View Entry"
          >
            {{ entry.title }}
          </div>
          <div v-html="entryContent(entry)" class="entry__description"></div>
        </div>
        <div class="entry__date">{{ readableDate(entry.date) }}</div>
        <div class="entry__actions">
          <base-button
            mode="dark"
            id="entry__actions-view"
            link
            :to="`/journals/${journalID}/${entry._id}`"
            >View</base-button
          >
          <base-button
            id="entry__actions-edit"
            link
            :to="`/journals/${journalID}/${entry._id}/edit`"
            >Edit</base-button
          >
          <base-button
            id="entry__actions-delete"
            mode="alternative"
            @click="
              toggleShowDialog();
              saveEntryId(entry._id);
            "
            >Delete</base-button
          >
        </div>
        <hr />
      </li>
    </ul>

    <base-dialog
      @remove="deleteEntry"
      @close="toggleShowDialog"
      title="Are you sure you want to delete the entry?"
      :show="showDialog"
    />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import entryService from "../../services/entryService";

export default {
  props: ["entriesData", "journalID"],
  setup(props, context) {
    const router = useRouter();

    const viewEntry = (entry) => {
      router.push(`/journals/${props.journalID}/${entry}`);
    };

    const entryContent = (entry) => {
      if (entry.body) {
        let cleanBody = entry.body.replace(/<\/?[^>]+(>|$)/g, "");
        if (cleanBody.length > 30) {
          cleanBody = cleanBody.slice(0, 30) + "...";
        }
        return cleanBody;
      }
    };

    const readableDate = (date) => {
      if (date) {
        return date.substr(0, 10);
      }
    };

    //deleting logic
    const showDialog = ref(false);

    const toggleShowDialog = () => {
      showDialog.value = !showDialog.value;
    };

    const entryIdToDelete = ref(null);
    let errorMessage = ref(null);
    let isLoading = ref(false);

    const saveEntryId = (entryId) => {
      entryIdToDelete.value = entryId;
    };

    const deleteEntry = async () => {
      isLoading.value = true;
      errorMessage.value = null;

      try {
        await entryService.deleteEntry(props.journalID, entryIdToDelete.value);
        context.emit("deleted-entry");
      } catch (err) {
        errorMessage.value =
          err.response?.data?.message ||
          "Could not delete entry! Please try again!";
      } finally {
        showDialog.value = false;
        isLoading.value = false;
      }
    };

    return {
      viewEntry,
      entryContent,
      readableDate,
      toggleShowDialog,
      showDialog,
      entryIdToDelete,
      saveEntryId,
      deleteEntry,
      errorMessage,
      isLoading,
    };
  },
};
</script>

<style scoped>
.entries-list__container {
  margin-top: 1rem;
  width: 75%;
  padding-bottom: 1.5rem;
}
.entris-list {
  width: 100%;
  list-style: none;
  padding-left: 0;
}

.entries-list__item,
.entries-list__title {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
}
.entry__intro {
  overflow: hidden;
  width: 90%;
}
.entries-list__title {
  border-bottom: 1px solid black;
  overflow: hidden;
  padding-bottom: 0.5rem;
  color: #4b525b;
  font-weight: bold;
}
.entries-list__item {
  margin-top: 1rem;
  color: #4b525b;
}
.entry__description {
  font-size: 0.8rem;
  color: #9098a5;
}
.entry__date,
.entry__intro {
  min-width: 6rem;
}
.entry__date {
  align-self: flex-start;
}
.entry__actions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}

.entry__actions button,
.entry__actions a {
  padding: 0.4rem 1.2rem !important;
}

.entry-list__item-title:hover {
  cursor: pointer;
  color: black;
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
hr {
  display: none;
}

@media (max-width: 56.25em) {
  .entries-list__container {
    width: 90%;
  }
}

@media (max-width: 40rem) {
  .entries-list {
    padding: 0 0.8rem;
  }

  .entries-list__item,
  .entries-list__title {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .entry__intro,
  .entry__date,
  .entry-heading,
  .date-heading {
    width: 45%;
  }
  .entry__actions {
    width: 100%;
    justify-content: space-between;
    margin: 0.75rem 0;
    font-size: 1.1rem;
  }

  .entry__actions button,
  .entry__actions a {
    padding: 0.4rem 2rem;
  }

  .actions-heading {
    display: none;
  }
  hr {
    display: block;
    color: black;
    width: 100%;
  }
}

@media (max-width: 22rem) {
  .entry__actions button,
  .entry__actions a {
    padding: 0.4rem 1.3rem;
  }
}
</style>
