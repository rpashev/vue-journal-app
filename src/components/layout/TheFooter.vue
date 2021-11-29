<template>
  <footer>
    <ul v-if="!isLoggedIn" class="footer__prompts">
      <li>
        <router-link to="/sign-up">Free Sign Up</router-link>
      </li>
      <li>
        <router-link to="/login">Login</router-link>
      </li>
    </ul>
    <div class="footer__info">
      <ul class="footer__info-group">
        <li>
          <router-link to="/journal-definition">What is a Journal?</router-link>
        </li>
        <li>
          <router-link to="/journal-types">Types of Journals</router-link>
        </li>
        <li>
          <router-link to="/benefits">Benefits of Journaling</router-link>
        </li>
        <li>
          <router-link to="/journal-prompts">Journal Prompts</router-link>
        </li>
      </ul>
      <ul class="footer__info-group">
        <li>
          <router-link to="/dream-journal">Dream Journal</router-link>
        </li>
        <li>
          <router-link to="/reflective-journal">Reflective Journal</router-link>
        </li>
        <li>
          <router-link to="/travel-journal">Travel Journal</router-link>
        </li>
        <li>
          <router-link to="/five-year-journal">Five Year Journal</router-link>
        </li>
      </ul>
    </div>
    <p>Copyright Journal App Inc. 2021</p>
  </footer>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

export default {
  setup() {
    const store = useStore();
    const isLoggedIn = computed(() => {
      return !!store.getters.token;
    });

    return {
      isLoggedIn,
    };
  },
};
</script>

<style scoped>
footer {
  position: absolute;
  bottom: 0;
  height: 12rem;
  width: 100%;
  background: #2f3940;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.footer__info {
  display: flex;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  margin: 0.2rem;
}
a {
  font: inherit;
  margin: 0 2rem;
  text-decoration: none;
  color: #fff;
}
a:hover {
  color: rgb(155, 190, 190);
}
p {
  position: absolute;
  font-size: 0.8rem;
  bottom: 0.5rem;
  color: #fff;
  opacity: 0.4;
}

@media (max-width: 1024px) {
  footer {
    /* display: block; */
  }
  .footer__info {
    display: block;
  }
  .footer__info-group:last-child {
    display: none;
  }
  a {
    margin: 0;
    text-align: center;
    display: inline-block;
    width: 100%;
  }
  li {
    margin: 0;
  }
}
</style>
