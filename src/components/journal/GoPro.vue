<template>
  <base-card class="go-pro__card">
    <div class="container">
      <div class="logo"></div>
      <div class="description">
        <p>
          Sign up for My Journal Pro to gain many extras! Customize your
          journals, increase your security, export your journals locally and
          many more additional functionalities!
        </p>
      </div>
      <base-button @click="toggleShowGoPro" mode="alternative">Learn More</base-button>
    </div>
  </base-card>
  <pro-modal @close="toggleShowGoPro" :show="showGoPro" />
</template>

<script>
import { ref } from "@vue/reactivity";
import ProModal from "./ProModal.vue";
export default {
  components: { ProModal },
  setup() {
    const showGoPro = ref(false);
    const toggleShowGoPro = () => {
      showGoPro.value = !showGoPro.value;
    };
    return {
      showGoPro,
      toggleShowGoPro,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  width: 20rem;
  min-width: 20rem;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.logo {
  width: 100%;
  height: 6rem;
  margin-bottom: 0.5rem;
  background: url("../../assets/images/pro1.png") center/contain no-repeat;
}
p {
  margin-bottom: 2rem;
}

</style>
