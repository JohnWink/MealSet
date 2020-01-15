<template>    
    
    <v-container>
        <v-row  v-for="comment in comments" :key="comment"  >

            <v-card id="comment" elevation="4" class="my-2">
                <v-row  justify="space-between" align="center" id="comment" >

                    <v-col cols="7" class="mx-4">
                        <v-avatar size="60">
                            <img :src="comment.img"
                                alt="user">
                        </v-avatar>                
                        <span class="pl-2"><b>{{comment.name}}  </b>{{comment.date}}</span>
                    </v-col>

                    <!--method to calculate and print the rate stars and empthy stars-->
                    <v-col  cols="3">
                        <div v-html="rateprint(comment.evaluation)"></div>
                    </v-col>

                    <v-col cols="12">
                        <v-row class=" mx-4">{{comment.comment}}</v-row>
                    </v-col >

                </v-row>
            </v-card>
            
            
        </v-row>
    </v-container>
</template>


<style>
    #comment{
        border-radius: 10px;

    }
</style>




<script>
export default {
  name: "commentReview",
  data: () => ({
      comments:[
        {
            name: "username1sd",
            img: require("@/assets/eaters-collective-vOdK_eih7B0-unsplash.jpg"),
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            date:"3/7/2020",
            evaluation: 4
        },
        {
            name: "username2",
            img: require("@/assets/eaters-collective-vOdK_eih7B0-unsplash.jpg"),
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            date:"3/7/2020",
            evaluation: 3
        },
        {
            name: "username3",
            img: require("@/assets/eaters-collective-vOdK_eih7B0-unsplash.jpg"),
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            date:"3/7/2020",
            evaluation: 1
        },
      ],
      checker:"border: solid indigo"
      


    }),
    methods:{
        rateprint: function(rate){
            
            let rateCode = ""
            for(let i=0;i<rate;i++){  rateCode += `<i style="color:gold" class="fas fa-star"></i> ` }     
                        
            let nostar = 5-rate

            for(let i=0;i<nostar;i++)  {rateCode += `<i style="color:BurlyWood" class="fas fa-star"></i> `}             

            return rateCode;
            
        }

    },
};
</script>