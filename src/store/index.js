import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app';
import "firebase/auth";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    landscape: window.matchMedia("(min-width: 600px)")
  },
  mutations: {
    listenResize (state){
      window.addEventListener(
        "resize", () => (state.landscape = window.matchMedia("(min-width: 600px)").matches)
      )
    },
    changeUserInfo(state,payload){
      state.user = payload
    },
    listenUser(state){
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
            state.user = user
        } else {
          state.user = null
        }

      });
    }
  },
  actions: {
  },
  modules: {
  }
})
