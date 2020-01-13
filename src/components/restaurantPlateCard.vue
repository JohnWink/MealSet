<template>
  <div id="RecomendedCards">
    <v-app id="inspire">      
      <!--RECOMENDAÇÃO DE PRATOS-->
      <v-carousel hide-delimiters >
        <!--needs to made a method first to determan the best 5 dishes(in this case, sort by evaluation from the local storage)-->
       <v-carousel-item v-for="dish in dishes" :key="dish">

          <v-row no-gutters justify="center" align="center" >
            <v-col cols="12">
              <v-card id="cards" class="mx-auto" elevation="8" height="270" max-width="300">
                <v-img id="cardsImg" :src="dish.img"></v-img>
                <br />
                <v-title>{{ dish.name }}</v-title>
                <p> {{ dish.description }}</p>
              </v-card>
            </v-col>
          </v-row>

       </v-carousel-item>
      </v-carousel>
    </v-app>
  </div>
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
        img: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        restaurant: "",
        evaluation: 4
      },
      {
        name: "Bacalhau",
        img: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        restaurant: "",
        evaluation: 5
      },
      {
        name: "Legumes Salteados",
        img: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        restaurant: "",
        evaluation: 3
      },
      {
        name: "Novilho",
        img: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        restaurant: "",
        evaluation: 2
      },
      {
        name: "rissoto",
        img: "",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        restaurant: "",
        evaluation: 5
      },
    ]
  })
};
</script>