<template>
  <the-header />
  <router-view />
</template>
<script>
import TheHeader from "../src/components/layout/TheHeader.vue";
export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
*{
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
}
#app {
  height:100%;
}
</style>
