import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: null,
      email: '',
      username: ''
    }
  },
  getters: {
    isAuthenticated(state){
      return !!state.user.id;
    }
  },
  mutations: {
    CURRENT_USER_FETCHED(state, user){
      state.user.id = user.id;
      state.user.username = user.username;
      state.user.email = user.email;
    }
  },
  actions: {
    async initialLoad({commit}){
      if(localStorage.token){
        Vue.axios.defaults.headers.common.Authorization = `Bearer ${localStorage.token}`;
        console.log('wchodzi');
        const res = await Vue.axios.get("/api/auth/currentUser");
        commit("CURRENT_USER_FETCHED", res.data.user);
      }
    }
  }
})
