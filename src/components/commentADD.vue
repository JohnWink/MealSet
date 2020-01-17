<template>
    <v-container>
        <v-row  >
            
            <v-col cols="12" >
                <v-textarea  outlined
                 name="input-7-4"
                 color="indigo darken-1"                 
                 placeholder="Escreva a sua experiencia..."
                 :rules="commetRules"
                 v-model="commentText"
                ></v-textarea>
                
            </v-col>
            <v-col cols="12">
                <v-row justify="space-between" >
                    <v-col cols="12" sm="3" >
                        <v-rating v-model="rating"  background-color="orange lighten-3" color="orange" medium></v-rating>
                    </v-col>
                    
                    <v-col cols="12" sm="2">
                        <v-btn large rounded color="#f7c23e" @click="submit" dark v-on="on">Avaliar</v-btn>
                    </v-col>
                </v-row>
                
            </v-col>
            

        </v-row>

    </v-container>
    
</template>



<style>
    #comment{
        border-radius: 20px;
    }
</style>

<script>
export default {
  name: "commentAdd",
  data: () => ({       
    checker: "border: solid red;",
    //default to show emphty

    rating:3,
    commentText:"",


    //rules for comment/evaluation submitions

    commetRules:[
        v => !!v || 'Por favor preencha escreva a sua expeciencia',
        v => (v && v.length >= 50) || 'Tem de ter mais de 50 caracteres',
    ],

    //the user id and restaurant id will be needed
    promp:[]


    

  }),
  methods: {
      //method when clicked on the button
      submit(){
          

             // let setDate = new Date()
            //  let postDate = setDate.getDate() +"/"+ setDate.getMonth() +"/"+ setDate.getFullYear() +"  "+ setDate.getHours()
             /*  from the user registration exampe to help up has reference

            this.$store.commit("ADD_COMMENT",{
            restaurantd: this.$store.getters.getLastUserId,
            username: this.username,
            password: this.password,
            email:this.email,
            });

            this.$router.replace("/")
            */

        

      }
  }
};
</script>