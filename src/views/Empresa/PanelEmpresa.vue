<template>
    <div>
      <div class="contenedor d-flex">
        <Menu class="menu"/>
        <div class="contenedor-nav-main">
          <Nav/>
          <Main/>
        </div>
     
      </div>

    </div>
  
</template>

<script>
import Nav from '../../components/Empresa/Nav.vue'
import Menu from '../../components/Empresa/Menu.vue'
import Main from '../../components/Empresa/Main.vue'
export default {
 name:'PanelEmpresa',
 components:{
   Nav,
   Menu,
   Main
 }

}
</script>

<style scoped>
.contenedor{
  width: 100%;
}
.menu{
  width: 20%;
  
}
.contenedor-nav-main{
  width: 80%;
}

 
</style>