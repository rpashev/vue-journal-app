<template>
  <div class="final-prompt">
    <h1>Ready to start writing?</h1>
    <base-button link to="/sign-up">GET STARTED</base-button>
  </div>
</template>
<style scoped>
.final-prompt {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #425059;
  width: 100%;
  padding: 4rem;
}
h1 {
  color: #F0F0F0;
  margin-bottom: 4rem;
  text-align: center;
}
a {
  width: 25%;
  text-align: center;
  color: #F0F0F0;
}

@media (max-width: 1024px) {
  a {
    width: 50%;
    text-align: center;
    color: #F0F0F0;
  }
}
@media (max-width: 40rem) {
  a {
    width: 100%;
  }
}
</style>
