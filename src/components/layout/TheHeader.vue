<template>
  <header>
    <nav>
      <div>
        <h1>
          <router-link to="/">Home</router-link>
        </h1>
      </div>
      <ul>
        <li v-if="!isLoggedIn">
          <router-link to="/login">Login</router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link to="/sign-up">Sign Up</router-link>
        </li>
        <li v-else>
          <router-link to="/logout">Logout</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
};
</script>
<style scoped>
header {
  /* height: 4rem; */
  position: fixed;
  top: 0;
  left: 0;
  background: transparent;
  z-index: 100;
  width: 100%;
  
}
nav {
  display: flex;
  justify-content: space-between;
  /* align-items: flex-start;*/
} 
ul {
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  font: inherit;
  margin: 0 2rem;
  text-decoration: none;
  color:#59595e;
}
a:active,
a:hover,
a.router-link-active {
  border-bottom: 2px solid #03692d;
}

</style>
