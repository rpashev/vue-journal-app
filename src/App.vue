<template>
  <the-header />
  <router-view id="main"></router-view>
  <the-footer />
</template>
<script>
import TheHeader from "../src/components/layout/TheHeader.vue";
import TheFooter from "../src/components/layout/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
}
#app {
  position: relative;
  min-height: 100vh;
}
#main {
  padding-bottom: 12rem;
  margin: 0 auto;
}
h1,
p,
h3,
h2 {
  color: #59595e;
}
</style>
