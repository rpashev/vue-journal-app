import { createStore } from "vuex";

export default createStore({
  state: {
    isLoggedIn: true,
    user: {
      userName: "Rosko",
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    },
    userName(state) {
      return state.user.userName;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
