<template>
  <div class="landing-page__intro">
    <div class="background">
      <div class="landing-page__prompt">
        <h1>The Best Journaling App!</h1>
        <p>
          Your private, 100% customizable online journal. Loved by over 2
          million writers around the world.
        </p>
        <base-button link to="/sign-up"
          >Start your free journal now!</base-button
        >
        <h4>
          *Attention! This is a DUMMY App based on the popular
          <a href="https://penzu.com/" class="penzu">Penzu</a>
          app! Get started with Penzu
          <a href="https://penzu.com/" class="penzu">HERE</a>
        </h4>
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
}
.background {
  height: 1000px;
  width: 100%;
  background: url("../../assets/images/landing-page.jpg") center/cover;
  /* background-size: 100% auto; */
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
.landing-page__prompt {
  padding-top: 6rem;
  width: 30%;
}

p {
  font-size: 1.2rem;
}
a {
  width: 90%;
  text-align: center;
  font-size: 1.2rem !important;
}
.penzu {
  text-decoration: none;
  color: red;
}
h4 {
  margin-top: 3rem;
}
</style>
