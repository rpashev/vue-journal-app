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
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #3498db;
  border: 2px solid #3498db;
  color: #F0F0F0;
  cursor: pointer;
  border-radius: 5px;
  display: inline-block;
  transition: background-color 0.3s ease-out;
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
  color: #F0F0F0;
  border: none;
}

.alternative:hover,
.alternative:active {
  background-color: black;
  color: #F0F0F0;
  border: none;
}
.forbidden,
.forbidden:hover {
  cursor: not-allowed;
  background-color: #3498db;
  color: #F0F0F0;
}
.cta {
  background-color: green;
  border: none;

  /* background-color: rgb(116, 173, 29); */
}
.cta:hover {
  border: none;
  color: #F0F0F0;
  background-color: black;
}
.dark {
  background-color: #2f3940;
  border: none;
}
.dark:hover {
  color: #F0F0F0;
  background: black;
  border: none;
}
</style>
