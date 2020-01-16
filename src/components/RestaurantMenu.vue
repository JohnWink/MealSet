<template>
  <v-dialog v-model="dialog"  max-width="900px">
    <template v-slot:activator="{ on }">
      <v-btn large rounded color="#f7c23e" dark v-on="on">Mostar Menu </v-btn>
    </template>

    <!--CARd of the menus v-for cycle-->
    <v-container class="white darken-2">
        <v-row justify="space-around" align="center">
            <v-col cols="12" sm="4" v-for="dish in menu" :key="dish">
              <v-card  elevation="4" class="ma-auto">
                <v-card-text>

                  <v-row align="center">
                    <v-col cols="12">
                       <v-img contain=true max-width="300px" :src="dish.img" ></v-img>
                    </v-col>
                   
                  </v-row>

                  <v-row align="center" justify="space-between">

                    <v-col cols="8">
                    {{dish.name}}
                    </v-col>

                    <v-col cols="4">
                      {{ dish.evaluation }}
                      <v-icon medium color="yellow darken-1">fas fa-star</v-icon>
                    </v-col>

                  </v-row>

                  <v-row>
                    <v-col cols="12">
                      {{dish.description}}
                    </v-col>
                  </v-row>

                </v-card-text>
                </v-card>
              </v-col>
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
      },

      menu:[
          {
          name: "Polvo",
          img: require("@/assets/eaters-collective-vOdK_eih7B0-unsplash.jpg"),
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",          
          evaluation: 4
        },
        {
          name: "Bacalhau",
          img:  require("@/assets/eaters-collective-vOdK_eih7B0-unsplash.jpg"),
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",          
          evaluation: 5
        },
        {
          name: "Legumes Salteados",
          img:  require("@/assets/eaters-collective-vOdK_eih7B0-unsplash.jpg"),
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",          
          evaluation: 3
        },
        {
          name: "Novilho",
          img:  require("@/assets/eaters-collective-vOdK_eih7B0-unsplash.jpg"),
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",          
          evaluation: 2
        },
        {
          name: "rissoto",
          img:  require("@/assets/eaters-collective-vOdK_eih7B0-unsplash.jpg"),
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",          
          evaluation: 5
        },
      ]       

  }),
  }

</script>