<template>
  <div class="container">
    <base-card>
      <div class="content">
        <div class="logo"></div>
        <div class="description">
          <p>
            Sign up for My Journal Pro to gain many extras! Customize your journals, increase your
            security, export your journals locally and many more additional functionalities!
          </p>
        </div>
        <base-button @click="toggleShowGoPro" mode="alternative">Learn More</base-button>
      </div>
    </base-card>
  </div>
  <pro-modal @close="toggleShowGoPro" :show="showGoPro" />
</template>

<script setup>
import { ref } from "@vue/reactivity";
import ProModal from "./ProModal.vue";

const showGoPro = ref(false);
const toggleShowGoPro = () => {
  showGoPro.value = !showGoPro.value;
};
</script>

<style scoped>
.container {
  width: 25rem;
  max-width: 25rem;
  margin: 0 auto;
  margin-top: 3rem;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.logo {
  width: 100%;
  height: 6rem;
  margin-bottom: 0.5rem;
  background: url("https://res.cloudinary.com/rpashev/image/upload/v1643800563/journal-app/pro1_epbkw1.png")
    center/contain no-repeat;
}
p {
  margin-bottom: 1.5rem;
}

@media (max-width: 40em) {
  .container {
    width: 310px;
  }
}
</style>
