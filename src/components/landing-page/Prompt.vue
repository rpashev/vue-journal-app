<template>
  <div class="landing__prompt">
    <h1>What do you want to write about?</h1>
    <p>
      Whether you’re looking for a tool to record your daily emotions and
      activities in a reflective journal, keep track of milestones in a food
      journal, or even record your dreams in a dream
      journal, we've got you covered. We give you all the tools you need to
      focus on the ideas you want to preserve, rather than the process of
      writing itself. 
      <!-- <br><br> Check out the writing resources below to learn more about journaling and inspire yourself! -->
    </p>
    <base-button link to="/sign-up">Get Started</base-button>
  </div>
</template>

<style scoped>
.landing__prompt {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
}

p {
  width: 50%;
  text-align: center;
  font-size: 1.1rem;
}

a {
  margin-top: 1.5rem;
  text-align: center;
  width: 12rem;
  font-size: 1.2rem !important;
}

@media (max-width: 1024px) {
  p {
    width: 80%;
  }
}
@media (max-width: 40rem) {
}
</style>
