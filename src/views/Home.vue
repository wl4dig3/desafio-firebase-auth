<template>
  <div class="home">
    <!-- <p>{{usuario.email}}</p> -->

    <vContainer class="my-5">
      <h1 class="subheading grey--text">Modo Administrador</h1>
      <TablaDatos />
      <v-btn color="blue-grey" class="ma-2 white--text" @click="showAdd">
        Agregar producto
        <v-icon right dark> mdi-cloud-upload </v-icon>
      </v-btn>
      <AgregarProductos v-if="add" />
      <v-row>
        <v-col> </v-col>
      </v-row>
    </vContainer>
    <v-main> </v-main>
  </div>
</template>

<script>
import TablaDatos from "./../components/TablaDatos";
import AgregarProductos from "./../components/AgregarProductos";
import { mapMutations, mapState } from "vuex";

export default {
  name: "Home",

  components: {
    TablaDatos,
    AgregarProductos,
  },
  

  // name: "Home",
  computed: {
    ...mapState("Datos", ["add"]),
    ...mapState(["usuario"]),
  },
  methods: {
    ...mapMutations("Datos", ["MostrarAdd"]),
    showAdd() {
      this.MostrarAdd();
    },
  },
};
</script>
