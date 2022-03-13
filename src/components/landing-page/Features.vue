<template>
  <div class="features">
    <div class="features__feature">
      <div class="features__feature-icon icon1"></div>
      <h2>Full Privacy</h2>
      <p>
        All your entries are private by default and can be accessed only by you.
      </p>
    </div>
    <div class="features__feature">
      <div class="features__feature-icon icon2"></div>
      <h2>Write From Anywhere</h2>
      <p>
        Write from your phone, tablet or desktop - all devices are supported.
      </p>
    </div>
    <div class="features__feature">
      <div class="features__feature-icon icon3"></div>
      <h2>Reminders To Write</h2>
      <p>You can set up custom emails to remind you to write an entry.</p>
    </div>
    <div class="features__feature feature-pro">
      <div class="features__feature-icon icon4"></div>
      <h2>Full Customization</h2>
      <p>You can customize your journals in all ways imaginable.</p>
      <base-button @click="toggleShowGoPro" mode="alternative"
        >Go PRO</base-button
      >
    </div>
    <div class="features__feature feature-pro">
      <div class="features__feature-icon icon5"></div>
      <h2>Journal Search</h2>
      <p>You can easily search through journals and all of your entries.</p>
      <base-button @click="toggleShowGoPro" mode="alternative"
        >Go PRO</base-button
      >
    </div>
    <div class="features__feature feature-pro">
      <div class="features__feature-icon icon6"></div>
      <h2>Top Notch Security</h2>
      <p>You can additionally protect your journals with a password.</p>
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
  display: flex;
  flex-flow: wrap;
  gap: 3rem;
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
  margin: 0.5rem 0;
}

p {
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 1rem;
  width: 90%;
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
