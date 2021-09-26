import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../pages/LandingPage.vue";
import Login from "../pages/auth/Login.vue";
import SignUp from "../pages/auth/SignUp.vue";
import GoPro from "../pages/GoPro.vue";
import HomeUser from "../pages/user-pages/HomeUser.vue";
import UserProfile from "../pages/user-pages/UserProfile.vue";
import NewEntry from "../pages/user-pages/journal/NewEntry.vue";
import SingleJournal from "../pages/user-pages/journal/SingleJournal.vue";
import SingleEntry from "../pages/user-pages/journal/SingleEntry.vue";
import EditEntry from "../pages/user-pages/journal/EditEntry.vue"

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
    path: "/journals/:journalName/new-entry",
    name: "NewEntry",
    component: NewEntry,
  },

  {
    path: "/journals/:journalID/",
    name: "SingleJournal",
    component: SingleJournal,
  },
  {
    path: "/journals/:journalID/:entryID",
    name: SingleEntry,
    component: SingleEntry,
  },
  {
    path: "/journals/:journalID/:entryID/edit",
    name: EditEntry,
    component: EditEntry,
  },
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
