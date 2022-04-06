<template>
  <div class="travel-journal-page">
    <intro-info
      image="https://res.cloudinary.com/rpashev/image/upload/v1643817968/journal-app/travel_p9zxai_txmzww.webp"
      title="Travel journal: record your travel experiences to get the most from your travels."
      opacity="0.45"
    />
    <div class="travel-journal-page-content">
      <div class="travel-journal-page__article">
        <h1>Travel Journal</h1>
        <p>
          Travel journals are a place where you can write about trips you have
          taken, what you learned during and the experiences you had. It is a
          collection of adventures, stories, memories and discovery. It doesn’t
          matter where you're going or who you’re traveling with, an online trip
          journal can come anywhere.
        </p>
        <h2>10 Travel Journal Ideas To Inspire You</h2>
        <p>
          The blank pages of your travel journal may not be serving as great
          inspiration, but your new trip should! Here are 10 travel journal
          ideas to get those creative juices flowing, kick-start your writing
          and help you get the most out of your travels.
        </p>
        <ol>
          <li>
            <h3>Why are you going?</h3>
            <p>
              Not every trip needs an explanation and not every vacation needs a
              justification. People travel for all sorts of different reasons or
              for no reason at all, but if your travel has purpose, write about
              it. Even if you’re traveling for the sake of it, that is a reason
              worth talking about too.
            </p>
          </li>
          <li>
            <h3>Write about your expectations.</h3>
            <p>
              As we mentioned above, expectations can wildly differ from
              reality, especially when going somewhere you’ve never been or
              going with someone you have never travelled with before. Jot down
              what you think the trip will be like, or hope it will be like.
            </p>
          </li>
          <li>
            <h3>What are you going to do?</h3>
            <p>
              Write about the things you want to do, the sights you want to see,
              the music you want to dance to, the food you want to taste.
              Writing it all down will get you excited and help you not to
              forget.
            </p>
          </li>
          <li>
            <h3>Write about the people.</h3>
            <p>
              Did you meet anyone new? Did you make a new friend? Were the
              locals welcoming? Did you learn something new from a stranger? Did
              you learn something new from a friend? People can really make a
              trip. Whether you came with them, or met them there, write about
              how the people you encountered affected your experience.
            </p>
          </li>
          <li>
            <h3>Write about the food.</h3>
            <p>
              Just because you call it your travel diary, doesn’t mean it can’t
              double as a food diary. If there are any foods you loved, dishes
              you hated or recipes you can’t live without, write them down to
              remember them all. Maybe some new fare you tried will influence
              your tastes when you return home.
            </p>
          </li>
          <li>
            <h3>The ups and the downs.</h3>
            <p>
              What did you like most about the trip? What did you like the
              least?
            </p>
          </li>
          <li>
            <h3>Write about yourself.</h3>
            <p>
              Reflect on the new experiences you had, what made you
              uncomfortable and what enticed you. Did you learn anything new
              about yourself on the trip? Did being somewhere else expose
              something you hadn’t seen in yourself before? Traveling can help
              people grow. Think about your journey and if it helped you grow in
              any way.
            </p>
          </li>
          <li>
            <h3>Write a travel guide.</h3>
            <p>
              If you knew friends were going to the same place, what would you
              tell them to do? Write down your recommendations and the stuff
              that should not be missed.
            </p>
          </li>
          <li>
            <h3>What would you have changed?</h3>
            <p>
              Is there anything about the trip you would have changed? Is there
              anything else you wish you did? Anything you wish you didn’t do?
              Write about your travels and how you can improve them for the next
              time you go away.
            </p>
          </li>
          <li>
            <h3>Where do you want to go next?</h3>
            <p>
              We all have a wish-list of places we want to go. Write yours down
              and try to start checking them off.
            </p>
          </li>
        </ol>
        <p class="source">
          Source:
          <a href="https://penzu.com/travel-journal-guide" target="blank"
            >https://penzu.com/travel-journal-guide</a
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
.travel-journal-page-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 6rem;
}
.travel-journal-page__article {
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
  color: #59595e;
}
.travel-journal-page__article > p {
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
  color: rgb(139, 14, 14);
}

@media (max-width: 75em) {
  .travel-journal-page-content {
    padding: 2rem 1.5rem;
  }
}

@media (max-width: 56.25em) {
  .travel-journal-page-content {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem 1rem;
  }
}
</style>
