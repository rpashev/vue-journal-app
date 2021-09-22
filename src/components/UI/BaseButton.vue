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
      type: String,
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
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: rgb(250, 250, 250);
  color: #3498db;
}

.alternative {
  background-color: rgb(139, 14, 14);
  color: white;
  border: none;
}

.alternative:hover,
.alternative:active {
  background-color: black;
  color: white;
}
.forbidden, .forbidden:hover {
  cursor: not-allowed;
  background-color: #3498db;
  color: white;
}
</style>
