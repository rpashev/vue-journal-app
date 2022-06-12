<template>
  <header :style="styleBackground">
    <div
      :class="{
        logo__container: true,
        'logged-logo': isLoggedIn,
      }"
    >
      <router-link v-if="!isLoggedIn" to="/"><div class="logo"></div></router-link>
      <router-link v-if="isLoggedIn" to="/"><div class="logo-white"></div></router-link>
    </div>
    <nav class="main-nav">
      <ul>
        <li v-if="!isLoggedIn">
          <router-link to="/">Home</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link :class="{ user: isLoggedIn }" to="/journals">My Journals</router-link>
        </li>

        <li v-if="!isLoggedIn">
          <router-link to="/login">Login</router-link>
        </li>
        <li v-if="!isLoggedIn" class="cta">
          <router-link to="/sign-up">Sign Up</router-link>
        </li>

        <li v-if="isLoggedIn">
          <a :class="{ user: isLoggedIn }" @click="logout">Logout</a>
        </li>
      </ul>
    </nav>
    <mobile-nav v-if="mobileActive" :toggleNav="toggleMobileNav"></mobile-nav>
    <button
      @click="toggleMobileNav"
      :class="{ white: mobileActive || isLoggedIn }"
      class="toggle-button"
    >
      <span class="toggle-button__bar"></span>
      <span class="toggle-button__bar"></span>
      <span class="toggle-button__bar"></span>
    </button>
  </header>
</template>

<script>
import MobileNav from "./MobileNav.vue";
export default {
  components: {
    MobileNav,
  },

  data() {
    return {
      mobileActive: false,
    };
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters.userId;
    },

    styleBackground() {
      return {
        background: this.isLoggedIn ? "var(--color-gray-darker)" : "white",
      };
    },
  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },

    toggleMobileNav() {
      this.mobileActive = !this.mobileActive;
      // console.log(this.mobileActive);
    },
  },
  watch: {
    mobileActive(newVal) {
      if (newVal === true) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
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

.main-nav {
  display: flex;
  justify-content: space-between;
}

.main-nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  margin-right: 4rem;
}

a {
  font: inherit;
  text-decoration: none;
  color: var(--color-gray-dark);
  cursor: pointer;
  display: block;
  border-bottom: 2px solid transparent;
  font-size: 1.1rem;
}

a:active,
a:hover,
a.router-link-active {
  border-bottom: 2px solid #03692d;
}

.cta a {
  padding: 0.5rem 1.6rem;
  border: 2px solid var(--color-gray-dark);
  border-radius: 4px;
  transition: all 0.25s ease-out;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
}

.cta a:hover,
.cta a:active {
  background-color: var(--color-gray-dark);
  color: var(--color-gray-light);
}

.user {
  color: var(--color-gray-light);
}

.user:active,
.user:hover,
.user.router-link-active {
  border-bottom: 2px solid var(--color-gray-light) !important;
  cursor: pointer;
}

.logo__container {
  width: 5rem;
  height: 5rem;
  min-width: 4rem;
  margin-left: 4rem;
}

.logged-logo {
  width: 6rem;
  height: 6rem;
}

.logo__container a {
  width: 100%;
  height: 100%;
  border: none;
}

.logo__container a:active,
.logo__container a.router-link-active {
  border-bottom: none;
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

.toggle-button {
  display: none;
  width: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  margin-right: 2rem;
  z-index: 200;
}
.toggle-button__bar {
  width: 100%;
  height: 0.2rem;
  background: var(--color-gray-darker);
  display: block;
  margin: 0.6rem 0;
  transition: all 0.3s ease-out;
}

.white .toggle-button__bar {
  background: var(--color-gray-light);
}

@media (max-width: 40em) {
  .main-nav {
    display: none;
  }

  .logo__container {
    margin-left: 1.5rem;
  }

  .toggle-button {
    display: block;
  }
}
</style>
