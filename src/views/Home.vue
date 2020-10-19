<template>
  <div class="home">
    <h1 class="subheading grey--text">Ruta protegida</h1>
    <p>{{usuario.email}}</p>

    <vContainer class="my-5">
      <v-row>
        <v-col></v-col>
      </v-row>
    </vContainer>
    
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "Home",
  computed:{
    ...mapState(['usuario'])
  }
};
</script>
