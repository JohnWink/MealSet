import Vue from "vue";
import VueRouter from "vue-router";





Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    name:"landingPage",
    component:()=>
    import("@/views/LandingPage.vue")
  },
  
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
 
  
  {
    path:"/restaurant",
    name: "restaurant",
    component:() =>
      import("../views/RestaurantPage.vue")
  },
  {
    path:"/guestPage",
    name:"guestpage",
    component:() => import("../views/GuestPage")
  }
];

const router = new VueRouter({  
  routes
});

export default router;
