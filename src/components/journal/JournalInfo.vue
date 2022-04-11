<template>
  <div class="journal-info">
    <h2>Journal Description</h2>
    <p v-if="description">{{ description }}</p>
    <p v-else>
      You have not added a description of this journal yet! You can add one
      below.
    </p>
    <div class="actions">
      <base-button link :to="`/journals/${journalID}/edit-journal`"
        >Edit Journal</base-button
      >
      <base-button @click="toggleShowDialog" mode="flat"
        >Delete Journal</base-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["description", "journalID", "toggleShowDialog"],
};
</script>

<style scoped>
.journal-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-width: 320px;
  max-width: 400px;
  min-height: 15rem;
  margin: 6rem auto 2rem auto;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
  border-radius: 4px;
}
p {
  font-size: 0.9rem;
  padding: 0 0.5rem 0.5rem 0.5rem;
}

.actions {
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 0.5rem;
}

.actions button,
.actions a {
  width: 50%;
  padding: 0.5rem 0.75rem;
  font-size: 0.8rem;
  letter-spacing: 0.5px;
}

@media (max-width: 64em) {
  .journal-info {
    width: 60%;
    margin: 2rem auto;
  }
}
@media (max-width: 30em) {
  .journal-info {
    box-shadow: none;
  }
  .actions {
    flex-direction: column;
  }
  .actions button,
  .actions a {
    width: 100%;
    font-size: 0.85rem;
  }
}
</style>
