import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //Array de users
    users:[],
  },

  getters: {
    //get last user Id in array
    getLastUserId(state) {
      if (!state.users.length) {
        return state.users[state.users.length - 1].id;
      } else {
        return 0;
      }
    },
  },
  
  mutations: {   ADD_USER(state, payload) {
    //check se email já está registado
    if (!state.users.some(user => user.email === payload.email)) {
      //adicionar novo user ao array
        state.users.push({
        id: payload.id,
        username: payload.username,
        email: payload.email,
        admin: false
      });

      //user agora está registado e o login é feito
      state.loggedUser.id = payload.id;
      state.loggedUser.username = payload.username;
      state.loggedUser.profilePic =
        "https://i.ytimg.com/vi/zQ4LiyFF8RU/hqdefault.jpg";

      state.logged = true;

      alert("Registado");

      //levar user pra pagina inicial?
    } else {
      alert("E-MAIL JÁ REGISTADO");
    }
  },},
  actions: {},
  modules: {}
});
