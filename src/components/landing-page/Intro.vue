<template>
  <div class="landing-page__intro">
    <div class="background">
      <div class="landing-page__prompt">
        <div class="logo__container">
          <div class="logo"></div>
        </div>

        <p>
          Your private, 100% customizable online journal. Loved by over 2
          million writers around the world.
        </p>
        <base-button link to="/sign-up"
          >Start your free journal now!</base-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.landing-page__intro {
  width: 100%;
  /* margin-bottom: 0rem; */
}
.background {
  height: 800px;
  width: 100%;
  background: url("../../assets/images/try1.png") top/contain no-repeat;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.landing-page__prompt {
  width: 30%;
}

p {
  margin-top: 2rem;
  font-size: 1.2rem;
  text-align: center;
}
a {
  width: 100%;
  text-align: center;
  font-size: 1.2rem !important;
}

.logo__container {
  width: 12rem;
  height: 12rem;
  margin: 0 auto;
  margin-top: 1rem;
  position: relative;
}
.logo {
  background: url("../../assets/images/logo3.png") center/cover no-repeat;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 3rem;
}

@media (max-width: 1024px) {
  .background {
    background: none;
    height: auto;
    margin-bottom: 2rem;
  }
  .landing-page__prompt {
    width: 60%;
  }
}
@media (max-width: 1024px) {
  .landing-page__prompt {
    width: 50%;
  }
}

@media (max-width: 40rem) {
  .landing-page__prompt {
    width: 90%;
  }
}
</style>
