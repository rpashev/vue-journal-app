<template>
  <teleport to="body">
    <div v-if="show" @click="tryClose" class="backdrop"></div>
    <transition name="dialog">
      <dialog open v-if="show">
        <header>
          <h3>Enter a date range</h3>
        </header>
        <div class="dates">
          <div class="entry__date">
            <label for="start-date">Start Date</label
            ><input
              type="date"
              id="start-date"
              name="start-date"
              v-model="startDate"
            />
          </div>
          <div class="entry__date">
            <label for="end-date">End Date</label
            ><input
              type="date"
              id="end-date"
              name="end-date"
              v-model="endDate"
            />
          </div>
        </div>
        <menu>
          <base-button @click="tryClose" mode="alternative">Cancel</base-button>
          <base-button @click="saveDates">Save</base-button>
        </menu>
      </dialog>
    </transition>
  </teleport>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: ["show"],
  emits: ["close", "custom-dates"],

  setup(props, context) {
    const defaultDate = new Date().toISOString().substr(0, 10);
    const startDate = ref(defaultDate);
    const endDate = ref(defaultDate);

    function tryClose() {
      context.emit("close");
      //   console.log(startDate, endDate)
    }

    function saveDates() {
      context.emit("custom-dates", startDate.value, endDate.value);
    }

    return {
      tryClose,
      startDate,
      endDate,
      saveDates,
    };
  },
};
</script>

<style scoped>
.logo {
  background: url("https://res.cloudinary.com/rpashev/image/upload/v1643800563/journal-app/pro1_epbkw1.png")
    center/contain no-repeat;
  height: 10rem;
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
  top: 20vh;
  left: 10%;
  width: 80%;
  min-width: 250px;
  z-index: 100;
  border-radius: 4px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: var(--color-gray-light);
}

header {
  background-color: var(--color-blue);
  color: var(--color-gray-light);
  width: 100%;
  padding: 1rem;
}

header h3 {
  margin: 0;
  color: var(--color-gray-light);
  text-align: center;
}
.dates {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
}
.entry__date {
  width: 80%;
  margin: 1.5rem auto 0 auto;
}
.entry__date input {
  padding: 0.2rem 0.5rem;
  width: 100%;
  font: inherit;
}
.entry__date label {
  display: inline-block;
  width: 100%;
  margin-bottom: 0.25rem;
}
.entry__date input:focus {
  outline: none;
}
menu {
  padding: 1rem;
  display: flex;
  justify-content: center;
  margin: 0;
}
menu button {
  margin: 0 1.5rem;
  width: 6rem;
  min-width: 5rem;
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

@media (min-width: 48em) {
  dialog {
    left: calc(50% - 20rem);
    width: 35rem;
  }
}
</style>
