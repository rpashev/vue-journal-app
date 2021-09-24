<template>
  <div class="journals__list-item">
    <div class="background">
      <h1>{{ name }}</h1>
      <p>{{ description }}</p>
      <div class="actions">
        <base-button>View Entries</base-button>
        <base-button>New Entry</base-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "description"],
  setup() {},
};
</script>
<style scoped>
.journals__list-item {
  width: 35%;
  height: 35rem;
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
.actions button {
  width: 45%;
}
h1,
p {
  text-align: center;
  width: 50%;
}
</style>
