import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import router from '../router'
export default new Vuex.Store({
  state: {
    id: -1,
    fromPath: '',
    historyID: -1
  },
  mutations: {
    jump(state, payload) {
      if (typeof payload === 'undefined') payload = {};
      state.historyID = state.id;
      state.id = payload.id || -1;
      state.fromPath = payload.path || '/home';
    }
  },
  actions: {

  },
  modules: {

  }
})
