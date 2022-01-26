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
    <div class="features__feature feature-pro">
      <div class="features__feature-icon icon4"></div>
      <h2>Fully Customizable Diary</h2>
      <p>Customize each journal your with covers, backgrounds, and fonts.</p>
      <base-button @click="toggleShowGoPro" mode="alternative"
        >Go PRO</base-button
      >
    </div>
    <div class="features__feature feature-pro">
      <div class="features__feature-icon icon5"></div>
      <h2>Smart Journal Search</h2>
      <p>Quickly and easily search through your journals, entries, and tags.</p>
      <base-button @click="toggleShowGoPro" mode="alternative"
        >Go PRO</base-button
      >
    </div>
    <div class="features__feature feature-pro">
      <div class="features__feature-icon icon6"></div>
      <h2>Military Grade Security</h2>
      <p>
        Further protect your diary with military-grade 256-bit AES encryption.
      </p>
      <base-button @click="toggleShowGoPro" mode="alternative"
        >Go PRO</base-button
      >
    </div>
    <pro-modal :show="showGoPro" @close="toggleShowGoPro" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import ProModal from "../journal/ProModal.vue";
export default {
  components: { ProModal },
  setup() {
    let showGoPro = ref(false);
    const toggleShowGoPro = () => {
      showGoPro.value = !showGoPro.value;
    };
    return {
      showGoPro,
      toggleShowGoPro,
    };
  },
};
</script>

<style scoped>
.features {
  margin-top: 3rem;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
}
.features__feature {
  display: flex;
  flex-direction: column;
  width: 28%;
  /* height: 300px; */
  align-items: center;
  justify-content: flex-start;
  margin: 2rem;
  padding: 0 0.5rem;
  min-width: 250px;
  flex-shrink: 0;
}

h2 {
  text-align: center;
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

@media (max-width: 1024px) {
  .features {
    /* flex-direction: column; */
    width: 100%;
  }
  .features__feature {
    width: 40%;
  }
}
@media (max-width: 40rem) {
  .features {
    flex-direction: column;
    width: 100%;
  }
  .features__feature {
    width: 95%;
    margin: 2rem 0;
    /* min-width: none; */
  }
}
</style>
