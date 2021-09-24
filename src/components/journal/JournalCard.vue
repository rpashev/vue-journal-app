<template>
  <div class="journals__list-item">
    <div class="background">
      <h1>{{ name }}</h1>
      <p>{{ description }}</p>
      <div class="actions">
        <base-button link to="/">View Entries</base-button>
        <base-button link to="/new-entry">New Entry</base-button>
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
