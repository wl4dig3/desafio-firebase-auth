<template>
  <div class="home">
    

    <vContainer class="my-5">
      <h1 class="subheading grey--text">Modo Administrador</h1>
      <TablaDatos />
      <v-btn color="blue-grey" class="ma-2 white--text" @click="showAdd">
        <span v-if="!add">Agregar producto</span>  <span v-if="add">Quitar formulario</span>
        
        <v-icon right dark> mdi-cloud-upload </v-icon>
      </v-btn>
      <AgregarProductos v-if="add" />
      <EditarProductos v-if="!edit"/>
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
import EditarProductos from "./../components/EditarProductos";
import { mapMutations, mapState } from "vuex";

export default {
  name: "Home",

  components: {
    TablaDatos,
    AgregarProductos,
    EditarProductos,
  },
  
  computed: {
    ...mapState("Datos", ["add","edit"]),
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
