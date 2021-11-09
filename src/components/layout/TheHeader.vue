<template>
  <header :style="styleBackground">
    <nav>
      <div class="logo__container">
        <router-link v-if="!isLoggedIn" to="/"
          ><div class="logo"></div
        ></router-link>
        <router-link v-if="isLoggedIn" to="/"
          ><div class="logo-white"></div
        ></router-link>
      </div>
      <ul>
        <li v-if="!isLoggedIn">
          <router-link to="/login">Login</router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link to="/sign-up">Sign Up</router-link>
        </li>
        <li v-if="userName">
          <router-link
            :class="{ user: isLoggedIn }"
            active-class="active-user"
            to="/user-profile"
            >{{ userName }}</router-link
          >
        </li>
        <li v-if="isLoggedIn">
          <a :class="{ user: isLoggedIn }" @click="logout">Logout</a>
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
    styleBackground() {
      return {
        background: this.isLoggedIn ? "rgb(139, 14, 14)" : "white",
      };
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
header {
  /* height: 6rem; */
  /* position: fixed; */
  top: 0;
  left: 0;
  background: white;
  z-index: 100 !important;
  width: 100%;
  height: 7rem;
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
.user {
  color: white;
}
.user:active,
.user:hover {
  border-bottom: 2px solid white;
  cursor: pointer;
}
.active-user {
  border-bottom: 2px solid white;
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
  transition: all 0.3s ease-in;
}
.logo-white {
  background: url("../../assets/images/logo-white.png") center/contain no-repeat;
  height: 100%;
  width: 100%;
  margin-left: 2rem;
  transition: all 0.3s ease-in;
}
.logo:hover, .logo-white:hover {
  /* border-bottom: 2px solid black; */
  transform: scale(1.08);
}
</style>
