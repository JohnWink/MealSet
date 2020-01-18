<template>
    <v-container>
        <v-row  >
            
            <v-col cols="12" >
                <v-textarea  outlined
                 name="input-7-4"
                 color="indigo darken-1"                 
                 placeholder="Escreva a sua experiencia..."
                 :rules="commentRules"
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

    rating:0,
    commentText:"",


    //rules for comment/evaluation submitions

    commentRules:[
        v => !!v || 'Por favor preencha escreva a sua expeciencia',
        v => (v && v.length >= 50) || 'Tem de ter mais de 50 caracteres',
    ],

    //the user id and restaurant id will be needed
    promp:[]


    

  }),
  methods: {
      //method when clicked on the button
      submit(){
          

             let setDate = new Date()
             let postDate = setDate.getDate() +"/"+ 1 + setDate.getMonth() +"/"+ setDate.getFullYear() +"  "+ setDate.getHours()+ ":" + setDate.getMinutes()

            

            this.$store.commit("ADD_COMMENT",{
            id: this.$store.getters.getLastCommentId,
            restaurantId: parseInt(this.$route.params.id),
            name: this.$store.getters.getLoggedUsername,
            description: this.commentText,
            date:postDate,
            rating:this.rating
            });

            //this.$router.replace("/")
            

        

      }
  }
};
</script>