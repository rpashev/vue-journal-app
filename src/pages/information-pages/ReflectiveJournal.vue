<template>
  <div class="reflective-journal-page">
    <div class="reflective-journal-page__article">
      <h1>Reflective Journal</h1>
      <p>
        A reflective journal (aka a reflective diary) is the perfect place to
        jot down some of life's biggest thoughts. In a reflective journal, you
        can write about a positive or negative event that you experienced, what
        it means or meant to you, and what you may have learned from that
        experience.
      </p>
      <h2>5 Reasons To Write a Reflective Journal</h2>
      <p>
        Here are some of the most common reasons why people find reflective
        journals so useful:
      </p>
      <ol>
        <li>
          To make sense of things that happened. What you write should sound as
          if you are describing the details to someone who wasn't there. Be as
          descriptive as possible. Just the act of writing down the details of
          what happened may give you perspective that you may not have otherwise
          considered had you just continued to think about it.
        </li>
        <li>
          To speculate as to why something is the way it is. Your views can come
          from your own common sense, or from something you have heard at a
          lecture or read in a book. Either way, speculating why something is
          the way it is can be a very useful exercise in reasoning.
        </li>
        <li>
          To align future actions with your reflected values and experiences.
          After positing your interpretation, continue to observe the subject of
          your speculation to decide whether you want to stick to your original
          views, or make changes. That is one of the great things about an
          online journal--you can make changes to your entries at any time.
        </li>
        <li>
          To get thoughts and ideas out of your head. Writing down your thoughts
          can help relieve pressure or help resolve problems. It will also help
          you focus the task at hand.
        </li>
        <li>
          To share your thoughts and ideas with others. Getting opinions from
          others about what you wrote can help you clarify your feelings for a
          deeper understanding of yourself.
        </li>
      </ol>
      <h2>Topic Examples</h2>
      <p>
        To create a reflective journal that really provides detail on your
        overall perspective on a variety of different situations, consider using
        one of the prompts below to help with your thought process.
      </p>
      <ul>
        <li>
          Write about which relationships have the most meaning to you and why.
          Include ways you can grow to help maintain these close relationships
          and get rid of the toxic relationships currently in your life.
        </li>
        <li>Write about what you are learning at school or in college.</li>
        <li>
          Write about someone in your life who has experienced a positive change
          and how you can learn from their situation.
        </li>
        <li>
          Write about what you want out of the next five years of your life and
          what you can do to achieve these goals.
        </li>
      </ul>
      <p class="source">
        Source:
        <a href="https://penzu.com/how-to-write-a-reflective-journal"
          >https://penzu.com/how-to-write-a-reflective-journal</a
        >
      </p>
    </div>
    <writing-resources class="reflective-journal-page__resources" />
  </div>
</template>

<script>
import WritingResources from "../../components/journal/WritingResources.vue";
export default {
  components: { WritingResources },
};
</script>

<style scoped>
.reflective-journal-page {
  display: flex;
  justify-content: space-around;
  padding: 0 0 2rem 2rem;
}
.reflective-journal-page__article {
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 30rem;
}
.reflective-journal-page__resources {
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
.source {
  margin-top: 2rem;
  font-size: 0.9rem;
}
a {
  color: black;
  text-decoration: none;
}
</style>
