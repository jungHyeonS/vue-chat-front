import Vue from 'vue'
import createPersistedState from 'vuex-persistedstate';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token : "",
    userIdx:""
  },
  getters: {
  },
  mutations: {
    SET_TOKEN(state,value){
      state.token = value;
    },
    SET_USERIDX(state,value){
      state.userIdx = value;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]

  
})
