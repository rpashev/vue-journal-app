<template>
  <div class="resources">
    <h1>Journal Writing Resources</h1>
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
export default {};
</script>

<style scoped>
.resources {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.resources__lists {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: auto;
}
.basics,
.types {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0 2rem 2rem;
  list-style: none;
}

h1 {
  text-align: center;
}

a {
  font: inherit;
  margin: 0;
  text-decoration: none;
  color: #59595e;
  font-size: 1.1rem;
}
a:active,
a:hover,
a.router-link-active {
  color: rgb(0, 0, 0);
}

@media (max-width: 1024px) {
  ul {
    margin: 0 !important;
  }
  li {
    text-align: center;
  }
  h2 {
    width: 80%;
    text-align: center;
  }
}
@media (max-width: 40rem) {
  .resources {
    padding: 0 0.25rem;
  }
  a {
    font-size: 1rem;
  }
}
</style>
