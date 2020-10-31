<template>
  <div class="home">
    <!-- <p>{{usuario.email}}</p> -->

    <vContainer class="my-5">
    <h1 class="subheading grey--text">Modo Administrador</h1>
      <TablaDatos />
      <v-row>
        <v-col> </v-col>
      </v-row>
    </vContainer>
    <v-main>
      
    </v-main>
  </div>
</template>

<script>
import TablaDatos from "./../components/TablaDatos";
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
