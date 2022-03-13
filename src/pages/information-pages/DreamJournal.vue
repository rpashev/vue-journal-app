<template>
  <div class="dream-journal-page">
    <intro-info
      image="https://res.cloudinary.com/rpashev/image/upload/v1643817968/journal-app/dream-journal_ggpe1b_vnv9eh.webp"
      title="Dream journal: why keep a dream journal - tips on starting"
      opacity="0.3"
    />
    <div class="dream-journal-page-content">
      <div class="dream-journal-page__article">
        <h1>Dream Journal</h1>
        <p>
          A dream journal (or dream diary) is a record of experiences that you
          dream about in your sleep. You can start by simply writing down what
          you remember from your dreams. As you go along, you can start to
          analyze what your dreams mean (especially if you keep having the same
          kinds of dreams over and over). A dream journal is a type of
          reflective diary, where you reminisce on important or unusual things
          that happen to you and then meditate on what they might mean.
        </p>
        <h2>Why keep a dream journal?</h2>
        <ol>
          <li>
            <h3>
              It helps you remember what your dreams are about, and improve your
              memory in general!
            </h3>
            <p>
              Dreams are fleeting. In general, the more time that has passed
              since you woke up from a dream, the more difficult it will be to
              remember what that dream was about. Writing down your dreams as
              soon as you wake up will make it easier to remember what they were
              about later. In addition, paying closer attention to what your
              dreams are about will help you remember them more easily in the
              future, with or without writing them down. It's like exercise for
              your brain!
            </p>
          </li>
          <li>
            <h3>
              It helps you better understand your emotions and thoughts,
              including how your dreams affect them.
            </h3>
            <p>
              As part of your psychology, it should come as little surprise that
              dreams can affect how you feel and think. Having a positive dream
              the night before may help you skate through a day with happiness
              and optimism, while waking up from a nightmare may make your next
              day full of sadness and worry. Chronicling your dreams can help
              you understand why you feel the way that you do each day. You may
              even be able to identify triggers for your thoughts and emotions
              that you may not always be consciously aware of.
            </p>
          </li>
          <li>
            <h3>It can help you control your dreams with lucid dreaming.</h3>
            <p>
              One of the most often-mentioned benefits of keeping a dream
              journal is that it can help you advance from merely experiencing
              your dreams to actually controlling them. This is known as "lucid
              dreaming," a state in which you are not only consciously aware
              that you are dreaming, but can also consciously manipulate what
              happens in a dream (at least to some extent). Becoming a lucid
              dreamer can help you learn how to give bad dreams good endings, or
              even learn to avoid having nightmares in the first place.
            </p>
          </li>
          <li>
            <h3>It can help you solve problems creatively.</h3>
            <p>
              A big part of why dreams can be fun is that they aren't always
              constrained by everyday conventions. You can use this to your
              advantage by dreaming about a subject or problem in an unusual
              way, and then writing down the result in a dream diary. It might
              just inspire you to find a new method for creating something or
              solving a problem, one that you wouldn't have normally thought
              about in the waking world. Many writers have used their dreams to
              inspire their stories, and even some mathematicians – including
              Albert Einstein – have relied on dreams to develop their formulas
              and theories in ways nobody thought possible at the time!
            </p>
          </li>
        </ol>
        <h2>5 tips for getting started with writing a dream journal</h2>
        <ol>
          <li>
            <h3>Don't wait, write!</h3>
            <p>
              Keep your dream journal as close to your bed as possible. That
              way, you can quickly start writing in it when you first wake up in
              the morning. As time passes, and even as you start to move around
              after waking up, you start to lose the ability to remember what
              you were dreaming about. So it's important to be able to access
              your dream diary quickly after having a dream.
            </p>
          </li>
          <li>
            <h3>Include as much detail as you can.</h3>
            <p>
              Note everything that you can remember happening in your dream,
              including where you are, who you're with, what time it is, what
              sounds you can hear, what objects and colours you can see, how
              you're feeling emotionally, and any other sensations that you
              experience. This may be hard at first, but it will get easier with
              practice. The more detail that you're able to recall from your
              dreams, the easier it will be to interpret them.
            </p>
          </li>
          <li>
            <h3>If it's easier, draw your dream.</h3>
            <p>
              Some people may find dreams difficult to describe in writing, but
              easier to express through pictures. So if you're one of those
              people, try drawing what you see in your dream instead of trying
              to make sense of it in words. Of course, if you're talented in
              both drawing AND writing, try capturing your dream through both.
              It can lead to some very interesting analyses!
            </p>
          </li>
          <li>
            <h3>Compare your dreams to your waking life.</h3>
            <p>
              As a first step towards interpreting your dreams, try taking your
              journal with you during your daily activities and writing a short
              summary of what happened each day. Then, when you write down what
              your dream was about the next morning, you can look back on the
              previous day's events for clues as to why certain elements may
              have shown up in your dream. Conversely, you can also look at your
              dream to see how it might have influenced what you thought and
              felt for the rest of the day. If you own a smart phone, there's an
              easy way to do this. Just download and install the Penzu app for
              your Google Android devices and Apple iOS device, and you can take
              your diary on Penzu anywhere that you take your phone. Talk about
              convenient!
            </p>
          </li>
          <li>
            <h3>
              Look for patterns in your dreams; they might reveal what you're
              subconsciously thinking about.
            </h3>
            <p>
              Once you get good at recording the details of your dreams, you can
              start to analyze them. Look for elements that are consistent
              across your dreams: are you always in a certain place and/or time?
              Is there a certain person always there with you, or are you always
              alone? Is there a particular plant, animal, or other object that
              always shows up? Are you or anyone else in the dream always
              feeling a certain way? If you keep dreaming of the same things
              over and over, it may point to issues in the waking world that
              you're trying to deal with or perhaps have been reluctant to
              confront.
            </p>
          </li>
        </ol>
        <p class="source">
          Source:
          <a href="https://penzu.com/dream-journal" target="blank"
            >https://penzu.com/dream-journal</a
          >
        </p>
      </div>
      <writing-resources class="dream-journal-page__resources" />
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
.dream-journal-page-content {
  display: flex;
  justify-content: space-around;
  padding: 0 0 2rem 2rem;
  margin-top: 2.5rem;
}
h1 {
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}
.dream-journal-page__article {
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 30rem;
}
.dream-journal-page__resources {
  width: 25%;
}
ol {
  padding-left: 0;
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
li {
  color: #59595e;
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
p {
  width: 85%;
}
p:not(last-of-type) {
  margin-bottom: 1rem;
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
  .dream-journal-page-content {
    padding-left: 0;
  }
  .dream-journal-page__resources {
    display: none !important;
  }
  .dream-journal-page__article {
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
