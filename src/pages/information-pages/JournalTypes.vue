<template>
  <div class="types-page">
    <intro-info
      image="https://res.cloudinary.com/rpashev/image/upload/v1643817968/journal-app/seo-background_jr9i6c_tms19p.webp"
      title="What types of journals exist and which one is suitable for you?"
      opacity="0.3"
    />
    <div class="types-page-content">
      <div class="types-page__article">
        <h1>Types of journals</h1>
        <p>
          If you don't think you're a good fit for journaling, think again.
          There are so many kinds of journals that there is bound to be one that
          fits your lifestyle. Keeping a journal is a personal experience that
          varies between individuals. While some may use journaling as a way to
          remember everything that happens on a day-to-day basis, others may
          decide to use a journal like a workbook, or a future handbook or
          guide. Here are some different kinds of journals that many writers
          find fulfilling.
        </p>
        <ul>
          <li>
            <router-link to="/dream-journal"
              ><h3>Dream Journal</h3></router-link
            >
            <p>
              Dream journaling is the practice of recording fragments of your
              dreams each morning while they are still relatively fresh in your
              mind. Good dreams can be just as informative as bad dreams; both
              can be useful instruments for unlocking the creativity that goes
              unnoticed during your waking life.
            </p>
            <span
              ><router-link to="/dream-journal">Read More...</router-link></span
            >
          </li>
          <li>
            <router-link to="/reflective-journal"
              ><h3>Reflective Journal</h3></router-link
            >

            <p>
              A reflective journal is a place to write down your daily
              reflection entries. It can be something good or bad that has
              happened to you that you can self-reflect on and learn from past
              experiences. A reflective journal can help you to identify
              important learning events that had happened in your life.
            </p>
            <span
              ><router-link to="/reflective-journal"
                >Read More...</router-link
              ></span
            >
          </li>
          <li>
            <router-link to="/travel-journal"
              ><h3>Travel Journal</h3></router-link
            >

            <p>
              A travel journal is a place to plan and organize your trips, write
              about your experiences, and add paper mementos from the trip. Use
              it to write about memories large and small, who you met along the
              journey, and what you learned.
            </p>
            <span
              ><router-link to="/travel-journal"
                >Read More...</router-link
              ></span
            >
          </li>
          <li>
            <router-link to="/types"><h3>5 Year Journal</h3></router-link>

            <p>
              A 5-year journal is essentially a journal specifically designed to
              record personal and memorable events, feelings and thoughts within
              a period of 5 years. This journal could be a hardback bound
              notebook, or thanks to technological advances, a digital journal.
            </p>
            <span><router-link to="/types">Read More...</router-link></span>
          </li>
          <li>
            <h3>School Journal</h3>
            <p>
              A school journal can work like an ongoing, in-depth "to-do" list.
              Use it to keep track of assignments, or to write about theories
              and parts of the syllabus that confuse you.
            </p>
          </li>
          <li>
            <h3>Diet Journal</h3>
            <p>
              Keep track of eating habits and physical symptoms when struggling
              with a chronic illness such as diabetes.
            </p>
          </li>
          <li>
            <h3>Project Journal</h3>
            <p>
              When tackling any type of project, be it learning a new recipe or
              writing a song, keeping constant notes is the best way to succeed.
            </p>
          </li>
          <li>
            <h3>One Line a Day Journal</h3>
            <p>
              This is a simple journal, anyone can do. It takes very little time
              or effort but can allow you a small outlet to get out your
              thoughts! Just write down one line a day. Whatever is on your mind
              at that time.
            </p>
          </li>
        </ul>
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
.types-page-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem 6rem;
}
.types-page__article {
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
  gap: 1.75rem;
  list-style: none;
}
li {
  color: var(--color-gray-dark);
}
.types-page__article > p {
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

a,
a h3:hover {
  text-decoration: none;
  color: var(--color-red);
  font-weight: bold;
}

span a,
p a {
  font-size: 0.9rem;
  text-align: left;
  transition: all 0.2s ease-out;
  display: block;
}
span a {
  margin-top: -0.5rem;
}

span a:hover {
  transform: translateX(3px);
  /* color: var(--color-error); */
}

@media (max-width: 75em) {
  .types-page-content {
    padding: 2rem 1.5rem;
  }
}

@media (max-width: 56.25em) {
  .types-page-content {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 2rem 1rem;
  }
}
</style>
