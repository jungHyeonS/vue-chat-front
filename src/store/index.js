import Vue from 'vue'
import createPersistedState from 'vuex-persistedstate';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token : ""
  },
  getters: {
  },
  mutations: {
    SET_TOKEN(state,value){
      state.token = value;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]

  
})
