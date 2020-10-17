// import { from } from 'core-js/fn/array'
import Vue from 'vue'
import Vuex from 'vuex'
import {auth} from '../firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: 'null',
    error:'error'
  },
  mutations: {
    setUsuario(state, payload) {
      state.usuario= payload
    },
    setError(state, payload) {
      state.error= payload
    }
  },
  actions: {
    crearUsuario({ commit }, usuario) {
      firebase.auth.createUserWithEmailAndPassword(usuario.email, usuario.password)
        .then(resp => {
        console.log(resp)
        })
        .catch(error => {
        console.log(error)
      })
    }
  },
  modules: {
  }
})
