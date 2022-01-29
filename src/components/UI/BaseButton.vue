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
  padding: 0.75rem 1rem;
  border: none;
  font: inherit;
  background-color: #3b82f6;
  color: #f0f0f0;
  cursor: pointer;
  border-radius: 5px;
  display: inline-block;
  transition: all 0.3s ease-out;
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
