<template>
  <section class="landing-page__intro">
    <div class="background">
      <div class="landing-page__prompt">
        <div class="logo__container">
          <div class="logo"></div>
        </div>
        <p>
          Your secure, fully customizable digital journal. Loved by over 20 billion writers around
          the world.
        </p>
        <base-button link to="/sign-up">Start your free journal</base-button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.landing-page__intro {
  width: 100%;
}

.background {
  height: 800px;
  width: 100%;
  background: url("https://res.cloudinary.com/rpashev/image/upload/v1643817968/journal-app/background_uuw9pl_lqwiom.webp")
    top/cover no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.landing-page__prompt {
  width: 35%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  font-size: 1.2rem;
  text-align: center;
  width: 80%;
  margin: 2rem auto;
}

a {
  font-size: 1.2rem !important;
  padding: 0.75rem 1.75rem !important;
}

.logo__container {
  width: 12rem;
  height: 12rem;
  margin: 0 auto;
  margin-top: 1rem;
  position: relative;
}

.logo {
  background: url("https://res.cloudinary.com/rpashev/image/upload/v1643800565/journal-app/logo3_dkivyb.png")
    center/cover no-repeat;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 3rem;
}

@media (max-width: 64em) {
  .background {
    background: none;
    height: auto;
    margin-bottom: 2rem;
  }

  .landing-page__prompt {
    width: 60%;
    margin-top: 0;
  }
  .logo__container {
    margin-top: 0;
  }
}

@media (max-width: 40em) {
  .landing-page__prompt {
    width: 90%;
  }

  a {
    font-size: 0.95rem !important;
    padding: 0.75rem 1.25rem !important;
  }
}
</style>
