import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //Array de users
    users:[],

    restaurants:[],

    dishes:[],

    loggedUser:[],

    reservations:[],

    comments:[],

    //variável para a função login
    existUser: false,

    //bool pa dar check se alguém está autenticado
    logged: false,
  },

 

  getters: {

    
    restaurantInfo: state => id => {
      return state.restaurants.find(restaurant =>restaurant.id === id);
    },

    checkLogged: state => state.logged,

    getLoggedUserId: (state) => {

        return state.loggedUser[0].id
      },  
      
      getLoggedUsername:(state) => {
        return state.loggedUser[0].username
      },

      getLoggedUserAvatar:(state) =>{
        return state.loggedUser[0].avatar
      },
   
    
    getComments: state => state.comments,

    getRestaurants: state => state.restaurants,

    getDishes: state => state.dishes,

    getReservations: state => state.reservations,
    
    //get last user Id in array
    getLastUserId: (state)=>{
      if (state.users.length) {
        return 1 + state.users[state.users.length-1].id;
      } else {
        return 0;
      }
    },
    getLastCommentId:(state)=>{
      if(state.comments.length){
        return state.comments[state.comments.length-1].id
      }
    },
    getLastReservationId:(state)=>{
      if (state.reservations.length) {
        return 1 + state.reservations[state.reservations.length-1].id;
      } else {
        return 0;
      }
    },


    getLastRestaurantId:(state)=>{
      if(state.restaurants.length){
        return 1 + state.restaurants[state.restaurants.length-1].id;
      }else{
        return 0;
      }
    },
   
    userInfo: state => state.users,
  },
  
  mutations: {

   initializeStore(state){

      //+++++++++++++++++++++++++++++++++++++++++++++Initialize Users++++++++++++++++++++++++++++++++++++++++++++++++
    if(localStorage.getItem('users')){
      state.users = JSON.parse(localStorage.getItem("users"));
    }else{
      state.users = [
        {
          id:0,
          username: "admin",
          password:"AllHailAdmins666",
          email: "veryImportantAdmin@yourHouse.lol",
          avatar: "https://i.imgur.com/t2Q8O9v.jpg",
          bio: "Sou admin.",
          admin: true,
          restaurantUser: true
        },
        {
          id:1,
          username: "123",
          password:"123",
          email: "123@123.123",
          avatar: "https://i.imgur.com/6txmFi3.png",
          bio: "Sou random.",
          admin: false,
          restaurantUser: false
        },
      ]
      localStorage.setItem("users", JSON.stringify(state.users))
    }

    if(localStorage.getItem('comments')){
      state.comments = JSON.parse(localStorage.getItem('comments'));
    }else{
      state.comments =[
        {
          id:0,
          restaurantId:0,
          name: "username1sd",
          img: require("@/assets/eaters-collective-vOdK_eih7B0-unsplash.jpg"),
          description: "It tastes like gud burger",
          date:"3/7/2020",
          rating: 4
        }
      ]
      localStorage.setItem("comments", JSON.stringify(state.comments))
    }

    if(sessionStorage.getItem("loggedUser")){
      state.loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
      state.logged = true;
    }else{
      state.logged = false;
    }
 //+++++++++++++++++++++++++++++++++++++++++++++Initialize Reservations+++++++++++++++++++++++++++++++++++++++++++++
    if(localStorage.getItem('reservations')){
      state.reservations = JSON.parse(localStorage.getItem("reservations"))
    }

    //+++++++++++++++++++++++++++++++++++++++++++++Initialize Restaurants+++++++++++++++++++++++++++++++++++++++++++++
    if(localStorage.getItem("restaurants")){
      state.restaurants = JSON.parse(localStorage.getItem("restaurants"))
    }else{
      state.restaurants = [
        {
          id:0,
          name:"Chimarrão",
          routerLink:"/restaurant",
          coverImg: require("@/assets/zakaria-zayane-0uAVsDcyD0M-unsplash.jpg"),
          evaluation: 0,
          description:"Chimarrão é mesmo bão",
          outDoor: true,
          parking: true,
          mediumWaitingTime: 20,
          location:"Vila do Conde",
          distance:"5",
          comments: ""
        },
        {
          id:1,
          name:"Cascasta",
          routerLink:"/restaurant",
          coverImg: require("@/assets/tae-in-kim-jivmv9hE6bM-unsplash.jpg"),
          evaluation: 0,
          description:"Cascata é mesmo barata",
          outDoor: false,
          parking: false,
          mediumWaitingTime: 20,
          location:"Vila do Conde",
          distance:"8",
          comments: ""
        },
        {
          id:2,
          name:"Rochedo",
          routerLink:"/restaurant",
          coverImg: require("@/assets/lily-banse--YHSwy6uqvk-unsplash.jpg"),
          evaluation: 0,
          description:"Rochedo, sabe bem!",
          outDoor: false,
          parking: false,
          mediumWaitingTime: 20,
          location:"Vila do Conde",
          distance:"10",
          comments: ""
        },
        {
          id:3,
          name:"Dona Maria",
          routerLink:"/restaurant",
          coverImg: require("@/assets/jason-leung-poI7DelFiVA-unsplash.jpg"),
          evaluation: 0,
          description:"Dona Maria, comer lá quem não queria!",
          outDoor: false,
          parking: false,
          mediumWaitingTime: 4,
          location:"Vila do Conde",
          distance:"20",
          comments: ""
        },
        {
          id:4,
          name:"ESHT",
          routerLink:"/restaurant",
          coverImg: require("@/assets/daan-evers-tKN1WXrzQ3s-unsplash.jpg"),
          evaluation: 0,
          description:"Tão bom como o nome sugere",
          outDoor: false,
          parking: false,
          mediumWaitingTime: 4,
          location:"Vila do Conde",
          distance:"30",
          comments: ""
        },
        {
          id:5,
          name:"Su",
          routerLink:"/restaurant",
          coverImg: require("@/assets/zakaria-zayane-0uAVsDcyD0M-unsplash.jpg"),
          evaluation: 0,
          description:"Sempre Unidos",
          outDoor: false,
          parking: false,
          mediumWaitingTime: 4,
          location:"Vila do Conde",
          distance:"40",
          comments: ""
        }

      ]

      localStorage.setItem("restaurants", JSON.stringify(state.restaurants))

      
    }
//++++++++++++++++++++++++++++++++++++++++++++++++++Initialize Dishes++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    if(localStorage.getItem("dishes")){
      state.dishes = JSON.parse(localStorage.getItem("dishes"))
    }else{
      state.dishes = [{
        id:0,
        name: "Polvo",
        img: require("@/assets/purple-and-brown-food-on-white-surface-921361.jpg"),
        description:
          "Polvo com batata assada gostosa.",
        restaurantId: 0,
        evaluation: 4
      },
      {
        id:1,
        name: "Salmão",
        img: require("@/assets/salmon-518032_1920.jpg"),
        description:
          "Salmão é que é bom.",
          restaurantId: 0,
        evaluation: 5
      },
      {
        id:2,
        name: "Legumes Salteados",
        img: require("@/assets/sliced-vegetable-and-cooked-food-on-white-ceramic-plate-1234535.jpg"),
        description:
          "Legumes salteados são fixolas.",
          restaurantId: 2,
        evaluation: 3
      },
      {
        id:3,
        name: "Novilho",
        img: require("@/assets/asparagus-2169305_1920.jpg"),
        description:
          "Novilho é noice.",
        restaurantId: 2,
        evaluation: 2
      },
      {
        id:4,
        name: "Cheeseburger",
        img: require("@/assets/cheeseburger-on-table-2089717.jpg"),
        description:
          "Cheeseburger é okay para quem gosta.",
        restaurantId: 2,
        evaluation: 2
      },
      {
        id:5,
        name: "Bife",
        img: require("@/assets/selective-focus-photography-of-beef-steak-with-sauce-675951.jpg"),
        description:
          "Batata a murro é fine, bife é que já na vai.",
        restaurantId: 2,
        evaluation: 2
      }
      ]
      localStorage.setItem("dishes",JSON.stringify(state.dishes))
    }
    
   },

   ADD_RESTAURANT(state,payload){
     if(!state.restaurants.some(restaurant => restaurant.name === payload.name)){
      state.restaurants.push({
        id: payload.id,
        name:payload.name,
        description:payload.description,
        outDoor: payload.outDoor,
        parking: payload.parking,
        location: payload.location,
        coverImg: '../assets/lily-banse--YHSwy6uqvk-unsplash.jpg',
      });
      localStorage.setItem("restaurants", JSON.stringify(state.restaurants))
     }
   },
    
    ADD_USER(state, payload) {
    //check se email já está registado
    if (!state.users.some(user => user.email === payload.email)) {
      if(!state.users.some(user =>user.username === payload.username )){

      
        //adicionar novo user ao array
          state.users.push({
          id: payload.id,
          avatar: payload.avatar,
          username: payload.username,
          password:payload.password,
          email: payload.email,
          admin: false
        });

        localStorage.setItem("users", JSON.stringify(state.users))
  /*
        //user agora está registado e o login é feito
        state.loggedUser.id = payload.id;
        state.loggedUser.username = payload.username;
        state.loggedUser.profilePic =
          "https://i.ytimg.com/vi/zQ4LiyFF8RU/hqdefault.jpg";

        state.logged = true;
  */
        alert("Registado");

        //levar user pra pagina inicial?
      }else{
        alert("Username Já Utilizado")
      }
    }else {
      alert("E-MAIL JÁ REGISTADO");
    }


  },
  ADD_COMMENT(state,payload){
    state.comments.push({
      id: payload.id,
      restaurantId: payload.restaurantId,
      name: payload.name,
      img: payload.avatar,
      description: payload.description,
      date: payload.date,
      rating: payload.rating
    })
    localStorage.setItem("comments" ,JSON.stringify(state.comments))
  },
  CALCULATE_RESTAURANT_RATING(state,payload){
    let averageRating = 0
    let counter = 0
    let restaurantId = payload.restaurantId
   
    for(let i = 0; i < state.comments.length; i++){
      if(state.comments[i].restaurantId == restaurantId){
        averageRating += state.comments[i].rating
        counter += 1
      }
    }

    averageRating = averageRating / counter
    state.restaurants[restaurantId].evaluation = Math.round(averageRating)

    localStorage.setItem("restaurants", JSON.stringify(state.restaurants))
  },
  ADD_RESERVATION(state,payload){
    state.reservations.push({
      id: payload.id,
      userId: payload.userId,
      restaurantId: payload.restaurantId,
      name: payload.name,
      peopleNumber: payload.peopleNumber,
      mealTime: payload.mealTime,
      mealDate: payload.mealDate,
      status: payload.status
    })

    localStorage.setItem("reservations", JSON.stringify(state.reservations))
  },
 
  LOGIN(state,payload){

    for (const user of state.users) {
      if (
        user.username === payload.username &&
        user.password === payload.password
      ) {
      state.loggedUser.push({
        id: user.id,
        username: user.username,
        avatar: user.avatar,
        email: user.email,
        password: user.password,
        admin: false
      })
      
        sessionStorage.setItem(
          "loggedUser",
          JSON.stringify(state.loggedUser)
        );
        alert("LOGIN");

        state.existUser = true;
       
      }
    }

    if (state.existUser === false) {
      alert("Credenciais Inválidas");

    } else if(state.existUser===true) {
      state.existUser = false;
      state.logged = true;
    }

  },

  LOGOUT(state) {
    state.loggedUser = [];
    state.logged = false;
    sessionStorage.setItem("loggedUser",JSON.stringify(state.loggedUser))
  },
  
 
},
  actions: {},
  modules: {}
});
