<template>
   <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
          <v-btn large rounded color="#f7c23e" dark v-on="on">Fazer Reserva</v-btn>
    </template>
    <v-card>
      <v-form class="pa-10" ref="form" v-model="valid" lazy-validation>
        <v-btn color="blue darken-1" text @click="dialog = false">X</v-btn>

        <v-text-field v-model="name" :rules="nameRules" label="Nome"></v-text-field>

        <v-text-field v-model="peopleNumber"  :rules="peopleNumberRules" label="Número de convidados"></v-text-field>

          <v-select v-model="mealTimeSelection" :items="mealTime" :rules="mealTimeRules" label="Qual vai ser sua refeição?"></v-select>
<!--+++++++++++++++++++++++++++++++++++++++++++Secção da data+++++++++++++++++++++++++++++++++++++++++++++++++-->
         <v-layout row wrap>
          <v-menu
            v-model="fromDateMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            max-width="290px"
            min-width="290px"
          >
      <template v-slot:activator="{ on }">
        <v-text-field
          label="Data da reserva"
          readonly
          :value="fromDateDisp"
          v-on="on"
          :rules="mealDateRules"
        ></v-text-field>
      </template>
      <v-date-picker
        locale="en-in"
        :min="minDate"
        :max="maxDate"
        v-model="fromDateVal"
        no-title
        @input="fromDateMenu = false"
      ></v-date-picker>
    </v-menu>
  </v-layout>



        <!--  Someday....
        <v-file-input
          label="File input"
          filled
          prepend-icon="mdi-camera"
          accept="image/*"
          v-model="choosenImg"
        ></v-file-input>
        -->
      
 
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

  fromDateMenu: false,
  fromDateVal: null,
  name:'',
  peopleNumber:'',
  mealTime:['Almoço','Jantar'],
  mealTimeValue:'',

   nameRules: [
      v => !!v || 'Por favor preencha o nome',
    ],

    peopleNumberRules:[
       v => !!v || 'Por favor indique o número de convidados',
    ],

     mealTimeRules:[
       v => !!v || 'Por favor indique o tipo de refeição que deseja',
    ],

     mealDateRules:[
       v => !!v || 'Por favor indique a data em que deseja a reserva',
    ]
}),

methods: {
    submit () {
      if (this.$refs.form.validate()) {

  
        
  

         this.dialog=false
         
         this.$store.commit("ADD_RESERVATION",{
           id: this.$store.getters.getLastReservationId,
           userId: this.$store.getters.getLoggedUserId,
           restaurantId: this.$store.getters.restaurantInfo(parseInt(this.$route.params.id)).id,
           name: this.name,
           peopleNumber: this.peopleNumber,
           mealTime: this.mealTimeSelection,
           mealDate: this.fromDateVal,
         })

      }
    },
     reset() {
      this.$refs.form.reset();
    },

},


computed:{
  //this.date1 = new Date().toISOString().substr(0, 10)
fromDateDisp(){
        return this.fromDateVal;
        // format date, apply validations, etc. Example below.
        // return this.fromDateVal ? this.formatDate(this.fromDateVal) : "";
      },
fromDateTime(){
  return this.mealTimeSelection;
},


}


}





</script>

<style>

</style>