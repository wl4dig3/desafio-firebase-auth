<template>
  <v-app class="bg">
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1>Registrarse</h1>
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
        <v-btn color="success" @click="crearUsuario({email:email, password: password})" >Registrar</v-btn>
        <v-spacer></v-spacer>
        <!-- <v-btn color="info">Login</v-btn> -->
      </v-card-actions>
        <span>{{error.code}}</span>
    </v-card>
  </v-app>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: "Login",
  data() {
    return {
      showPassword: false,
      email: "",
      password: "",
    };
  },
  created(){

  },
  methods:{
    ...mapActions(['crearUsuario'])
  },
  computed: {
    ...mapState(['error'])
  }
};
</script>

<style lang="scss" scoped>
.bg {
  background-image: url('../assets/main-bg1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
