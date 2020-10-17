<template>
  <v-app class="bg">
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1>Login</h1>
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
        <v-btn color="success">Register</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "Login",
  data() {
    return {
      showPassword: false,
      email: " ",
      password: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.bg {
  background: grey;
}
</style>
