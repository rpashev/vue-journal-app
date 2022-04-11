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
  background-color: var(--color-blue);
  color: var(--color-gray-light);
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
  background-color: var(--color-blue-light);
}

.alternative {
  background-color: var(--color-red);
  color: var(--color-gray-light);
  border: none;
}

.alternative:hover,
.alternative:active {
  background-color: var(--color-error);
  color: var(--color-gray-light);
  border: none;
}
.flat {
  background-color: transparent;
  color: var(--color-gray-dark);
  font-weight: 500;
}
.flat:hover,
.flat:active {
  background-color: var(--color-red-light);
}

.forbidden,
.forbidden:hover {
  cursor: not-allowed;
  background-color: var(--color-gray-medium);
  border: none;
  color: var(--color-gray-light);
}

.dark {
  background-color: var(--color-gray-darker);
  border: none;
}
.dark:hover {
  color: var(--color-gray-light);
  background: black;
  border: none;
}

.light {
  background: var(--color-gray-lightest);
  color: var(--color-gray-darker);
}
.light:hover,
.light:active {
  background: var(--color-blue-lightest);
}
</style>
