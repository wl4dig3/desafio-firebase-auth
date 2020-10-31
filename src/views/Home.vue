<template>
  <div class="home">
    <h1 class="subheading grey--text">Ruta protegida</h1>
    <!-- <p>{{usuario.email}}</p> -->

    <vContainer class="my-5">
      <v-row>
        <v-col> </v-col>
      </v-row>
    </vContainer>
    <v-main>
      <TablaDatos />
      <v-router></v-router>
    </v-main>
  </div>
</template>

<script>
import TablaDatos from "@/components/TablaDatos";
import { mapState } from "vuex";

export default {
  name: "Home",

  components: {
    TablaDatos,
  },

  name: "Home",
  computed: {
    ...mapState(["usuario"]),
  },
};
</script>
