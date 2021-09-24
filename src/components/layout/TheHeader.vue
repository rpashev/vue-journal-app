<template>
  <header>
    <nav>
      <div>
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
          <router-link to="/">Logout</router-link>
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
    userName() {
      return this.$store.getters.userName;
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
  z-index: 99;
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
}
.logo {
  background: url("../../assets/images/penzu.png") center/contain no-repeat;
  height: 60px;
  width: 80px;
  margin-left: 2rem;
}
.logo:hover {
  /* border-bottom: 2px solid black; */
  transition: all 0.1s ease-in;
  transform: scale(1.1);
}
</style>
