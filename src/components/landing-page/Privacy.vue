<template>
  <div class="landing__privacy">
    <h1>Guaranteed privacy</h1>
    <p>
      Paper journals can be read by anyone if discovered unlike digital ones.
      Your journals are completely safe with us as we encrypt them using the
      most cutting edge technology.
    </p>
    <base-button link to="/sign-up">Get Started</base-button>
  </div>
</template>

<style scoped>
.landing__privacy {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
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
