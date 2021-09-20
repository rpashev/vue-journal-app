<template>
  <the-header />
  <router-view ></router-view>
  <the-footer />
</template>
<script>
import TheHeader from "../src/components/layout/TheHeader.vue";
import TheFooter from "../src/components/layout/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter
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
h1,
p {
  color: #59595e;
}
</style>
