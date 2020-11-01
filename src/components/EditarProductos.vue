<template>
  <div>
    <v-form>
      <v-container>
        <h1>Editar Productos</h1>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="juguete.nombre"
              label="Nombre"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="juguete.codigo"
              label="Codigo"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field v-model="juguete.stock" label="Stock"></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="juguete.precio"
              label="Precio"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-btn
              color="blue-grey"
              class="ma-2 white--text"
              @click="
                AgregarProducto();
                LimpiarData();
              "
            >
              Editar
              <v-icon right dark> mdi-cloud-upload </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "EditarProductos",
};
</script>