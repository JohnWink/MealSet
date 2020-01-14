<template>  
  <!--RECOMENDAÇÃO DE PRATOS-->
  <v-carousel hide-delimiters height="270">
    <!--needs to made a method first to determan the best 5 dishes(in this case, sort by evaluation from the local storage)-->
    
      
        <v-carousel-item v-for="dish in dishes" :key="dish" >        

          <v-card id="cards" class="mx-auto" elevation="8" height="270" max-width="300">
            <v-img id="cardsImg" :src="dish.img"></v-img>
            <br />
            <v-title>{{ dish.name }}</v-title>
            <p> {{ dish.description }}</p>
          </v-card>
        </v-carousel-item>  
      
    
  </v-carousel>
    
</template>

<style>
#cards {
  border-radius: 20px;
}

#cardsImg {
  max-width: 400px;
  max-height: 200px;
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
        img: "../assets/eaters-collective-vOdK_eih7B0-unsplash.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        restaurant: "",
        evaluation: 4
      },
      {
        name: "Bacalhau",
        img: "../assets/eaters-collective-vOdK_eih7B0-unsplash.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        restaurant: "",
        evaluation: 5
      },
      {
        name: "Legumes Salteados",
        img: "../assets/eaters-collective-vOdK_eih7B0-unsplash.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        restaurant: "../assets/eaters-collective-vOdK_eih7B0-unsplash.jpg",
        evaluation: 3
      },
      {
        name: "Novilho",
        img: "../assets/eaters-collective-vOdK_eih7B0-unsplash.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        restaurant: "",
        evaluation: 2
      },
      {
        name: "rissoto",
        img: "../assets/eaters-collective-vOdK_eih7B0-unsplash.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        restaurant: "",
        evaluation: 5
      },
    ],
    checker: "border: solid red;"
  })
};
</script>