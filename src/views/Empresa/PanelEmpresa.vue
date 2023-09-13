<template>
    <div>
      <div class="contenedor ">
        <Menu class="menu position-fixed " @cambiopagina="cambiopagina"/>
        <div class="contenedor-nav-main">
          <Nav class="sticky-top" />
          <Main v-if="page=='inicio'"  />
          <Perfil v-if="page=='perfil'"  />
          <Oferta v-if="page=='oferta'"  @cambiopagina="cambiopagina" />
          <Match v-if="page=='match'"   @cambiopagina="cambiopagina"/>
          <Publicacion v-if="page=='publicacion'"  />
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
import Publicacion from '../../components/Empresa/Publicaciones.vue'
export default {
 name:'PanelEmpresa',
 components:{
   Nav,
   Menu,
   Main,
   Perfil,
   Oferta,
   Match,
   Publicacion
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
  background:#F2F3F4 ;
  height: 100vh;
}

.menu{
  width: 16%;
}

.contenedor-nav-main{
  margin-left: 16%;
  width: 84%;
  height: 100%;
}

 
</style>