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
  width: 100%;
  background-image: url("https://res.cloudinary.com/rpashev/image/upload/v1643817968/journal-app/background_uuw9pl_lqwiom.webp");
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  background-size: 110% auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 50%;
  justify-content: flex-start;
  position: relative;
}

.landing-page__prompt {
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0rem;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}

p {
  font-size: 1.2rem;
  text-align: center;
  width: 80%;
  max-width: 500px;
  margin: 2rem auto;
  margin-top: -2rem;
  margin-bottom: 0.75rem;
}

a {
  font-size: 1.2rem !important;
  padding: 0.75rem 1.75rem !important;
}

.logo__container {
  width: 12rem;
  height: 12rem;
  margin: 0 auto;
  position: relative;
}

.logo {
  background: url("https://res.cloudinary.com/rpashev/image/upload/v1643800565/journal-app/logo3_dkivyb.png")
    center/cover no-repeat;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  position: absolute;
  /* top: 4.5rem; */
}

@media (max-width: 74em) {
  .background {
    background: none;
    height: auto;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }

  .landing-page__prompt {
    width: 60%;
    margin-top: 0;
    position: static;
    transform: none;
  }
  .logo__container {
    margin-top: 0;
  }
  .logo {
    top: 1rem;
  }
  p {
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
