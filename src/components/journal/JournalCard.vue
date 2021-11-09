<template>
  <div class="journals__list-item" @click="openJournal">
    <div class="background">
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
  height: 30rem;
  margin: 2rem;
  min-width: 300px;
  transition: all 0.4s ease-out;
}
.journals__list-item:hover {
  transform: scale(1.03);
  cursor: pointer;
}
.background {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: url("../../assets/images/journal.png") center/contain no-repeat;
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
  width: 60%;
  overflow: hidden;
}
p {
  text-align: center;
  width: 50%;
  font-size: 0.9rem;
}
</style>
