<template>
  <base-card class="resources_card"
    ><div class="resources">
      <h3>Need writing ideas? We've got you covered!</h3>
      <div class="resources__lists">
        <ul class="basics">
          <h4>Journal Basics</h4>
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
          <h4>Types of Journals</h4>
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
    </div></base-card
  >
</template>

<script>
export default {};
</script>

<style scoped>
.resources_card {
  background: #ECFDF5;
}
.resources {
  display: flex;
  flex-direction: column;
  margin-top: rem;
  width: 100%;
  color: #111827;
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
h3 {
  text-align: center;
  color: #111827;

}
ul {
  list-style: none;
}
a {
  font: inherit;
  margin: 0;
  text-decoration: none;
  font-size: 0.9rem;
  color: #111827;

}
a:active,
a:hover,
a.router-link-active {
  color: rgb(139, 14, 14);
}
</style>
