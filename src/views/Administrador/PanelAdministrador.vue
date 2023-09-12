<template>
    <div>
      <div class="contenedor ">
        <Menu class="menu position-fixed " @cambiopagina="cambiopagina"/>
        <div class="contenedor-nav-main">
          <Nav class="sticky-top" />
          <Main v-if="page=='inicio'"  />
          <Perfil v-if="page=='perfil'"  />
          <Empresa v-if="page=='empresa'"  />
          <Estudiante v-if="page=='estudiante'"  />
        </div>
     
      </div>

    </div>
  
</template>

<script>
import Nav from '../../components/Administrador/Nav.vue'
import Menu from '../../components/Administrador/Menu.vue'
import Main from '../../components/Administrador/Main.vue'
import Perfil from '../../components/Administrador/Perfil.vue'
import Empresa from '../../components/Administrador/Empresa.vue'
import Estudiante from '../../components/Administrador/Estudiante.vue'

export default {
 name:'PanelEmpresa',
 components:{
   Nav,
   Menu,
   Main,
   Perfil,
   Empresa,
   Estudiante
   
 
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