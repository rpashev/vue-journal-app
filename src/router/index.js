import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/LandingPage.vue";
import Login from "../pages/auth/Login.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
