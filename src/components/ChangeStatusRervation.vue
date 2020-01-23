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

      <v-form class="pa-10" ref="form" v-model="valid" lazy-validation>
        <v-select
          v-model="select"
          :items="status"
          :rules="[v => !!v || 'Selecione o estado da reserva!']"
          label="Estado da Reserva"
          required
        ></v-select>

        <v-textarea  outlined
          name="input-7-4"
          color="indigo darken-1"                 
          placeholder="Escreva alguma notação..."
          :rules="commentRules"
          v-model="commentText"
        ></v-textarea> 

      <v-btn color="indigo lighten" class="white--text" large rounded @click="submit">Adicionar Restaurante</v-btn>
     
     </v-form>
    </v-card>
  </v-dialog>
  
</template>

<script>
export default {
 name: "ChangeStatusRes",

data: () => ({
    
    
    dialog: false,

    status:['Aceite', 'Recusado'],

    commentRules:[
        v => !!v || 'Por favor preencha escreva a sua experiencia',
        v => (v && v.length >= 30) || 'Tem de ter mais de 30 caracteres',
    ],
  
  }),
  

methods: {
    submit () {

/* TO upload images
 
      if (!this.chosenFile) {this.data = "No File Chosen"}
      var reader = new FileReader();
      
      // Use the javascript reader object to load the contents
      // of the file in the v-model prop
      reader.readAsDataURL(this.chosenFile);
     
      reader.onload = () => {
        
        this.data = reader.result;
      }
*/
  
      if (this.$refs.form.validate()) {

        this.dialog=false

        if(this.outDoorSelection === 'Sim'){
          this.outDoor = true
        }else{
          this.outDoor = false
        }

        if(this.parkingSelection === 'Sim'){
          this.parking = true
        }else{
          this.parking = false
        }

        this.$store.commit("ADD_RESTAURANT",{
          id: this.$store.getters.getLastRestaurantId,
          name: this.name,
          description: this.description,
          outDoor: this.outDoor,
          parking: this.parking,
          location: this.location,
          outDoorCheck: this.outDoorCheck,
          parkingCheck: this.parkingCheck
        })



    
        
      }
    },
    reset() {
      this.$refs.form.reset();
    },


    	onFilePicked (e) {
			const files = e.target.files
			if(files[0] !== undefined) {
				this.imageName = files[0].name
				if(this.imageName.lastIndexOf('.') <= 0) {
					return
				}
				const fr = new FileReader ()
				fr.readAsDataURL(files[0])
				fr.addEventListener('load', () => {
					this.imageUrl = fr.result
          this.imageFile = files[0] // this is an image file that can be sent to server...
        
        })
        
          
          localStorage.setItem("coverImg" , JSON.stringify(this.imageFile))
			} else {
				this.imageName = ''
				this.imageFile = ''
				this.imageUrl = ''
			}
		}
  },

  computed: {
    form(){
      return{
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