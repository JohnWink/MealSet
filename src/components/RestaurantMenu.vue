<template>
  
  <div>
    <v-row align="center" justify="space-between">

      <v-col cols="8"  sm="3" class="title font-weight-bold" >
        {{dish.name}}
      </v-col>
      <v-col cols="2">
        {{dish.tag}}
      </v-col>

      <v-col cols="3" sm="3">
        {{ dish.evaluation }}
        <v-icon medium color="yellow darken-1">fas fa-star</v-icon>
      </v-col>

    </v-row>

    <v-row>
      <v-col cols="12">
        {{dish.description}}
      </v-col>
    </v-row>
     

    <br>

    <v-divider class="indigo lighten-1"></v-divider>

  </div>
      
</template>

    <script>
export default {
  name: "restaurantMenu",
  props:["dish"],

  data: () => ({
      
  }),
  }

</script>