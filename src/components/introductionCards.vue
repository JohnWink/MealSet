<template>
  <div id="introductionCards">
    <v-app id="inspire" class="pl-12 ml-12">
      <v-spacer></v-spacer>
      <v-title class="text-center">Bem vindo ao MealSet!</v-title>
      <v-title class="text-center mt-6">Começa já a utilizar a nossa aplicação</v-title>
      <v-spacer></v-spacer>
      <v-row>
        <v-col cols="6" md="4" v-for="titulo1 in titulos1" :key="titulo1">
          <v-card class="mx-auto" elevation="10" height="300" max-width="400">
            <v-title>{{ titulo1 }}</v-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" md="4" v-for="titulo2 in titulos2" :key="titulo2">
          <v-card class="mx-auto" elevation="10" height="300" max-width="400">
            <v-title>{{ titulo2 }}</v-title>
          </v-card>
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: "introductionCards",
  data: () => ({
    titulos1: ["mano", "fixe", "lol"],
    titulos2: ["bro", "top", "mana"]
  })
};
</script>