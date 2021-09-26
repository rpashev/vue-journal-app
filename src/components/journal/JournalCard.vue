<template>
  <div class="journals__list-item" @click="openJournal">
    <div class="background">
      <h1>{{ name }}</h1>
      <p>{{ description }}</p>
      <div class="actions">
        <base-button link to="/" @click.stop>View Entries</base-button>
        <base-button link to="/new-entry" @click.stop>New Entry</base-button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  props: ["name", "description", "id"],
  setup(props) {
    const router = useRouter();

    const openJournal = () => {
      router.push(`/journals/${props.id}`);
    };
    return {
      openJournal
    }
  },
};
</script>
<style scoped>
.journals__list-item {
  width: 35%;
  height: 35rem;
}
.journals__list-item:hover {
  transform: scale(1.03);
  transition: all 0.4s ease-out;
  cursor: pointer;
}
.background {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: url("../../assets/images/journal.png") center/contain no-repeat;
  height: 80%;
}
.actions {
  display: flex;
  justify-content: space-between;
}
.actions a {
  width: 45%;
  text-align: center;
}
h1,
p {
  text-align: center;
  width: 50%;
}
</style>
