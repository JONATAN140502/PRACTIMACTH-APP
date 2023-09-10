<template>
<div>

  <Cuerpo2 v-if="page=='home'" @cambiopagina="cambiopagina"/>
  <Cuerpo v-if="page=='cuerpo'" @retornar="retornar"  />
  <Cuerpo3 v-if="page=='cuerpo3'"/>
  <Footer/>
  
</div>
</template>
<script>

import Cuerpo2 from '../components/Cuerpo2.vue'
import Cuerpo from '../components/Cuerpo.vue'
import Footer from '../components/Footer.vue'
import Cuerpo3 from '../components/Cuerpo3.vue'
export default{
    name: 'Index',
    components: {

      Cuerpo2,
      Cuerpo,
      Footer,
      Cuerpo3
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