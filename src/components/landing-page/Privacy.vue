<template>
  <div class="landing__privacy">
    <h1>Privacy is our #1 Concern!</h1>
    <p>
      Even when carefully kept, paper journals can be read by anyone who happens
      upon them. We keep your journals safe with strong password protection and
      military strength encryption so you can rest easy knowing that your
      entries are secure with us.
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
