import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../pages/LandingPage.vue";
import Login from "../pages/auth/Login.vue";
import SignUp from "../pages/auth/SignUp.vue";
import GoPro from "../pages/GoPro.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: LandingPage
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/go-pro",
    name: "GoPro",
    component: GoPro
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
