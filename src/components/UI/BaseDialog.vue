<template>
  <teleport to="body">
    <div v-if="show" @click="tryClose" class="backdrop"></div>
    <transition name="dialog">
      <dialog open v-if="show">
        <header>
          <slot name="header">
            <h3>{{ title }}</h3>
          </slot>
        </header>
        <section>
          <slot></slot>
        </section>
        <menu v-if="!fixed">
          <slot name="actions">
            <base-button mode="dark" @click="tryClose">Cancel</base-button>

            <base-button @click="confirmDelete" mode="alternative"
              >Delete</base-button
            >
          </slot>
        </menu>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: ["show", "title", "fixed"],
  emits: ["remove", "close"],

  setup(props, context) {
    function tryClose() {
      if (props.fixed) {
        return;
      }
      console.log("from tryCLose");
      context.emit("close");
    }

    function confirmDelete() {
      context.emit("remove");
    }

    return {
      tryClose,
      confirmDelete,
    };
  },
};
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
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 4px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  overflow: hidden;
  background-color: #f0f0f0;
}

header {
  background-color: rgb(139, 14, 14);
  color: #f0f0f0;
  width: 100%;
  padding: 1rem;
}

header h3 {
  margin: 0;
  color: #f0f0f0;
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 1.5rem;
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
    width: 40rem;
  }
}
</style>
