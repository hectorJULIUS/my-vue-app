
import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoggedIn: false,
    userId: null
  },
  getters: {
  },
  mutations: {
    setIsLoggedIn(state){
      const token = localStorage.getItem('auth-token')
      // const userId = localStorage.getItem('userId')
      if(token){
        state.isLoggedIn = true
        // state.userId = userId
      }
    },
    logout(state){
      const token = localStorage.getItem('auth-token')
      // const userId = localStorage.getItem('userId')
      if(!token){
        state.isLoggedIn = false
        // state.userId = userId
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
