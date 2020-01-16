<template>
  <v-dialog v-model="dialog"  max-width="800px">
    <template v-slot:activator="{ on }">
      <v-btn large rounded color="#f7c23e" dark v-on="on">Mostar Menu </v-btn>
    </template>

    <!--CARd of the menus v-for cycle-->
    <v-container>
        <v-row>
            <v-card v-for="plate in menu" :key="plate" elevation="4" class="my-2">
                <v-col>helo!!!</v-col>
            </v-card>
        </v-row>        
        
    </v-container>
    
  </v-dialog>
</template>

    <script>
export default {
  name: "restaurantMenu",

  data: () => ({
      return:{
          dialog: false
      }
      
    

  }),
  }

</script>