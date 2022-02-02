<template>
  <div class="definition-page">
    <intro-info
      image="https://res.cloudinary.com/rpashev/image/upload/v1643817968/journal-app/seo-background_jr9i6c_tms19p.webp"
      title="So what is a journal and how is it useful?"
    />
    <div class="definition-page-content">
      <div class="definition-page__article">
        <h1>What is a journal?</h1>
        <p>
          A journal is a written record of your thoughts, experiences, and
          observations. You can write in your journal daily, or only when you
          feel the urge. You can write with a fountain pen in a leather-bound
          book if that inspires you, or you can write with your lucky pencil on
          the backs of dollar bills if you are both superstitious and rich. It's
          entirely up to you.
        </p>
        <p>
          Our whole lives we are told to write a certain way, to use a number
          two pencil and stay within the lines, to fill up exactly three pages
          with our thoughts on a specific theme, being sure to include topic
          sentences and a conclusion. Journaling is different. With journaling,
          there are no rules, no rights or wrongs. You might decide to share
          parts of your journal, but, fundamentally, your journal is for you. So
          you're in charge. Your journal is a space where you're absolutely free
          to express yourself.
        </p>
        <p>
          A journal offers you a private place to write and reflect your
          thoughts. They are not written for others to read but rather yourself.
          You can write a genuine story of your life in a journal. If you feel
          unhappy, you can vent your anger through "brain-dump". For someone who
          is managing depression, a journal can be a good way to keep track of
          your mood. Memorable days such as birthday and holiday trip are also
          worth to write in a journal so that you can look back and relive those
          moments next time!
        </p>
        <h3>Next steps:</h3>
        <ul>
          <li>
            <router-link to="/benefits">
              What are the benefits of journaling?</router-link
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
  </div>
</template>

<script>
import WritingResources from "../../components/journal/WritingResources.vue";
import IntroInfo from "../../components/info-pages-components/IntroInfo.vue";

export default {
  components: { WritingResources, IntroInfo },
};
</script>
<style scoped>
.definition-page-content {
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

@media (max-width: 1024px) {
  .definition-page-content {
    padding-left: 0;
  }
  .definition-page__resources {
    display: none !important;
  }
  .definition-page__article {
    width: 100%;
    padding: 0 1rem;
    min-width: auto;
  }
  h1 {
    text-align: center;
  }
}

@media (max-width: 40rem) {
  p {
    width: 95%;
  }
}
</style>
