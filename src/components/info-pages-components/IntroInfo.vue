<template>
  <div class="intro" :style="styleBackground">
    <h1 class="title">{{ title }}</h1>
    <base-button v-if="!isLoggedIn" link :to="`/sign-up`"
      >GET STARTED</base-button
    >
    <base-button v-if="isLoggedIn" link :to="`/journals/create-journal`"
      >CREATE A JOURNAL</base-button
    >
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  props: ["title", "image"],
  setup(props) {
    const store = useStore();

    const isLoggedIn = computed(() => {
      return !!store.getters.token;
    });

    const styleBackground = computed(() => {
      return {
        background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${props.image}) center/cover no-repeat`,
        "margin-top": store.getters.token ? "0" : "2rem",
      };
    });

    return {
      isLoggedIn,
      styleBackground,
    };
  },
};
</script>

<style scoped>
.intro {
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
}
.title {
  color: #fff;
  width: 55%;
  font-weight: 300;
  margin-bottom: 0.5rem 0;
  font-family: "Open Sans";
  font-size: 2.7rem;
  text-align: center;
}

@media (max-width: 1024px) {
  .title {
    font-size: 2.2rem;
    width: 90%;
  }
}
@media (max-width: 40rem) {
  .title {
    font-size: 1.8rem;
    width: 90%;
  }
}
</style>
