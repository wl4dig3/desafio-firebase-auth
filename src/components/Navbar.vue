<template>
  <nav>
    <v-toolbar dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"> </v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Wladi</span>
        <span>Mir </span>
      </v-toolbar-title>
      <VSpacer />
      <v-btn @click="cerrarSesion" color="success">
        <span>Cerrar Sesion</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" class="indigo">
      <v-list v-if="!existeUsuario">
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon left class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  data() {
    return {
      drawer: false,
      links: [
        // { icon: "dashboard", text: "Home", route: "/" },
        { icon: "folder", text: "Login", route: "/login" },
        { icon: "folder", text: "Acceso", route: "/acceso" }
      ],
    };
  },
  methods:{
    ...mapActions(['cerrarSesion'])
  },
  computed:{
    ...mapGetters(['existeUsuario'])
  }
};
</script>