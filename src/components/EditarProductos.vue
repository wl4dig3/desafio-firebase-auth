<template>
  <div v-if="Object.keys(editProducto).lenght !==0">
    <v-form>
      <v-container>
        <h1>Modificar los  Productos</h1>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="editProducto.nombre"
              label="Nombre"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="editProducto.codigo"
              label="Codigo"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="editProducto.stock" label="Stock"></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="editProducto.precio"
              label="Precio"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-btn
              color="blue-grey"
              class="ma-2 white--text"
              @click="
                editarProducto();
                LimpiarData();
              "
            >
              Editar
              <v-icon right dark> mdi-cloud-upload </v-icon>
            </v-btn>
              <h1>El producto es: {{ editProducto.nombre }}</h1>

          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: "EditarProductos",

    data: () => ({
    // juguete: {
    //   nombre: "",
    //   codigo: "",
    //   stock: "",
    //   precio: "",
    // },
  }),
  computed:{
      ...mapState("Datos",["editProducto"])
  }
};
</script>