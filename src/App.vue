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

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  setup() {
    const store = useStore();
    store.dispatch("tryLogin");
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
@media (max-width: 40rem) {
}
</style>
