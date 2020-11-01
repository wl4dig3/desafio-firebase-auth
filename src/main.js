import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

import {auth} from './firebase'

auth.onAuthStateChanged(user=>{
  if(user){
    // console.log('status usuario logueado',user.email)
    const detectoUsuario = {
      email: user.email,
      uid: user.uid
    }
    store.dispatch('detectarUsuario', detectoUsuario)

  }else{
    // console.log(user)
    store.dispatch('detectarUsuario', user)
  }


  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')

})

