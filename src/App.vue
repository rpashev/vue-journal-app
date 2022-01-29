<template>
  <the-header />
  <main>
    <router-view></router-view>
  </main>
  <the-footer />
</template>
<script>
import TheHeader from "../src/components/layout/TheHeader.vue";
import TheFooter from "../src/components/layout/TheFooter.vue";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  setup() {
    const store = useStore();
    store.dispatch("tryLogin");

    const isLoggedIn = computed(() => {
      return !!store.getters.token;
    });

    const body = document.querySelector("body");
    body.style.background = isLoggedIn.value ? "#f9fafb" : "white";

    watch(isLoggedIn, (current) => {
      body.style.background = current ? "#f9fafb" : "white";
    });

    return {};
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  line-height: 1.4;
}
#app {
  position: relative;
  min-height: 100vh;
}
main {
  padding-bottom: 12rem;
  margin: 0 auto;
  height: auto;
  min-width: 320px;
  max-width: 2000px;
}
h1,
p,
h3,
h2 {
  color: #59595e;
}
.ql-align-center {
  text-align: center;
}
.ql-align-right {
  text-align: right;
}
.ql-align-left {
  text-align: left;
}
.ql-align-justify {
  text-align: justify;
}
</style>
