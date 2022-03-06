<template>
  <div class="landing__promotion">
    <h3>Loved by more than 2,000,000 writers, featured on...</h3>
    <div class="landing__promotion-items">
      <div class="landing__promotion-item">
        <img
          src="https://res.cloudinary.com/rpashev/image/upload/v1643800566/journal-app/press1_banzuf.png"
          alt="promotion 1"
        />
      </div>
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
  </div>
</template>

<style scoped>
.landing__promotion {
  width: 90%;
}

.landing__promotion-items {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.landing__promotion-item {
  display: flex;
  align-items: flex-start;
  width: 10rem;
  height: 5rem;
}

img {
  width: 100%;
}

h3 {
  margin-bottom: 1.5rem;
  text-align: center;
  color: #8e8e93;
}
</style>
