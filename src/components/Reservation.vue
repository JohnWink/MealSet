<template>
   <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
          <v-btn large rounded color="#f7c23e" dark v-on="on">Fazer Reserva</v-btn>
    </template>
    <v-card>
      <v-form class="pa-10" ref="form" v-model="valid" lazy-validation>
        <v-btn color="blue darken-1" text @click="dialog = false">X</v-btn>

        <v-text-field v-model="name" :counter="20" :rules="nameRules" label="nome" required></v-text-field>

        <v-text-field v-model="peopleNumber" :counter="500" :rules="descriptionRules" label="Número de convidados" required></v-text-field>

        <v-date-picker v-model="date1"></v-date-picker>

        <v-file-input
          label="File input"
          filled
          prepend-icon="mdi-camera"
          accept="image/*"
          v-model="choosenImg"
        ></v-file-input>
  
      
 
      <v-btn color="primary" text @click="reset">Limpar Informação </v-btn>

      <v-btn color="primary" text @click="submit">Adicionar Restaurante</v-btn>
     
     </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
name:"reservation",

data:() => ({
  date1: '',

}),
/*
computed(){
  this.date1 = new Date().toISOString().substr(0, 10)
}
*/
}





</script>

<style>

</style>