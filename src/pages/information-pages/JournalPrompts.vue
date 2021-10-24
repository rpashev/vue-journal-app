<template>
  <div class="prompts-page">
    <div class="prompts-page__article">
      <h1>What can you write about?</h1>
      <p>
        With practice, you can develop the ability to find inspiration in
        everything you see. But, when you're just getting into journal writing,
        or when you're really stuck, these suggested journal prompts can be very
        helpful. Here are some examples of journal prompts to help you start a
        journal or to inspire a dedicated journal writer:
      </p>
      <h2>Write about Yourself</h2>
      <ul>
        <li>What frightens you?</li>
        <li>What brings you joy?</li>
        <li>What makes you sad?</li>
        <li>
          What worries you? Is there a pressing problem you need to work out?
        </li>
        <li>
          Write a letter to someone that upset you, but you aren't ready to
          confront in person.
        </li>
        <li>
          Write down the things you wished you had said to your parents, or
          other loved ones before they passed away.
        </li>
        <li>
          Write down confessions of your deep down secrets that you can't tell
          anyone.
        </li>
      </ul>
      <h2>Write about the Past</h2>
      <ul>
        <li>Write a letter to your older self.</li>
        <li>Write about your childhood.</li>
        <li>Write about lost friendships.</li>
        <li>
          Write about your school life, your grades, what you wish you had done
          differently.
        </li>
        <li>
          Write about turning points in your life – what would be different now
          if you had made a different choice.
        </li>
        <li>Write about regrets you may have.</li>
      </ul>

      <h2>Write about the Future</h2>
      <ul>
        <li>Where do you want to be 5, 10, or 15 years from now?</li>
        <li>What line of work do you plan on pursuing in the future?</li>
        <li>Write down how you can improve your life.</li>
        <li>
          Write about children you plan to have, and what you wish for them.
        </li>
        <li>
          Write letters to your future children and grandchildren that you can
          give to them when they are older. These letters will help them
          understand the type of person you were at their age.
        </li>
        <li>Write about places you wish to see, vacations you plan to have.</li>
        <li>Write about home improvements you would like to make.</li>
        <li>Make a bucket list.</li>
      </ul>
      <h2>Write about the Present</h2>
      <ul>
        <li>
          Write letters to friends and family members about things you can't say
          to them in person.
        </li>
        <li>Write letters to your boss or coworkers.</li>
        <li>
          Write about your friends, coworkers and family members, describing
          what they are like, what you like and dislike about each one, etc.
        </li>
        <li>Write about your job, pets, your home, etc.</li>
        <li>
          Write about your daily activities so you can look back and remember
          each moment.
        </li>
        <li>Add photos to your entries to make them more special.</li>
      </ul>
      <p>
        Online journals are private and confidential, so you can write about
        anything you like. Unlike paper journals, you never have to worry about
        your secrets falling into the wrong hands.
      </p>
      <p class="source">
        Source:
        <a href="https://penzu.com/journal-prompts"
          >https://penzu.com/journal-prompts</a
        >
      </p>
    </div>
    <writing-resources class="prompts-page__resources" />
  </div>
</template>

<script>
import WritingResources from "../../components/journal/WritingResources.vue";

export default {
  components: { WritingResources },
};
</script>

<style scoped>
.prompts-page {
  display: flex;
  justify-content: space-around;
  padding: 0 0 2rem 2rem;
}
.prompts-page__article {
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 30rem;
}
.prompts-page__resources {
  width: 25%;
}
ul {
  padding-left: 0;
  width: 85%;
}
li {
  margin-bottom: 1rem;
  color: #59595e;
}
p {
  width: 85%;
}
.source {
  margin-top: 2rem;
  font-size: 0.9rem;
}
a {
  color: black;
  text-decoration: none;
}
</style>
