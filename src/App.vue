<template>
  <the-header />
  <main>
    <router-view></router-view>
  </main>
  <the-footer />
</template>

<script setup>
import TheHeader from "../src/components/layout/TheHeader.vue";
import TheFooter from "../src/components/layout/TheFooter.vue";
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";

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
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

:root {
  --color-red: #b91c1c;
  --color-red-light: #fecaca;
  --color-error: red;
  --color-gray-light: #f5f5f5;
  --color-gray-lightest: #fafafa;
  --color-gray-medium: #a1a1a1;
  --color-gray-dark: #59595e;
  --color-gray-darker: #2f3940;
  --color-gray-darkest: #212528;
  --color-blue: #3b82f6;
  --color-blue-light: #5797fd;
  --color-blue-lightest: #dbeafe;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  line-height: 1.6;
  min-width: 320px;
  margin: 0 auto;
}

#app {
  position: relative;
  min-height: 100vh;
}

main {
  padding-bottom: 12rem;
}

h1,
p,
h3,
h2 {
  color: var(--color-gray-dark);
}

h1,
h2 {
  line-height: 1.3;
}

h1 {
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  text-align: center;
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

.max-container {
  margin: 0 auto;
  max-width: 2000px;
}
</style>
