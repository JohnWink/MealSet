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
  
     //variável para a função login
  existUser: false,

  //bool pa dar check se alguém está autenticado
  logged: false,
  },

 

  getters: {

    checkLogged: state => state.logged,

    getRestaurants: state => state.restaurants,
    
    //get last user Id in array
    getLastUserId: (state)=>{
      if (state.users.length) {
        return 1 + state.users[state.users.length-1].id;
      } else {
        return 0;
      }
    },
   
    userInfo: state => state.users,
  },
  
  mutations: {

   initializeStore(state){
    if(localStorage.getItem('users')){
      state.users = JSON.parse(localStorage.getItem("users"));
    }else{
      state.users = [
        {
          id:0,
          username: "admin",
          password:"AllHailAdmins666",
          email: "veryImportantAdmin@yourHouse.lol",
          admin: true
        }
      ]
      localStorage.setItem("users", JSON.stringify(state.users))
    }

    if(localStorage.getItem("restuarants")){
      state.restaurants = JSON.parse(localStorage.getItem("restaurants"))
    }else{
      state.restaurants = [
        {
          id:0,
          name:"Chimarrão",
          routerLink:"/restaurant",
          coverImg: require("@/assets/zakaria-zayane-0uAVsDcyD0M-unsplash.jpg"),
          evaluation: 5,
          description:"Chimarrão é mesmo bão",
          outDoor: false,
          parking: false,
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
          evaluation: 6,
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
          evaluation: 2,
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
          evaluation: 2,
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
          evaluation: 7,
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
          evaluation: 4,
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

    if(localStorage.getItem("dishes")){
      state.dishes = JSON.parse(localStorage.getItem("dishes"))
    }else{
      state.dishes = [{
        id:0,
        name: "Polvo",
        img: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        restaurantId: 0,
        evaluation: 4
      },
      {
        id:1,
        name: "Bacalhau",
        img: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          restaurantId: 0,
        evaluation: 5
      },
      {
        id:2,
        name: "Legumes Salteados",
        img: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          restaurantId: 2,
        evaluation: 3
      },
      {
        id:3,
        name: "Novilho",
        img: "",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        restaurantId: 2,
        evaluation: 2
      }
      ]
      localStorage.setItem("dishes",JSON.stringify(state.dishes))
    }
    
   },
    
    ADD_USER(state, payload) {

      /*
      if(localStorage.getItem('users')){
        state.users = JSON.parse(localStorage.getItem("users"));
      }
    */

    //check se email já está registado
    if (!state.users.some(user => user.email === payload.email)) {
      if(!state.users.some(user =>user.username === payload.username )){

      
        //adicionar novo user ao array
          state.users.push({
          id: payload.id,
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
 
  LOGIN(state,payload){

    for (const user of state.users) {
      if (
        user.username === payload.username &&
        user.password === payload.password
      ) {
      state.loggedUser.push({
        id: user.id,
        username: payload.username,
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
