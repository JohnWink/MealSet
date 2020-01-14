<template >
  <p>comment section in progress</p> <!--just to test if it picks up-->





</template>


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
      ]

  })
};
</script>