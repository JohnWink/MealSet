<template>  
  <!--RECOMENDAÇÃO DE PRATOS-->
  <v-carousel hide-delimiters :height="compHeight">
    <!--needs to made a method first to determan the best 5 dishes(in this case, sort by evaluation from the local storage)-->
    
      
        <v-carousel-item v-for="dish in dishes" :key="dish" >  

          <v-card id="cards" class="mx-auto indigo" elevation="8"  max-width="600px">

                <v-row class="mx-2" >
                  <v-col cols="12" sm="7">
                    <v-img  max-width="300px" :src="dish.img" ></v-img>
                  </v-col>                                 

                  <v-col cols="12" sm="5">
                    <p class="title font-weight-bold" >{{ dish.name }}</p>
                    <p >{{ dish.description }} </p>
                    <p style="margin-right: 25px;" class="font-weight-bold" >
                      {{ dish.evaluation }}
                      <v-icon medium color="yellow darken-1">fas fa-star</v-icon>
                    </p>
                  </v-col> 
                  
                </v-row>
                
              
            </v-card>

        </v-carousel-item>  
    
  </v-carousel>
    
</template>

<style>
#cards {
  border-radius: 20px;
}




</style>

<script>
export default {
  name: "RestaurantCards",
  data: () => ({
    // dishes get filled 5 top evaluations and from sort local storage bye evaluation, each time, time clear the dishes obj and add again to update  the list
    dishes: [
      {
        name: "Polvo",
        img: require("@/assets/eaters-collective-vOdK_eih7B0-unsplash.jpg"),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        restaurant: "",
        evaluation: 4
      },
      {
        name: "Bacalhau",
        img:  require("@/assets/eaters-collective-vOdK_eih7B0-unsplash.jpg"),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        restaurant: "",
        evaluation: 5
      },
      {
        name: "Legumes Salteados",
        img:  require("@/assets/eaters-collective-vOdK_eih7B0-unsplash.jpg"),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        restaurant: "../assets/eaters-collective-vOdK_eih7B0-unsplash.jpg",
        evaluation: 3
      },
      {
        name: "Novilho",
        img:  require("@/assets/eaters-collective-vOdK_eih7B0-unsplash.jpg"),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        restaurant: "",
        evaluation: 2
      },
      {
        name: "rissoto",
        img:  require("@/assets/eaters-collective-vOdK_eih7B0-unsplash.jpg"),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        restaurant: "",
        evaluation: 5
      },
    ],
    checker: "border: solid red;",
    compHeight :""
  }),
  methods:{    
    //method to ajust the css font size for xs devices, handset
    mobileAjust(){
      let heightSize = "310px"
      if(window.innerWidth < 770){
        
        heightSize = "470px"
        
      }
      this.compHeight = heightSize;
    }
  },
  created() {
    window.addEventListener('resize', this.mobileAjust)
    this.mobileAjust();
  },
  destroyed() {
    window.removeEventListener('resize', this.mobileAjust)
  }
   
};

</script>