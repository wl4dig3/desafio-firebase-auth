<template>
    <!-- <div> -->
    <v-app class="bg">
        
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1>Acceso de Usuario</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Username"
            prepend-icon="mdi-account-circle"
            v-model="email"
          ></v-text-field>
          <v-text-field
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn color="success" @click="ingresoUsuario({email:email, password: password})" >Acceder</v-btn>
        <v-spacer></v-spacer>
        <!-- <v-btn color="info">A</v-btn> -->
      </v-card-actions>
        <span>{{error.code}}</span>
    </v-card>
  </v-app>
    <!-- </div> -->
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name:'Acceso',
    data() {
        return {
            showPassword: false,
            email:'',
            password:''
        }
    },
    methods:{
        ...mapActions(['ingresoUsuario'])
    },
    computed:{
        ...mapState(['error'])
    }
}
</script>

<style lang="scss" scoped>
.bg {
  background-image: url('../assets/access.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>