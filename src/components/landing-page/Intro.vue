<template>
  <div class="landing-page">
    <div class="background">
      <div class="landing-page__prompt">
        <h1>The Best Journaling App!</h1>
        <p>
          Your private, 100% customizable online journal. Loved by over 2
          million writers around the world.
        </p>
        <base-button link to="/sign-up">Start your free journal now!</base-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.background {
  height: 1000px;
  width: 100%;
  background: url("../../assets/images/landing-page.jpg") no-repeat;
  background-size: 100% auto;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  
}
.landing-page__prompt {
  padding-top: 8rem;
  width: 30%;
}
h1,
p {
  color: #59595e;
}
p {
  font-size: 1.2rem;
}
a {
  width: 90%;
  text-align: center;
  font-size: 1.2rem !important;
}

</style>
