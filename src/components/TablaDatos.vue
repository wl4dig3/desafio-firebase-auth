<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Nombre</th>
          <th class="text-left">Codigo</th>
          <th class="text-left">Stock</th>
          <th class="text-left">Precio</th>
          <th class="text-left">Editar</th>
          <th class="text-left">Borrar</th>


        </tr>
      </thead>
      <tbody>
        <tr v-for="item in Productos" :key="item.nombre" @click="editarrespaldo(item.id)">
          <td>{{ item.nombre }}</td>
          <td>{{ item.codigo }}</td>
          <td>{{ item.stock }}</td>
          <td>{{ item.precio }}</td>
          <td>
                <v-btn
                  color="primary"
                  small
                  dark
                  @click.stop="dialog = true"
                  @click="
                    editarrespaldo(
                      Productos.id,
                      Productos.codigo,
                      Productos.nombre,
                      Productos.stock,
                      Productos.precio
                    )
                  "
                >
                  <v-icon dark> mdi-pencil </v-icon>
                </v-btn>
              </td>
              <td>
                <v-btn
                  class="mx-2"
                  fab
                  dark
                  small
                  color="red"
                  @click="borrar(Productos.id)"
                >
                  <v-icon dark> mdi-delete </v-icon>
                </v-btn>
              </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import {mapGetters, mapState, mapMutations, mapActions} from 'vuex';

export default {
    name: 'TablaDatos',
  data() {
    return {
    //   Productos: [
    //     {
    //       name: "Frozen Yogurt",
    //       calories: 159,
    //       stock: 10,
    //       precio: 1200,
    //     },
    //     {
    //       name: "Ice cream sandwich",
    //       calories: 237,
    //       stock: 10,
    //       precio: 1200,
    //     },
    //     {
    //       name: "Eclair",
    //       calories: 262,
    //       stock: 10,
    //       precio: 1200,
    //     },
    //     {
    //       name: "Cupcake",
    //       calories: 305,
    //       stock: 80,
    //       precio: 12000,
    //     },
    //     {
    //       name: "Gingerbread",
    //       calories: 356,
    //       stock: 40,
    //       precio: 10200,
    //     },
    //     {
    //       name: "Jelly bean",
    //       calories: 375,
    //       stock: 10,
    //       precio: 1200,
    //     },
    //   ],
    };
  },
  computed:{
      ...mapState("Datos",["Productos"]),
      // ...mapGetters("Datos",["editarProductos"])
  },
  methods:{
    ...mapMutations('Datos',['showEditarProducto']),
    editarrespaldo(respaldo){
      this.showEditarProducto(respaldo);
    }
  }
};
</script>