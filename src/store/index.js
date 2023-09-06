import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from "./actions";
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url:"http://practi-back.test/api", // local
    //url: "https://clinicaback.devmiguelrevilla.com/api/v1", // nube dev
    // url: "https://bmback.howertpi.com/api/v1", // nube howert
    token:null,
    user: {
      id: null,
      name: null,
      email: null,
      last_name: null,
      document_type: null,
      dni: null,
      password: null,
      rol_id: null,
      state: null,
      roles: [],
      permissions: [],
    },
    company:{
      name:null ,
        ruc:null  ,
        correo:null  ,
        business_name:null  ,
        address:null  ,
        district:null  ,
        province:null  ,
        department:null  ,
        phone:null  ,
        descripcion:null ,
        valoration:null ,       
        state:null 
    },
    student:{
      name:null,
      last_name:null,
      code:null,
      dni:null,
      correo:null,
      phone:null,
      id_school:null,
      skills:null,
      state:null,
      cicle:null,
      

    },

    dataCampus:[],
    campus:null
  },
  getters: {
    get__url(state){
      return state.url;
    },
    get__token(state){
      return state.user.token;
    },
    get__user(state){
      return state.user;
    },
    get__campus(state){
      return state.campus;
    },
    get__company(state){
      return state.company;
    },
    get__student(state){
      return state.student;
    },
  },
  mutations: {
    /** auth */
    mt_set_company(state,payload) {
      state.company = payload;
    },
    mt_set_student(state,payload) {
      state.student = payload;
    },
    mt_set_refresh(state , user) {
      state.user = user;
    },
    mt_logout_auth(state){
      state.user= {
        id: null,
        name: null,
        email: null,
        last_name: null,
        document_type: null,
        dni: null,
        password: null,
        rol_id: null,
        // campu_id: null,
        // departure_id: null,
        state: null,
        roles: [],
        permissions: [],
      };
    },
    mt_set_datacampus(state,payload){
      state.dataCampus = payload;
    },
    mt_set_campus(state,payload){
      state.campus = payload;
    }
  },
  actions,
  modules: {
  },
  plugins: [
    createPersistedState({
      reducer: (persistedState) => {
          const stateFilter = JSON.parse(JSON.stringify(persistedState));
          return stateFilter;
      }
  })
    
  ]
})

