import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../pages/LandingPage.vue";
import Login from "../pages/auth/Login.vue";
import SignUp from "../pages/auth/SignUp.vue";
import GoPro from "../pages/GoPro.vue";
import HomeUser from "../pages/user-pages/HomeUser.vue";
import UserProfile from "../pages/user-pages/UserProfile.vue";
import NewEntry from "../pages/user-pages/journal/NewEntry.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: LandingPage,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/go-pro",
    name: "GoPro",
    component: GoPro,
  },
  {
    path: "/journals",
    name: "HomeUser",
    component: HomeUser,
  },
  {
    path: "/user-profile",
    name: "UserProfile",
    component: UserProfile,
  },
  {
    path: "/new-entry",
    name: "NewEntry",
    component: NewEntry
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  },
});

export default router;
