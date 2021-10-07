import { createStore } from "vuex";

export default createStore({
  state: {
    isLoggedIn: true, //temp
    token: null,
    userName: "Rosko", //temp
    email: null,
    userId: null,
    firstName: null,
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
    },
    resetUser(state) {
      state.token = null;
      state.userId = null;
      state.email = null;
      state.firstName = null;
    },
  },
  actions: {
    login(context, payload) {
      context.commit("setUser", payload);
    },
    logout(context, payload) {
      context.commit("resetUser", payload);
    },
  },
  modules: {},
});
