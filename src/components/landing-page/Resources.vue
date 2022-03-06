<template>
  <div class="resources">
    <h1>Journal writing resources</h1>
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

<style scoped>
.resources {
  display: flex;
  flex-direction: column;
  width: 90%;
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
  margin: 0 2rem 2rem;
  list-style: none;
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
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
  color: #59595e;
}

a:active,
a:hover,
a.router-link-active {
  color: rgb(0, 0, 0);
}

@media (max-width: 1024px) {
  li {
    text-align: center;
  }
  h2 {
    width: 80%;
    text-align: center;
  }
}

@media (max-width: 40rem) {
  .resources__lists {
    flex-direction: column;
  }
}
</style>
