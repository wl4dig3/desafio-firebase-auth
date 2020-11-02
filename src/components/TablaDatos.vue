<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Nombre</th>
          <th class="text-left">Codigo</th>
          <th class="text-left">Stock</th>
          <th class="text-left">Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in Productos" :key="item.nombre" @click="editarJuguete(item.id)">
          <td>{{ item.nombre }}</td>
          <td>{{ item.codigo }}</td>
          <td>{{ item.stock }}</td>
          <td>{{ item.precio }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import {mapGetters, mapState, mapMutations} from 'vuex';

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
    ...mapMutations('Datos',['showEditProducto']),
    editarJuguete(juguete){
      this.showEditProducto(juguete);
    }
  }
};
</script>