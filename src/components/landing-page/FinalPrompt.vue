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
  padding: 3.5rem;
}

h1 {
  color: #f0f0f0;
  margin-bottom: 4rem;
  text-align: center;
  text-transform: uppercase;
}

a {
  color: #f0f0f0;
  width: 18rem;
  font-size: 1.2rem !important;
}

@media (max-width: 33em) {
  .final-prompt {
    padding: 2rem;
  }

  h1 {
    font-size: 1.5rem;
  }
}
</style>
