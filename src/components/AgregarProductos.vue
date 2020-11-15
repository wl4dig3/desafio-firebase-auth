<template>
  <div>
    <v-form>
      <v-container>
        <h1>Agregar Productos</h1>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field v-model="respaldo.nombre" label="Nombre"></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="respaldo.codigo" label="Codigo"></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="respaldo.stock" label="Stock"></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field v-model="respaldo.precio" label="Precio"></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-btn
              color="blue-grey"
              class="ma-2 white--text"
              @click="AgregarProducto(); LimpiarData()"
            >
              Agregar
              <v-icon right dark> mdi-cloud-upload </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AgregarProductos",

  data: () => ({
    respaldo: {
      nombre: "",
      codigo: "",
      stock: "",
      precio: "",
    },
  }),
  methods: {
    ...mapActions("Datos", ["addData"]),
    AgregarProducto() {
      this.addData(this.respaldo);
    },
    LimpiarData(){
        this.respaldo.nombre = "",
        this.respaldo.codigo = "",
        this.respaldo.precio = "",
        this.respaldo.stock = ""
    }
  },
};
</script>