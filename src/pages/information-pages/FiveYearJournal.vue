<template>
  <div class="five-year-journal-page">
    <intro-info
      image="https://www.newzealand.com/assets/Campaigns/Ignite/SMALL-Job1970_TNZ_Stop_Dreaming_Aus_North_Island_Sky_Final_HR__aWxvdmVrZWxseQo_FocalPointCropWzQyMCw5NjAsNTAsNTAsNzUsImpwZyIsNjUsMi41XQ.jpg"
      title="Want to find out what your dreams mean? Try writing them up!"
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
      <writing-resources class="five-year-journal-page__resources" />
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
.five-year-journal-page-content {
  display: flex;
  justify-content: space-around;
  padding: 0 0 2rem 2rem;
}
.five-year-journal-page__article {
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 30rem;
}
.five-year-journal-page__resources {
  width: 25%;
}
ol,
ul {
  padding-left: 0;
  width: 85%;
}
li {
  margin-bottom: 1.5rem;
  color: #59595e;
}
p {
  width: 85%;
}
h2 {
  align-self: left;
  width: 85%;
  margin-top: 2rem;
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
  color: rgb(139, 14, 14);
}

@media (max-width: 1024px) {
  .five-year-journal-page-content {
    padding-left: 0;
  }
  .five-year-journal-page__resources {
    display: none !important;
  }
  .five-year-journal-page__article {
    width: 100%;
    padding: 0 1rem;
    min-width: auto;
  }
  h1 {
    text-align: center;
  }
}
</style>
