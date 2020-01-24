<!--Using the addrestaurtant has a part templete -->


<template>
   <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
       <v-btn large rounded color="#f7c23e" dark v-on="on">Mudar estado da Reserva</v-btn>
    </template>
    <v-card>
      <!--Fechar-->
      <v-toolbar color="#f7c23e">
        <v-row>
          <v-col class="text-left mt-2 ml-6">
            <v-toolbar-title id="text">Estado da Reserva </v-toolbar-title>
          </v-col>
          <v-col class="text-right mt-2">
            <v-btn color="#ffffff" text right @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-toolbar>
      <!-- looks like the sellected data gets trough
      <pre>{{this.selected}}</pre>      -->

      <v-form class="pa-10" ref="form" lazy-validation>
        <v-select
          v-model="statusChange"
          :items="statusSlc"
          :rules="[v => !!v || 'Selecione o estado da reserva!']"
          label="Estado da Reserva"
          required
        ></v-select>

        <v-textarea  outlined
          v-model="notificationText"
          name="input-7-4"
          color="indigo darken-1"                 
          placeholder="Escreva alguma notação..."
          :rules="commentRules"          
        ></v-textarea> 

      <v-btn color="indigo lighten" class="white--text" large rounded @click="submit">Adicionar Restaurante</v-btn>
     
     </v-form>
    </v-card>
  </v-dialog>
  
</template>

<script>
export default {
 name: "ChangeStatusRes",
props:["selected"],
data: () => ({
    
    
    dialog: false,

    statusSlc:['Aceite', 'Recusado'],

    statusChange:"",
    notificationText:"",
    

    commentRules:[
        v => !!v || 'Por favor preencha escreva a sua experiencia',
        v => (v && v.length >= 30) || 'Tem de ter mais de 30 caracteres',
    ],
    
  }),
  

methods: {
    submit () {


  
      if (this.$refs.form.validate()) {

        this.dialog=false

        //conditions for the status change , if true then it will go to the storage and change that data

        if(this.statusChange ==='Aceite' ){
          this.selected.status = true
        }        
        // if false it will get eliminated from the storage
        /* 
        if(this.statusChange === 'Recusado'){
          
        }*/

        /* for this you will CHANGE the data of already existing data, use select to find the data of the reservation

        this.$store.commit("ADD_RESTAURANT",{
          id: this.$store.getters.getLastRestaurantId,
          name: this.name,
          description: this.description,
          outDoor: this.outDoor,
          parking: this.parking,
          location: this.location,
          outDoorCheck: this.outDoorCheck,
          parkingCheck: this.parkingCheck
        })*/



    
        
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  },

  computed: {
    form(){
      return{
        // search about this part
        name: this.name,
        description: this.description,
        outDoor: this.outDoor,
        parking: this.parking,
        location: this.location

      }
    }
   
  }
}
</script>