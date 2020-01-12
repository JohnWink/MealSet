<template>
  <div id="introductionCards">
    <v-app id="inspire" class="pl-12 ml-12">
      <v-spacer></v-spacer>
      <v-title class="text-center">Bem vindo ao MealSet!</v-title>
      <v-title class="text-center mt-6">Começa já a utilizar a nossa aplicação</v-title>
      <v-spacer></v-spacer>
      <!--recomendação de restaurantes-->
      <v-row>
        <v-col cols="6" md="4" v-for="restaurant in restaurants" :key="restaurant">
          <v-card id="cards" class="mx-auto" elevation="10" height="300" max-width="400">
            <v-img id="restaurantImg" src="../assets/tae-in-kim-jivmv9hE6bM-unsplash.jpg"></v-img>
            <br />
            <v-title>{{ restaurants.name[i] }}</v-title>
            <p>{{ }}</p>
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

#restaurantImg {
  max-width: 400px;
  max-height: 200px;
}
</style>

<script>
export default {
  name: "introductionCards",
  data: () => ({
    restaurants: {
      name: ["Chimarrão", "Dona Maria", "O Monte", "KFC", "Rochedo", "Cascata"],
    }
  })
};
</script>