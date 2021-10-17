<template>
  <div class="resources">
    <h1>Journal Writing Resources</h1>
    <div class="resources__lists">
      <ul class="basics">
        <h2>Journal Basics</h2>
        <li>
          <router-link to="/sign-up">What is a Journal?</router-link>
        </li>
        <li>
          <router-link to="/sign-up">What is a Journal Entry?</router-link>
        </li>
        <li>
          <router-link to="/sign-up">Benefits of Journaling</router-link>
        </li>
        <li>
          <router-link to="/sign-up">Journal Prompts</router-link>
        </li>
      </ul>
      <ul class="types">
        <h2>Types of Journals</h2>
        <li>
          <router-link to="/sign-up">Reflective Journal</router-link>
        </li>
        <li>
          <router-link to="/sign-up">Dream Journal</router-link>
        </li>
        <li>
          <router-link to="/sign-up">Travel Journal</router-link>
        </li>
        <li>
          <router-link to="/sign-up">5 Year Journal</router-link>
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
}
h1 {
  text-align: center;
}
ul {
  list-style: none;
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
</style>
