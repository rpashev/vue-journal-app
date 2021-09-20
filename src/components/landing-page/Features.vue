<template>
  <div class="features">
    <div class="features__feature">
      <div class="features__feature-icon icon1"></div>
      <h2>100% Private</h2>
      <p>
        Designed to focus on privacy, your entries are totally private by
        default!
      </p>
    </div>
    <div class="features__feature">
      <div class="features__feature-icon icon2"></div>
      <h2>Available Everywhere</h2>
      <p>
        Enjoy journaling on the move. Available for iOS and Android and totally
        free!
      </p>
    </div>
    <div class="features__feature">
      <div class="features__feature-icon icon3"></div>
      <h2>Never Forget to Write</h2>
      <p>
        Custom email reminders help you make sure you never forget to write.
      </p>
    </div>
    <div class="features__feature">
      <div class="features__feature-icon icon4"></div>
      <h2>Fully Customizable Diary</h2>
      <p>
        Make each journal your own with custom covers, backgrounds, and fonts.
      </p>
      <base-button mode="alternative" link to="/go-pro">Go PRO</base-button>
    </div>
    <div class="features__feature">
      <div class="features__feature-icon icon5"></div>
      <h2>Smart Journal Search</h2>
      <p>Quickly and easily search through your journals, entries, and tags.</p>
      <base-button mode="alternative" link to="/go-pro">Go PRO</base-button>
    </div>
    <div class="features__feature">
      <div class="features__feature-icon icon6"></div>
      <h2>Military Grade Security</h2>
      <p>
        Further protect your diary with military-grade 256-bit AES encryption.
      </p>
      <base-button mode="alternative" link to="/go-pro">Go PRO</base-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.features {
  margin-top: 3rem;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  width: 80%;
}
.features__feature {
  display: flex;
  flex-direction: column;
  width: 28%;
  align-items: center;
  justify-content: center;
  margin: 2rem;
}
p {
  font-size: 1.2rem;
  text-align: center;
}
.icon1 {
  background: url("../../assets/images/icon1.png") center/cover;
  width: 80px;
  height: 80px;
}
.icon2 {
  background: url("../../assets/images/icon2.png") center/cover;
  width: 80px;
  height: 80px;
}
.icon3 {
  background: url("../../assets/images/icon3.png") center/cover;
  width: 80px;
  height: 80px;
}
.icon4 {
  background: url("../../assets/images/icon4.png") center/cover;
  width: 80px;
  height: 80px;
}
.icon5 {
  background: url("../../assets/images/icon5.png") center/cover;
  width: 80px;
  height: 80px;
}
.icon6 {
  background: url("../../assets/images/icon6.png") center/cover;
  width: 80px;
  height: 80px;
}
a {
  margin-top: 0.5rem;
}
</style>
