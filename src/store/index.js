import Vue from 'vue'
import createPersistedState from 'vuex-persistedstate';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token : "",
    userIdx:"",
    lastChatDate:"",
  },
  getters: {
  },
  mutations: {
    SET_TOKEN(state,value){
      state.token = value;
    },
    SET_USERIDX(state,value){
      state.userIdx = value;
    },
    SET_LAST_CHAT_DATE(state,value){
      if(value == null){
        state.lastChatDate = "";  
      }else{
        state.lastChatDate = value;
        let date = new Date(value);
        let hours = date.getHours();
        let min = date.getMinutes();
        if(hours <= 12 && hours >= 6){
          state.lastChatDate = "오전 " + hours + ":"+min
        }else if(hours >= 12 && hours < 22){
          hours = hours - 12
          state.lastChatDate = "오후 " + hours + ":"+min
        }
      }
    },
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()]

  
})
