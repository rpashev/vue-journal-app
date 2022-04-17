import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../pages/LandingPage.vue";
import SignIn from "../pages/auth/SignIn.vue";
import SignUp from "../pages/auth/SignUp.vue";
const NewEntry = () => import("../pages/user-pages/journal/NewEntry.vue");
const HomeUser = () => import("../pages/user-pages/HomeUser.vue");
const SingleJournal = () => import("../pages/user-pages/journal/SingleJournal.vue");
const SingleEntry = () => import("../pages/user-pages/journal/SingleEntry.vue");
const EditEntry = () => import("../pages/user-pages/journal/EditEntry.vue");
const CreateJournal = () => import("../pages/user-pages/journal/CreateJournal.vue");
const EditJournal = () => import("../pages/user-pages/journal/EditJournal.vue");
const BenefitsOfJournaling = () => import("../pages/information-pages/BenefitsJournaling.vue");
const DreamJournal = () => import("../pages/information-pages/DreamJournal.vue");
const FiveYearJournal = () => import("../pages/information-pages/FiveYearJournal.vue");
const JournalDefinition = () => import("../pages/information-pages/JournalDefinition.vue");
const JournalPrompts = () => import("../pages/information-pages/JournalPrompts.vue");
const ReflectiveJournal = () => import("../pages/information-pages/ReflectiveJournal.vue");
const TravelJournal = () => import("../pages/information-pages/TravelJournal.vue");
const JournalTypes = () => import("../pages/information-pages/JournalTypes.vue");
const NotFound = () => import("../pages/NotFound.vue");

import store from "../store/index";

const routes = [
  {
    path: "/",
    name: "Home",
    component: LandingPage,
    meta: { requiresGuest: true },
  },
  {
    path: "/login",
    name: "SignIn",
    component: SignIn,
    meta: { requiresGuest: true },
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
    meta: { requiresGuest: true },
  },

  {
    path: "/journals",
    name: "HomeUser",
    component: HomeUser,
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
  {
    path: "/journals/:journalID/edit-journal",
    name: "EditJournal",
    component: EditJournal,
    meta: { requiresAuth: true },
  },
  {
    path: "/benefits",
    name: "Benefits",
    component: BenefitsOfJournaling,
    meta: { requiresAuth: false },
  },
  {
    path: "/dream-journal",
    name: "DreamJournal",
    component: DreamJournal,
    meta: { requiresAuth: false },
  },
  {
    path: "/five-year-journal",
    name: "FiveYearJournal",
    component: FiveYearJournal,
    meta: { requiresAuth: false },
  },
  {
    path: "/journal-prompts",
    name: "JournalPrompts",
    component: JournalPrompts,
    meta: { requiresAuth: false },
  },
  {
    path: "/reflective-journal",
    name: "ReflectiveJournal",
    component: ReflectiveJournal,
    meta: { requiresAuth: false },
  },
  {
    path: "/travel-journal",
    name: "TravelJournal",
    component: TravelJournal,
    meta: { requiresAuth: false },
  },
  {
    path: "/journal-definition",
    name: "JournalDefinition",
    component: JournalDefinition,
    meta: { requiresAuth: false },
  },
  {
    path: "/journal-types",
    name: "JournalTypes",
    component: JournalTypes,
    meta: { requiresAuth: false },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: NotFound,
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
