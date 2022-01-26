<template>
  <div class="container">
    <base-card>
      <div class="content">
        <div class="logo"></div>
        <div class="description">
          <p>
            Sign up for My Journal Pro to gain many extras! Customize your
            journals, increase your security, export your journals locally and
            many more additional functionalities!
          </p>
        </div>
        <base-button @click="toggleShowGoPro" mode="alternative"
          >Learn More</base-button
        >
      </div>
    </base-card>
  </div>
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
  width: 350px;
  max-width: 350px;
  margin: 0 auto;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.logo {
  width: 100%;
  height: 6rem;
  margin-bottom: 0.5rem;
  background: url("../../assets/images/pro1.png") center/contain no-repeat;
}
p {
  margin-bottom: 1.5rem;
}
</style>
