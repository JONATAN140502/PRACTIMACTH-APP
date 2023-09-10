<template>
    <div>
      <div class="contenedor d-flex">
        <Menu class="menu" @cambiopagina="cambiopagina"/>
        <div class="contenedor-nav-main">
          <Nav />
          <Main v-if="page=='inicio'"  />
          <Perfil v-if="page=='perfil'"  />
          <Oferta v-if="page=='oferta'"  />
          <Match v-if="page=='match'"  />
        </div>
     
      </div>

    </div>
  
</template>

<script>
import Nav from '../../components/Empresa/Nav.vue'
import Menu from '../../components/Empresa/Menu.vue'
import Main from '../../components/Empresa/Main.vue'
import Perfil from '../../components/Empresa/Perfil.vue'
import Oferta from '../../components/Empresa/Oferta.vue'
import Match from '../../components/Empresa/Macth.vue'

export default {
 name:'PanelEmpresa',
 components:{
   Nav,
   Menu,
   Main,
   Perfil,
   Oferta,
   Match
 },
      data(){
      return{
        page:'inicio'
      }
     },

     methods:{
        cambiopagina:function(page){
          this.page=page;
        }
     }
  

}
</script>

<style scoped>
.contenedor{
  width: 100%;
}
.menu{
  width: 16%;
  
}
.contenedor-nav-main{
  width: 84%;
}

 
</style>