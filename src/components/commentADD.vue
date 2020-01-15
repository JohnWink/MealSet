<template>
    <v-container>
        <v-row  >
            
            <v-col cols="12" >
                <v-textarea  outlined
                 name="input-7-4"
                 color="indigo darken-1"                 
                 placeholder="Escreva a sua experiencia..."
                ></v-textarea>
                
            </v-col>
            <v-col cols="12">
                <v-row justify="space-between" >
                    <v-col cols="12" sm="3" >
                        <v-rating v-model="rating" background-color="orange lighten-3" color="orange" medium></v-rating>
                    </v-col>
                    
                    <v-col cols="12" sm="2">
                        <v-btn large rounded color="#f7c23e" dark v-on="on">Avaliar</v-btn>
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
    newRate:[{
        newComment: "",
        rating: "3",
        username: "",
        date: ""
    }],

  })
};
</script>