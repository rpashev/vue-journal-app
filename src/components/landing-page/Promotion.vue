<template>
  <section class="landing__promotion">
    <div class="heading">
      <h3>Featured on</h3>
    </div>
    <div class="landing__promotion-items">
      <div class="landing__promotion-item">
        <img
          src="https://res.cloudinary.com/rpashev/image/upload/v1643800566/journal-app/press2_s00hcv.png"
          alt="promotion 2"
        />
      </div>
      <div class="landing__promotion-item">
        <img
          src="https://res.cloudinary.com/rpashev/image/upload/v1643800564/journal-app/press3_kppbvt.png"
          alt="promotion 3"
        />
      </div>
      <div class="landing__promotion-item">
        <img
          src="https://res.cloudinary.com/rpashev/image/upload/v1643800563/journal-app/press4_tlv1if.png"
          alt="promotion 4"
        />
      </div>
      <div class="landing__promotion-item">
        <img
          src="https://res.cloudinary.com/rpashev/image/upload/v1643800563/journal-app/press5_lonjmc.png"
          alt="promotion 5"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.landing__promotion {
  width: 90%;
  margin-top: -5rem;
  max-width: 70rem;
}

.heading {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1rem;
  color: #8e8e93;
  margin-bottom: 1.5rem;
}

.heading::before,
.heading::after {
  content: "";
  height: 2px;
  width: 100%;
  background-color: #8e8e93;
  opacity: 0.25;
}

.landing__promotion-items {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 4rem;
  align-content: center;
}

.landing__promotion-item {
  display: flex;
  align-items: flex-start;
  height: 3rem;
}

img {
  height: 100%;
}
</style>
