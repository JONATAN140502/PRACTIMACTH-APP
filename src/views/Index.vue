<template>
<div>
  <Nav/>
  <Cuerpo2 v-if="page=='home'" @cambiopagina="cambiopagina"/>
  <Cuerpo v-if="page=='cuerpo'" @retornar="retornar" />
  <Footer/>
</div>
</template>
<script>
import Nav from '../components/Nav.vue'
import Cuerpo2 from '../components/Cuerpo2.vue'
import Cuerpo from '../components/Cuerpo.vue'
import Footer from '../components/Footer.vue'
export default{
    name: 'Index',
    components: {
      Nav,
      Cuerpo2,
      Cuerpo,
      Footer
    },

    data(){
      return{
        page:'home'
      }
     },

     methods:{
        cambiopagina:function(page){
          this.page = page;
       },
       retornar:function(){
          this.page='home'
       }
     }


}


</script>