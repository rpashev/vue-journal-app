<template>
  <teleport to="body">
    <div v-if="show" @click="tryClose" class="backdrop"></div>
    <transition name="dialog">
      <dialog open v-if="show">
        <header>
          <h3>Upgrade to our PRO version!</h3>
        </header>
        <div class="logo"></div>
        <div class="features">
          <ul>
            <li>Customize with different backgrounds</li>
            <li>Encrypt journals with a secure password</li>
            <li>Export journals locally in different formats</li>
            <li>Get our Android app for FREE</li>
            <li>Images in your journal entries</li>
          </ul>
        </div>
        <p>Coming soon!</p>
        <menu>
          <base-button @click="tryClose" mode="alternative">Cancel</base-button>
        </menu>
      </dialog>
    </transition>
  </teleport>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps(["show"]);

const emit = defineEmits(["close"]);

function tryClose() {
  emit("close");
}
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 15vh;
  margin: 0 auto;
  z-index: 100;
  border-radius: 4px;
  border: none;
  overflow: hidden;
  background-color: var(--color-gray-light);
}

.features {
  padding: 0 1.5rem;
}

header {
  background-color: var(--color-red);
  color: var(--color-gray-light);
  padding: 1rem;
}

header h3 {
  color: var(--color-gray-light);
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 1px;
}

.logo {
  background: url("https://res.cloudinary.com/rpashev/image/upload/v1643800563/journal-app/pro1_epbkw1.png")
    center/contain no-repeat;
  height: 5rem;
  margin: 1.5rem 0;
}
ul {
  text-align: center;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

p {
  text-align: center;
  margin-top: 1.5rem;
  text-transform: uppercase;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: center;
  margin: 0;
}
menu button {
  margin: 0 1.5rem;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.dialog-enter-active {
  transition: all 0.3s ease-out;
}

.dialog-leave-active {
  transition: all 0.3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}

@media (max-width: 64em) {
  dialog {
    top: 5vh;
  }
}

@media (max-width: 40em) {
  dialog {
    width: 90%;
  }
  li {
    font-size: 0.8rem;
  }
}
</style>
