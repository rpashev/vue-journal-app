<template>
  <div class="journals__list-item" @click="openJournal">
    <div class="card">
      <h2>{{ journalName }}</h2>
      <p>{{ readableDescription(description) || null }}</p>
      <div class="actions">
        <base-button mode="dark" link :to="`/journals/${journalID}`" @click.stop
          >View Entries</base-button
        >
        <base-button
          mode="cta"
          link
          :to="`/journals/${journalID}/new-entry`"
          @click.stop
          >New Entry</base-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: ["journalName", "description", "journalID"],
  setup(props) {
    const router = useRouter();
    const openJournal = () => {
      router.push(`/journals/${props.journalID}`);
    };
    const readableDescription = (description) => {
      if (description.length > 120) {
        return description.slice(0, 120) + "...";
      } else {
        return description;
      }
    };
    return {
      openJournal,
      readableDescription,
    };
  },
};
</script>
<style scoped>
.journals__list-item {
  width: 40%;
  max-width: 300px;
  height: 30rem;
  margin: 2rem;
  min-width: 300px;
  transition: all 0.4s ease-out;
}
.journals__list-item:hover {
  transform: scale(1.03);
  cursor: pointer;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
  border-radius: 16px;
  height: 80%;
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
  width: 100%;
  margin-top: 0;
  border-radius: 16px 16px 0 0;

  padding: 1rem;
  color: #F0F0F0;
  
  overflow: hidden;
  /* background-color: rgb(139, 14, 14); */
  background-color: #2f3940;
}
p {
  text-align: center;
  width: 50%;
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>
