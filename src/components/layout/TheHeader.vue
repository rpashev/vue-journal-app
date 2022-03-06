<template>
  <header :style="styleBackground">
    <div
      :class="{
        logo__container: true,
        'logged-logo': isLoggedIn,
      }"
    >
      <router-link v-if="!isLoggedIn" to="/"
        ><div class="logo"></div
      ></router-link>
      <router-link v-if="isLoggedIn" to="/"
        ><div class="logo-white"></div
      ></router-link>
    </div>
    <nav>
      <ul>
        <li v-if="!isLoggedIn">
          <router-link to="/">Home</router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link to="/login">Login</router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link to="/sign-up">Sign Up</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link
            :class="{ user: isLoggedIn }"
            active-class="active-user"
            to="/journals"
            >Journals</router-link
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

    styleBackground() {
      return {
        background: this.isLoggedIn ? "#2f3940" : "white",
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
  top: 0;
  left: 0;
  background: white;
  z-index: 100 !important;
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  justify-content: space-between;
}

ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  margin-right: 2rem;
}

a {
  font: inherit;
  text-decoration: none;
  color: #59595e;
  cursor: pointer;
}

a:active,
a:hover,
a.router-link-active {
  border-bottom: 2px solid #03692d;
}

.user {
  color: #f0f0f0;
}

.user:active,
.user:hover {
  border-bottom: 2px solid #f0f0f0;
  cursor: pointer;
}

.active-user {
  border-bottom: 2px solid #f0f0f0;
}

.logo__container {
  width: 5rem;
  height: 5rem;
  min-width: 4rem;
  margin-left: 2rem;
}

.logo__container a {
  width: 100%;
  height: 100%;
}

.logo {
  background: url("https://res.cloudinary.com/rpashev/image/upload/v1643800565/journal-app/logo4_zsvynm.png")
    center/contain no-repeat;
  height: 100%;
  width: 100%;
  transition: all 0.3s ease-in;
}

.logo-white {
  background: url("https://res.cloudinary.com/rpashev/image/upload/v1643800566/journal-app/logo-white1_fdxfr8.png")
    center/contain no-repeat;
  height: 100%;
  width: 100%;
  transition: all 0.3s ease-in;
}

.logo:hover,
.logo-white:hover {
  transform: scale(1.02);
}

@media (max-width: 40rem) {
  ul {
    gap: 1.5rem;
  }

  .logo__container {
    margin-left: 0.5rem;
  }
}

@media (max-width: 22rem) {
  .logged-logo {
    width: 6rem;
    height: 6rem;
  }
}
</style>
