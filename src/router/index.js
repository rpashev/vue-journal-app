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
import EditEntry from "../pages/user-pages/journal/EditEntry.vue";
import CreateJournal from "../pages/user-pages/journal/CreateJournal.vue";
// import { useStore } from "vuex";
import store from "../store/index"

const routes = [
  {
    path: "/",
    name: "Home",
    component: LandingPage,
    meta: { requiresGuest: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requiresGuest: true },
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
    meta: { requiresGuest: true },
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
    meta: { requiresAuth: true },
  },
  {
    path: "/user-profile",
    name: "UserProfile",
    component: UserProfile,
    meta: { requiresAuth: true },
  },
  {
    path: "/journals/:journalID/new-entry",
    name: "NewEntry",
    component: NewEntry,
    meta: { requiresAuth: true },
  },

  {
    path: "/journals/:journalID/",
    name: "SingleJournal",
    component: SingleJournal,
    meta: { requiresAuth: true },
  },
  {
    path: "/journals/:journalID/:entryID",
    name: "SingleEntry",
    component: SingleEntry,
    meta: { requiresAuth: true },
  },
  {
    path: "/journals/:journalID/:entryID/edit",
    name: EditEntry,
    component: EditEntry,
    meta: { requiresAuth: true },
  },
  {
    path: "/journals/create-journal",
    name: "CreateJournal",
    component: CreateJournal,
    meta: { requiresAuth: true },
  },
];

// const store = useStore();

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
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.token) {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    if (store.getters.token) {
      next({
        path: "/journals",
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
