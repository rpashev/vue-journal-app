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
      <base-button @click="toggleShowDialog" mode="alternative"
        >Delete Journal</base-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["description", "journalID", "toggleShowDialog"],
  setup() {},
};
</script>

<style scoped>
.journal-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  min-width: 310px;
  margin-top: 6rem;
  padding: 0.25rem 1.5rem 1.5rem 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
  border-radius: 8px;
}
p {
  font-size: 0.9rem;
  padding: 0 0.5rem 0.5rem 0.5rem;
  text-shadow: 1px 1px rgb(218, 214, 214);
}
h2 {
  text-shadow: 1px 1px rgb(218, 214, 214);
}
.actions {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

@media (max-width: 1024px) {
  .journal-info {
    width: 60%;
    margin: 2rem auto;
  }
}
</style>
