<template>
  <div id="RecomendedCards">
    <v-app id="inspire" class="pl-12 ml-12">      
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
  name: "RecomendedCards",
  data: () => ({
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