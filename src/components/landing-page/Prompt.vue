<template>
  <div class="landing__prompt">
    <h1>Limitless options</h1>
    <p>
      You are the full master of your journal - whether you want to keep a dream
      journal, a school journal or just a general one, you are free to create
      unlimited amount of journals on any topic you can think of.
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
  text-transform: uppercase;
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

@media (max-width: 64em) {
  p {
    width: 80%;
  }
}
@media (max-width: 40em) {
}
</style>
