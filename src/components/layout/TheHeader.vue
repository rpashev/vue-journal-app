<template>
  <header>
    <nav>
      <div class="logo__container">
        <router-link to="/"><div class="logo"></div></router-link>
      </div>
      <ul>
        <li v-if="!isLoggedIn">
          <router-link to="/login">Login</router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link to="/sign-up">Sign Up</router-link>
        </li>
        <li v-if="userName">
          <router-link to="/user-profile">{{ userName }}</router-link>
        </li>
        <li v-if="isLoggedIn">
          <a @click="logout">Logout</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.userId;
    },
    userName() {
      return this.$store.getters.firstName;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/")
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
  z-index: 0;
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
  color: #59595e;
}
a:active,
a:hover,
a.router-link-active {
  border-bottom: 2px solid #03692d;
  cursor: pointer;
}
.logo__container {
  width: 6rem;
  height: 6rem;
}
.logo {
  background: url("../../assets/images/logo4.png") center/contain no-repeat;
  height: 100%;
  width: 100%;
  margin-left: 2rem;
}
.logo:hover {
  /* border-bottom: 2px solid black; */
  transition: all 0.2s ease-in;
  transform: scale(1.1);
}
</style>
