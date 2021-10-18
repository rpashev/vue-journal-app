<template>
  <base-card class="go-pro__card">
    <div class="container">
      <div class="logo"></div>
      <div class="description">
        <p>
          Sign up for My Journal Pro to gain many extras! Customize your
          journals, increase your security, export your journals locally and
          many more additional functionalities!
        </p>
      </div>
      <base-button mode="alternative">Learn More</base-button>
    </div>
  </base-card>
</template>

<style scoped>
.go-pro__card {
  /* width: 20rem; */
}
.container {
  /* height: 20rem; */
  /* width: 80%; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}
.logo {
  width: 100%;
  height: 8rem;
  background: url("../../assets/images/pro.png") center/contain no-repeat;
}
</style>
