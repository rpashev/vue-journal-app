<template>
  <div class="landing__promotion">
    <h3>Loved by more than 2,000,000 writers, featured on...</h3>
    <div class="landing__promotion-items">
      <div class="landing__promotion-item">
        <img src="../../assets/images/press1.png" alt="promotion 1" />
      </div>
      <div class="landing__promotion-item">
        <img src="../../assets/images/press2.png" alt="promotion 2"/>
      </div>
      <div class="landing__promotion-item">
        <img src="../../assets/images/press3.png" alt="promotion 3"/>
      </div>
      <div class="landing__promotion-item">
        <img src="../../assets/images/press4.png" alt="promotion 4"/>
      </div>
      <div class="landing__promotion-item">
        <img src="../../assets/images/press5.png" alt="promotion 5"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.landing__promotion {
  /* margin-top: 2rem; */
  width: 100%;
}
.landing__promotion-items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.landing__promotion-item {
  margin: 0.5rem 1rem;
  width: 10rem;
  height: 5rem;
}
img {
  width: 100%;
}
h3 {
  text-align: center;
  color: #8e8e93;
}

@media (max-width: 1024px) {
}
@media (max-width: 40rem) {
}
</style>
