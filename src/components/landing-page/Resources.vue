<template>
  <div :class="{ resources: true, 'from-info': info }">
    <h1 v-if="info">
      New to journaling? <br />
      We've got you covered!
    </h1>
    <h1 v-else>Journal Writing Resources</h1>
    <div class="resources__lists">
      <ul class="basics">
        <h2>Journal Basics</h2>
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
      <ul class="types">
        <h2>Types of Journals</h2>
        <li>
          <router-link to="/reflective-journal">Reflective Journal</router-link>
        </li>
        <li>
          <router-link to="/dream-journal">Dream Journal</router-link>
        </li>
        <li>
          <router-link to="/travel-journal">Travel Journal</router-link>
        </li>
        <li>
          <router-link to="/five-year-journal">5 Year Journal</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["info", "title"],
};
</script>

<style scoped>
.resources {
  display: flex;
  flex-direction: column;
  width: 90%;
}

.from-info {
  width: 20rem;
  padding: 0.5rem;
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.08);
}

.from-info .resources__lists {
  flex-direction: column;
  gap: 1.5rem;
}

.from-info ul {
  width: 100%;
}

.from-info h1 {
  font-size: 1.25rem;
}

.from-info h2 {
  font-size: 1.15rem;
}

.resources__lists {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  justify-content: center;
}

.basics,
.types {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  width: auto;
}

h1 {
  text-align: center;
  margin-bottom: 1.25rem;
  text-transform: uppercase;
}

h2 {
  text-transform: uppercase;
  font-weight: 400;
  font-size: 1.2rem;
  margin-bottom: 0.4rem;
}

a {
  font: inherit;
  text-decoration: none;
  color: var(--color-gray-dark);
}

a:active,
a:hover,
a.router-link-active {
  color: rgb(0, 0, 0);
}

@media (max-width: 64em) {
  li {
    text-align: center;
  }
  h2 {
    width: 80%;
    text-align: center;
  }
}

@media (max-width: 56.25em) {
  .from-info {
    box-shadow: none;
    width: 110%;
    margin-bottom: -2rem;
    padding: 1rem 0 2rem 0;
    background-color: #425059;
    box-shadow: none;
    color: var(--color-gray-light);
  }

  .from-info h1,
  .from-info a,
  .from-info h2 {
    color: var(--color-gray-light);
  }
}

@media (max-width: 40em) {
  .resources__lists {
    flex-direction: column;
  }
}
</style>
