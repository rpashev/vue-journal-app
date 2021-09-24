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
  /* padding-top: 1rem; */
  width: 30%;
}

p {
  font-size: 1.2rem;
  text-align: center;
}
a {
  width: 100%;
  text-align: center;
  font-size: 1.2rem !important;
}
.penzu {
  text-decoration: none;
  color: red;
}
h4 {
  margin-top: 3rem;
  text-align: center;
}
.logo__container {
  width: 12rem;
  height: 12rem;
  margin: 0 auto;
  position: relative;
  
}
.logo {
  background: url("../../assets/images/logo2.png") center/cover no-repeat;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 2.5rem;
}
</style>
