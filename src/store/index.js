import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    isLoggedIn: true, //temp
    token: null,
    userName: "Rosko", //temp
    email: null,
    userId: null,
    firstName: null,
    journals: null,
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn; //temp
    },
    userName(state) {
      return state.userName; //temp
    },
    token(state) {
      return state.token;
    },
    email(state) {
      return state.email;
    },
    userId(state) {
      return state.userId;
    },
    firstName(state) {
      return state.firstName;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.token = payload.token;
      state.userId = payload.userId;
      state.email = payload.email;
      state.firstName = payload.firstName;
      state.journals = payload.journals;
    },
    resetUser(state) {
      state.token = null;
      state.userId = null;
      state.email = null;
      state.firstName = null;
      state.journals = null;
    },
  },
  actions: {
    async login(context, payload) {
      return context.dispatch("auth", {
        ...payload,
        mode: "login",
      });
    },
    async signup(context, payload) {
      return context.dispatch("auth", {
        ...payload,
        mode: "signup",
      });
    },
    async auth(context, payload) {
      let url = "http://localhost:5000/auth/login";

      if (payload.mode === "signup") {
        url = "http://localhost:5000/auth/signup";
      }

      const response = await axios.post(url, { ...payload });

      const userData = {
        token: response.data.token,
        userId: response.data.userId,
        email: response.data.email,
        firstName: response.data.firstName,
        journals: response.data.journals,
      };

      context.commit("setUser", { ...userData });
    },

    logout(context, payload) {
      context.commit("resetUser", payload);
    },
  },
  modules: {},
});
