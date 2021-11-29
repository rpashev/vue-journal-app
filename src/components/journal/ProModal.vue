<template>
  <teleport to="body">
    <div v-if="show" @click="tryClose" class="backdrop"></div>
    <transition name="dialog">
      <dialog open v-if="show">
        <header>
          <h2>Upgrade to our Pro version!</h2>
        </header>
        <div class="logo"></div>
        <div class="features">
          <ul>
            <li>Customize your journal with different backgrounds</li>
            <li>Encrypt your journals with a secure password</li>
            <li>Export your journals locally in different formats</li>
            <li>Get our Android app for FREE with NO ADs</li>
            <li>Upload images as a part of your journal entries</li>
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

<script>
export default {
  props: ["show"],
  emits: ["close"],

  setup(props, context) {
    function tryClose() {
      context.emit("close");
    }

    return {
      tryClose,
    };
  },
};
</script>

<style scoped>
.logo {
  background: url("../../assets/images/pro.png") center/contain no-repeat;
  height: 10rem;
}
ul {
  text-align: center;
  list-style: none;
  padding-left: 0;
}
ul li {
  margin: 0.5rem 0;
  font-size: 1rem;
}
ul > li:first-of-type {
  margin-top: 0rem;
}
p {
  text-align: center;
  margin-top: 1.5rem;
  font-style: italic;
  font-weight: bold;
  /* color: black; */
}
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
  /* left: 10%; */
  /* margin: 0 auto; */
  margin: 0 auto;
  width: 95%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  overflow: hidden;
  background-color: #f0f0f0;
}

header {
  background-color: rgb(139, 14, 14);
  color: #f0f0f0;
  width: 100%;
  padding: 1rem;
}

header h2 {
  margin: 0;
  color: #f0f0f0;
  text-align: center;
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

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 35rem;
    margin: 0;
  }
  ul li {
    font-size: 1.2rem;
  }
}
</style>
