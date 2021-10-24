<template>
  <div class="definition-page">
    <div class="definition-page__article">
      <h1>What is a journal?</h1>
      <p>
        A journal is a written record of your thoughts, experiences, and
        observations. You can write in your journal daily, or only when you feel
        the urge. You can write with a fountain pen in a leather-bound book if
        that inspires you, or you can write with your lucky pencil on the backs
        of dollar bills if you are both superstitious and rich. It's entirely up
        to you.
      </p>
      <p>
        Our whole lives we are told to write a certain way, to use a number two
        pencil and stay within the lines, to fill up exactly three pages with
        our thoughts on a specific theme, being sure to include topic sentences
        and a conclusion. Journaling is different. With journaling, there are no
        rules, no rights or wrongs. You might decide to share parts of your
        journal, but, fundamentally, your journal is for you. So you're in
        charge. Your journal is a space where you're absolutely free to express
        yourself.
      </p>
      <h3>Next steps:</h3>
      <ul>
        <li>
          <router-link to="/benefits">
            What are the benifts of journaling?</router-link
          >
        </li>
        <li>
          <router-link to="/journal-prompts">
            What do I write about?</router-link
          >
        </li>
        <li>
          <router-link to="/journal-types">
            What types of journals exist?</router-link
          >
        </li>
      </ul>
    </div>
    <writing-resources class="definition-page__resources" />
  </div>
</template>

<script>
import WritingResources from "../../components/journal/WritingResources.vue";
export default {
  components: { WritingResources },
};
</script>
<style scoped>
.definition-page {
  display: flex;
  justify-content: space-around;
  padding: 0 0 2rem 2rem;
}
.definition-page__article {
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 30rem;
}
ul {
  list-style: none;
}
ul a {
  text-decoration: none;
  font: inherit;
  font-size: 1.1rem;
  font-weight: bold;
  color: #59595e;
}
ul a:hover {
  color: rgb(139, 14, 14);
}
p {
  width: 80%;
}
.definition-page__resources {
  width: 25%;
}
</style>
