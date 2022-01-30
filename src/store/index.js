import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    token: null,
    email: null,
    userId: null,
    firstName: null,
    journals: null,
    entries: null,
  },

  getters: {
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

    journals(state) {
      return state.journals;
    },

    entries(state) {
      return state.entries;
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
      state.entries = null;
    },

    setEntries(state, payload) {
      state.entries = payload.entries;
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

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("firstName", response.data.firstName);
      localStorage.setItem("journals", response.data.journals);

      context.commit("setUser", { ...userData });
    },

    tryLogin(context) {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const email = localStorage.getItem("email");
      const firstName = localStorage.getItem("firstName");
      const journals = localStorage.getItem("journals");

      if (token) {
        context.commit("setUser", {
          token,
          userId,
          email,
          firstName,
          journals,
        });
      }
    },

    logout(context, payload) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("email");
      localStorage.removeItem("firstName");
      localStorage.removeItem("journals");
      context.commit("resetUser", payload);
    },
    
    getEntries(context, payload) {
      context.commit("setEntries", payload);
    },
  },
  modules: {},
});
