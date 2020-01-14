<template>    
    
    <v-container>
        <v-row id="comment" v-for="comment in comments" :key="comment" justify="space-between" align="center" :style="checker">
            <v-col cols="4" class="mx-4">{{comment.name}} {{comment.date}}</v-col>

            <!--method to calculate and print the rate stars and empthy stars-->
            <v-col  cols="2">
                <div v-html="rateprint(comment.evaluation)"></div>
                
                


                
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
  name: "commentReview",
  data: () => ({
      comments:[
        {
            name: "username1",
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
      checker:"border: solid red"
      


    }),
    methods:{
        rateprint: function(rate){
            
            let rateCode = ""
            for(let i=0;i<rate;i++){
                rateCode += `<i style="color:gold" class="fas fa-star"></i> `

            }      
            
            if (rate<5){

                for(let i=0;i<rate-5;i++){
                rateCode += `<i class="fas fa-star"></i> `

                } 
            }

            return rateCode;
            
        }

    },
};
</script>