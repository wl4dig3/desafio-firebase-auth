<template>
  <div v-if="Object.keys(editarProducto).lenght !== 0">
    <v-form>
      <v-container>
        <h1>Modificar los Productos</h1>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="editarProducto.nombre"
              label="Nombre"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="editarProducto.codigo"
              label="Codigo"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="editarProducto.stock"
              label="Stock"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="editarProducto.precio"
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
            <h1>El producto es: {{ editarProducto.nombre }}</h1>
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
  props:['productos','productoaEditar'],

    data() {
    return {
      respaldos:{}
    };
  },
  created(){
    this.respaldos = this.productos
  },
  methods:{
    ...mapActions('Datos',['editarProducto','producto']),
    actualizarrespaldo(){
      let actualizacion = {
      id: this.respaldos.id,
      data:{
        codigo: this.respaldos.data.codigo,
        nombre: this.respaldos.data.nombre,
        stock: this.respaldos.data.stock,
        precio: this.respaldos.data.precio,  
      },
    };
    this.editarProducto(actualizacion)
    }
  },
  // computed:{
  //     ...mapState("Datos",["editarProducto"])
  // }
};
</script>