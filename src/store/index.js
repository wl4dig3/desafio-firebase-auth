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
    },
    ingresoUsuario({commit},usuario){
      auth.signInWithEmailAndPassword(usuario.email, usuario.password)
      .then(resp=>{
        console.log(resp);
        const usuarioLogueado = {
          email: resp.user.email,
          uid: resp.user.uid
}
        commit('setUsuario',usuarioLogueado)
        router.push('/')
      })
      .catch(error=>{
        console.log(error)
        commit('setError',error)
      })
    },
    cerrarSesion({commit}){
      auth.signOut()
      .then(()=>{
        router.push('/acceso')
      })
    },
    detectarUsuario({commit}, usuario){
      commit('sertUsuario',usuario)
    }
  }
  
})
