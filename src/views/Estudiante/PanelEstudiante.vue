<template>
    <div>
      <div class="contenedor ">
        <Menu class="menu position-fixed " @cambiopagina="cambiopagina"/>
        <div class="contenedor-nav-main">
          <Nav class="sticky-top" />
          <Main v-if="page=='inicio'"  />
          <Perfil v-if="page=='perfil'"  />
          <Oferta v-if="page=='oferta'"  @cambiopagina="cambiopagina" />
          
        </div>
     
      </div>

    </div>
  
</template>

<script>
import Nav from '../../components/Estudiante/Nav.vue'
import Menu from '../../components/Estudiante/Menu.vue'
import Main from '../../components/Estudiante/Main.vue'
import Perfil from '../../components/Estudiante/Perfil.vue'
import Oferta from '../../components/Estudiante/Oferta.vue'

export default {
 name:'PanelEmpresa',
 components:{
   Nav,
   Menu,
   Main,
   Perfil,
   Oferta
 
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