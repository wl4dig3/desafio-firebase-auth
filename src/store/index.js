// import { from } from 'core-js/fn/array'
import Vue from 'vue'
import Vuex from 'vuex'
import {auth} from '../firebase'
import router from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: 'null',
    error:'null'
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
      auth.createUserWithEmailAndPassword(usuario.email, usuario.password)
        .then(resp => {
        console.log(resp)
          const usuarioCreado = {
            email: resp.user.email,
            uid: resp.user.uid
}
          commit('setUsuario',usuarioCreado)
          router.push('/')
        })
        .catch(error => {
          console.log(error)
          commit('setError',error)
      })
    }
  },
  modules: {
  }
})
