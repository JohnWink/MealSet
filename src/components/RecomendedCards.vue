<template>
  <div id="recomendedCards">
    <v-app id="inspire" class="pl-12 ml-12">
      <br>
      <!--RECOMENDAÇÃO DE RESTAURANTES-->
      <v-title>Recomendação de restaurantes:</v-title>
      <br />
      <v-row class="mb-7" no-gutters >
        <v-col v-for="restaurant in restaurants" :key="restaurant">
          <v-card id="cards" class="mx-auto" elevation="10" height="240" max-width="290">
            <v-img id="cardsImg" :src="restaurant.img"></v-img>
            <br />
            <v-title>{{ restaurant.name }}</v-title>
            <p>a {{ restaurant.localization }} km de si</p>
          </v-card>
        </v-col>
      </v-row>
      <br>
      <!--RECOMENDAÇÃO DE PRATOS-->
      <v-title>Recomendação de pratos:</v-title>
      <br />
      <v-row class="mb-7" no-gutters >
        <v-col v-for="dish in dishes" :key="dish">
          <v-card id="cards" class="mx-auto" elevation="10" height="240" max-width="290">
            <v-img id="cardsImg" :src="dish.img"></v-img>
            <br />
            <v-title>{{ dish.name }}</v-title>
            <p> {{ dish.description }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<!-- v-for="restaurant in restaurants" :key="restaurant"  
<v-row
        class="mb-6"
        no-gutters
      >
        <v-col
          v-for="n in 4"
          :key="n"
        >
          <v-card
            class="pa-2"
            tile
            outlined
          >-->

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
  name: "recomendedCards",
  data: () => ({
    restaurants: [
      {
        name: "Chimarrão",
        img: "../assets/zakaria-zayane-0uAVsDcyD0M-unsplash.jpg",
        description: "",
        localization: 4,
        evaluation: 5,
        comments: ""
      },
      {
        name: "Cascata",
        img: "../assets/tae-in-kim-jivmv9hE6bM-unsplash.jpg",
        description: "",
        localization: 6,
        evaluation: 3,
        comments: ""
      },
      {
        name: "Rochedo",
        img: "../assets/lily-banse--YHSwy6uqvk-unsplash.jpg",
        description: "",
        localization: 15,
        evaluation: 2,
        comments: ""
      },
      {
        name: "Dona Maria",
        img: "../assets/jason-leung-poI7DelFiVA-unsplash.jpg",
        description: "",
        localization: 7,
        evaluation: 4,
        comments: ""
      }
    ],
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
      }
    ]
  })
};
</script>