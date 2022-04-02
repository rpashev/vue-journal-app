<template>
  <nav class="mobile-nav">
    <ul>
      <li v-if="!isLoggedIn" @click="toggleNav">
        <router-link to="/">Home</router-link>
      </li>
      <li v-if="!isLoggedIn" @click="toggleNav">
        <router-link to="/login">Login</router-link>
      </li>
      <li v-if="!isLoggedIn" @click="toggleNav">
        <router-link to="/sign-up">Sign Up</router-link>
      </li>
      <li v-if="isLoggedIn" @click="toggleNav">
        <router-link
          :class="{ user: isLoggedIn }"
          active-class="active-user"
          to="/journals"
          >Journals</router-link
        >
      </li>
      <li v-if="isLoggedIn" @click="toggleNav">
        <a :class="{ user: isLoggedIn }" @click="logout">Logout</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["toggleNav"],
  computed: {
    isLoggedIn() {
      return this.$store.getters.userId;
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
.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #2f3940;
  z-index: 100;
  animation-name: slidein;
  animation-duration: 0.3s;
}

ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 12rem;
  list-style: none;
  gap: 0.5rem;
}

a {
  text-decoration: none;
  font: inherit;
  display: block;
  font-size: 1.9rem;
  color: #f0f0f0;
  text-transform: uppercase;
}

@keyframes slidein {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
