<template>
  <v-app class="grey lighten-4">
    <Navbar />
    <v-main class="mx-4 mb-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import { mapActions } from "vuex";

export default {
  name: "App",

  components: {
    Navbar,
  },
  created() {
    // se inserta el siguiente codigo en la const para solucionar un error de trasnform-runtime
    const regeneratorRuntime = require("regenerator-runtime");
    
    this.getData();
  },
  methods: {
    ...mapActions("Datos", ["getData"]),
  },
  // data: () => ({
  //   //
  // }),
};
</script>
