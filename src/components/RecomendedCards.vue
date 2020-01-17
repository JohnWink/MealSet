<template>
  <div id="RecomendedCards">
    <v-app id="inspire" class="pl-12 ml-12">
      <br>
      <br>
      <br>
      <!--RECOMENDAÇÃO DE RESTAURANTES-->
    
      <br>
      <v-row class="mb-6">
        <v-col cols="6" md="4" v-for="restaurant in restaurants" :key="restaurant.id" >
          <a onclick="restaurantPage()">
             
            <v-card id="cards" class="mx-auto" elevation="10" max-height="350" max-width="500">
               <router-link :to="restaurant.routerLink">
              <v-img id="cardsImg" :src="restaurant.coverImg"></v-img>
                </router-link>
              <br>
             
              <p id="ps" class>a {{ restaurant.distance }} km de si</p>

              <p style="margin-right: 25px;" >
                {{ restaurant.evaluation }}
                <i class="fas fa-star"></i>
              </p>
            </v-card>
           
          </a>
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<style>
#cards {
  border-radius: 20px;
}

#cardsImg {
  max-width: 500px;
  max-height: 250px;
}

#titles {
  font-size: 20px;
}

#ps {
  margin-left: 21px;
  font-size: 13px;
}
</style>

<script>
export default {
  name: "RecomendedCards",
  //props:["restaurant"]
  data: () => ({
   
    restaurants:[],
    
    dishes: [
      {
        name: "Polvo",
        img: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        evaluation: 4
      },
      {
        name: "Bacalhau",
        img: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        evaluation: 5
      },
      {
        name: "Legumes Salteados",
        img: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        evaluation: 3
      },
      {
        name: "Novilho",
        img: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        evaluation: 2
      }
    ]
  }),
  beforeMount(){
   this.restaurants  = this.$store.getters.getRestaurants
  },
   

};
</script>