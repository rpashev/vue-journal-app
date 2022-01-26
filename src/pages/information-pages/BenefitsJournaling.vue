<template>
  <div class="benefits-page">
    <intro-info
      image="https://d3c2plo0qyv3hc.cloudfront.net/images/public/seo-background.jpg"
      title="What are the benefits of writing a journal?"
    />
    <div class="benefits-page-content">
      <div class="benefits-page__article">
        <h1>7 Benefits of journaling</h1>
        <p>
          What do Albert Einstein, Marie Curie, Frida Kahlo, Leonardo da Vinci,
          and Frederick Douglass all have in common? Each of these famous
          figures kept a journal or diary to record their experiences, thoughts,
          or feelings. Kahlo and da Vinci even used illustrations to express
          emotions and sketch out ideas. From scientific geniuses to thoughtful
          artists — and everyone in between — keeping a journal can be a
          beneficial self-care practice. In fact, journaling can help you:
        </p>
        <ol>
          <li>
            <h3>Achieve goals</h3>
            <p>
              When you use your journal to write down your goals, you can keep
              better track of your intentions. This will help you stay
              accountable and serve as a reminder of what you need to do to
              accomplish them. Be sure to get specific.
            </p>
          </li>
          <li>
            <h3>Track progress and growth</h3>
            <p>
              If you make journaling a regular habit, you can see how much
              progress or growth you’ve made by revisiting previous entries.
            </p>
          </li>
          <li>
            <h3>Gain self-confidence</h3>
            <p>
              Seeing your progress can also give you a serious confidence boost.
              You can feel proud looking back at the challenges you faced and
              seeing how far you’ve come.
            </p>
          </li>
          <li>
            <h3>Improve writing and communication skills</h3>
            <p>
              Writing, like anything, improves with practice. When you journal
              every day, you’re practicing the art of writing. And if you use a
              journal to express your thoughts and ideas, it’ll help improve
              your overall communication skills.
            </p>
          </li>
          <li>
            <h3>Reduce stress and anxiety</h3>
            <p>
              Sometimes negative thoughts and emotions can run on a loop in our
              heads. This can be stressful when you’re dealing with a
              challenging situation — it can even make your present situation
              feel worse. But if you stop and put your emotions down on paper,
              it can help you release negative thoughts from your mind. As you
              write, you may even come up with a solution you hadn’t thought of
              before.
            </p>
          </li>
          <li>
            <h3>Find inspiration</h3>
            <p>
              Leonardo da Vinci drew some incredible ideas for inventions in his
              journals. Like him, you can also use your journaling time to
              brainstorm or let your imagination run wild. The inspirations that
              may pop up while you’re writing or sketching may even surprise
              you.
            </p>
          </li>
          <li>
            <h3>Strengthen memory</h3>
            <p>
              The Journal of Experimental Psychology published research that
              shows how writing your thoughts down can reduce intrusive thoughts
              about negative events and improve working memory.* Even the simple
              act of writing something down lets your brain know you want to
              remember it. That’s why note-taking is such an effective practice
              when learning something new.
            </p>
          </li>
        </ol>
      </div>
      <writing-resources class="benefits-page__resources" />
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
.benefits-page-content {
  display: flex;
  justify-content: space-around;
  padding: 0 0 2rem 2rem;
}
.benefits-page__article {
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 30rem;
}
ol {
  padding-left: 0;
  width: 85%;
}
.benefits-page__article > p {
  width: 85%;
}
.benefits-page__resources {
  width: 25%;
}

@media (max-width: 1024px) {
  .benefits-page-content {
    padding-left: 0;
  }
  .benefits-page__resources {
    display: none !important;
  }
  .benefits-page__article {
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
