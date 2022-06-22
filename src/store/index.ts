import Vue from 'vue'
import Vuex from 'vuex'
import Auth from '@/auth/auth'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    app_url: 'http://localhost:8080',
    baseUrl: 'https://gitlab.adondevelopment.com/api/v4',
    url: 'https://gitlab.adondevelopment.com',
    email: '',
    password: '',
    testingMessage: '',
    app_name: 'Revision Queue',
    validatedToken: false,
    auth: {
      loggedIn: false,
      user: []
    },

  },
  getters: {
    isAuthenticated(state) {
      return state.auth.loggedIn
    },
    getTokenStatus(state) {
      return state.validatedToken;
    },
  },
  mutations: {
    setValidatedToken (state, token) {
      state.validatedToken = token;
      state.auth.loggedIn = token;

      console.log('validatedToken: '+ state.validatedToken + ' ' + 'loggedIn: '+state.auth.loggedIn)
    },
    setAuthToFalse(state) {
      state.auth.loggedIn = false;
      state.validatedToken = false;
    },

    setTestingMessage(state, payload){
      state.testingMessage = payload
      console.log(payload)
    }
    
  },
  actions: {
    async validateToken({ commit }){

      if(Auth.token() === null){
        commit('setTestingMessage', 'auth === null')
        commit('setValidatedToken', false);
      }else{
        commit('setTestingMessage', 'auth !== null')
        commit('setValidatedToken', true);
      }
      // try {
      //   axios.defaults.headers.common['Authorization'] = `Bearer ${Auth.token()}`;
      //   axios.defaults.headers.common['Accept'] = 'application/json';
        
      //   commit('setValidatedToken', true);
      //   commit('setTestingMessage', 'Testing message')
       
      // }catch({response}){
      //   commit('setValidatedToken', false);
      
      // }
    },
    logout({ commit }) {
      commit('setAuthToFalse');
    },
  },
  modules: {
  }
})
