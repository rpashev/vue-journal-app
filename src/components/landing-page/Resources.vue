<template>
  <div class="resources">
    <h1>Journal Writing Resources</h1>
    <div class="resources__lists">
      <ul class="basics">
        <h4>Journal Basics</h4>
        <li><router-link>What is a Journal?</router-link></li>
        <li><router-link>What is a Journal Entry?</router-link></li>
        <li><router-link>Benefits of Journaling</router-link></li>
        <li><router-link>Journal Prompts</router-link></li>
      </ul>
      <ul class="types">
        <h4>Types of Journals</h4>
        <li><router-link>Reflective Journal</router-link></li>
        <li><router-link>Dream Journal</router-link></li>
        <li><router-link>Travel Journal</router-link></li>
        <li><router-link>5 Year Journal</router-link></li>
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
}
.resources__lists {
  display: flex;
  flex-direction: row;
}
</style>
