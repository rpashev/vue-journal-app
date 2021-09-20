<template>
  <div class="landing__prompt">
    <h1>What do you want to write about?</h1>
    <p>
      Whether you’re looking for a tool to record your daily emotions and
      activities in a reflective journal, keep track of milestones in a food
      journal or pregnancy journal, or even record your dreams in a dream
      journal, we've got you covered. We give you all the tools you need to
      focus on the ideas you want to preserve, rather than the process of
      writing itself. You have the full freedom to choose a topic for your
      journal!
      <!-- <br><br> Check out the writing resources below to learn more about journaling and inspire yourself! -->
    </p>
    <base-button link to="/sign-up">Get Started</base-button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.landing__prompt {
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
p {
  width: 50%;
  font-size: 1.2rem;
  text-align: center;
}
a {
  margin-top: 1.5rem;
}
</style>
