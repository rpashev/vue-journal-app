import { createStore } from "vuex";

export default createStore({
  state: {
    isLoggedIn: false,
  },
  getters: {
    isLoggedIn(state){
      return state.isLoggedIn;
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});
