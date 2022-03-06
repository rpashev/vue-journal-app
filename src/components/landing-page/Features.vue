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
  gap: 4rem;
  justify-content: center;
  align-items: stretch;
  width: 90%;
}

.features__feature {
  display: flex;
  flex-direction: column;
  flex: 0 0 28%;
  align-items: center;
  padding: 0 0.5rem;
  min-width: 250px;
}

h2 {
  text-align: center;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1rem;
}

.features__feature-icon {
  width: 5rem;
  height: 5rem;
}

.icon1 {
  background: url("https://res.cloudinary.com/rpashev/image/upload/v1643800564/journal-app/icon1_bc6vcp.png")
    center/cover;
}

.icon2 {
  background: url("https://res.cloudinary.com/rpashev/image/upload/v1643800565/journal-app/icon2_kayd0p.png")
    center/cover;
}

.icon3 {
  background: url("https://res.cloudinary.com/rpashev/image/upload/v1643800565/journal-app/icon3_ovn9as.png")
    center/cover;
}

.icon4 {
  background: url("https://res.cloudinary.com/rpashev/image/upload/v1643800565/journal-app/icon4_hxvwrd.png")
    center/cover;
}

.icon5 {
  background: url("https://res.cloudinary.com/rpashev/image/upload/v1643800565/journal-app/icon5_siyvdu.png")
    center/cover;
}

.icon6 {
  background: url("https://res.cloudinary.com/rpashev/image/upload/v1643800565/journal-app/icon6_clxki4.png")
    center/cover;
}

button {
  margin-top: auto;
}

@media (max-width: 40rem) {
  .features {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .features__feature {
    width: 80%;
  }
}
</style>
