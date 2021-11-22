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

<script>
export default {};
</script>

<style scoped>
.landing__privacy {
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  text-align: center;
}
p {
  width: 50%;
  font-size: 1.2rem;
  text-align: center;
}
a {
  margin-top: 1.5rem;
}

@media (max-width: 1024px) {
  p {
    width: 80%;
  }
}
@media (max-width: 40rem) {
}
</style>
