<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      required: false,
      default: "/",
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  text-align: center;
  padding: 0.5rem 1.25rem;
  border: none;
  font: inherit;
  letter-spacing: 1px;
  font-size: 0.9rem;
  background-color: #3b82f6;
  color: #e9e7e7e0;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease-out;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #1d4ed8;
}

.alternative {
  background-color: rgb(139, 14, 14);
  color: #f0f0f0;
  border: none;
}

.alternative:hover,
.alternative:active {
  background-color: black;
  color: #f0f0f0;
  border: none;
}
.forbidden,
.forbidden:hover {
  cursor: not-allowed;
  background-color: #3b82f6;
  border: none;
  color: #f0f0f0;
}

.dark {
  background-color: #2f3940;
  border: none;
}
.dark:hover {
  color: #f0f0f0;
  background: black;
  border: none;
}
</style>
