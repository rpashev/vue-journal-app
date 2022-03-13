<template>
  <div class="journals__list-item" @click="openJournal">
    <div class="card">
      <h2>{{ journalName }}</h2>
      <p class="entries-number">
        You have <span>{{ entriesAmount }}</span> entries in this journal.
      </p>
      <div class="actions">
        <base-button mode="dark" link :to="`/journals/${journalID}`" @click.stop
          >View Entries</base-button
        >
        <base-button link :to="`/journals/${journalID}/new-entry`" @click.stop
          >New Entry</base-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: ["journalName", "journalID", "entriesAmount"],
  setup(props) {
    const router = useRouter();

    const openJournal = () => {
      router.push(`/journals/${props.journalID}`);
    };

    return {
      openJournal,
    };
  },
};
</script>

<style scoped>
.journals__list-item {
  width: 40%;
  max-width: 300px;
  height: 30rem;
  min-width: 300px;
  transition: all 0.2s ease-out;
}

.journals__list-item:hover {
  transform: scale(1.03) translateY(-4px);
  cursor: pointer;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  height: 80%;
  overflow: hidden;
}

.actions {
  display: flex;
  justify-content: space-between;
  margin: 2rem;
}

.actions a {
  width: 45%;
  text-align: center;
  padding: 0.4rem;
  font-size: 0.9rem;
}

h2 {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
  width: 100%;
  padding: 1rem;
  color: #f0f0f0;
  background-color: #2f3940;
}

.entries-number {
  text-align: center;
  width: 60%;
  opacity: 0.8;
}

.entries-number span {
  font-weight: bold;
}
</style>
