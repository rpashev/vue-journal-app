<template>
  <div class="five-year-journal-page">
    <intro-info
      image="https://res.cloudinary.com/rpashev/image/upload/v1643818248/journal-app/five-year_gfy3g1_q7yfqc.webp"
      title="Five year journal - set your goals for the next five years. Rediscover your purpose!"
      opacity="0.7"
    />
    <div class="five-year-journal-page-content">
      <div class="five-year-journal-page__article">
        <h1>5 Year Journal</h1>
        <p>
          Much more than a simple list of what you do every day, a journal can
          help you remember the people and events that matter to you. Journals
          can be extremely useful to help you understand who you are, where
          you're going and how to get there.
        </p>
        <p>A good 5-year journal helps you:</p>
        <ul>
          <li>
            <strong>Capture the things that matter to you.</strong> A good
            journal captures both the important images of your life now and the
            things that you want later in your journey.
          </li>
          <li>
            <strong
              >Keep a running photographic record of yourself and the people you
              care about.</strong
            >
            Have you seen those websites that show a person as they grow over
            the years to become someone new? Why not do that for yourself? Penzu
            makes that easy.
          </li>
          <li>
            <strong>Understand your goals.</strong> Isn't the point of a great
            journal to see where you've come from and where you're going?
          </li>
        </ul>
        <h2>Start by using some of these 5-year journal writing ideas:</h2>
        <ol>
          <li>
            What do you really need to become a happier person and make life
            easier for yourself?
          </li>
          <li>What good habits would you like to start?</li>
          <li>
            How can you improve your financial security in the next five years?
          </li>
          <li>Which new, fun activities would you love to do at least once?</li>
          <li>
            Would you like to start or prepare for a family? Do you want to
            spend more time with your extended family?
          </li>
          <li>
            What is the most important priority in your life now, and would you
            like that to change?
          </li>
          <li>How can you improve your health?</li>
          <li>Is there any new skill you've always wanted to learn?</li>
          <li>Would you like to move somewhere else in the next five years?</li>
          <li>
            Can you break these goals down into focusing on one per year for the
            next five years?
          </li>
        </ol>
        <p class="source">
          Source:
          <a href="https://penzu.com/five-year-journal" target="blank"
            >https://penzu.com/five-year-journal</a
          >
        </p>
      </div>
      <Resources :info="true" />
    </div>
  </div>
</template>

<script>
import Resources from "../../components/landing-page/Resources.vue";
import IntroInfo from "../../components/info-pages-components/IntroInfo.vue";

export default {
  components: { Resources, IntroInfo },
};
</script>

<style scoped>
.five-year-journal-page-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 6rem;
}
.five-year-journal-page__article {
  max-width: 45rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* min-width: 30rem; */
}

ol,
ul {
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
li {
  color: var(--color-gray-dark);
}
.five-year-journal-page__article > p {
  width: 85%;
}

p {
  max-width: 40rem;
}

p:not(last-of-type) {
  margin-bottom: 1rem;
}
h2 {
  align-self: left;
  width: 85%;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
h3 {
  margin-bottom: 0.25rem;
}

.source {
  margin-top: 2rem;
  font-size: 0.9rem;
}
.source a {
  color: black;
  text-decoration: none;
  transition: all 0.3s ease-out;
}
.source a:hover {
  color: var(--color-red);
}

@media (max-width: 75em) {
  .five-year-journal-page-content {
    padding: 2rem 1.5rem;
  }
}

@media (max-width: 56.25em) {
  .five-year-journal-page-content {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem 1rem;
  }
}
</style>
