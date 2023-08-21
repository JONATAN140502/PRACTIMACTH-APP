<template>
  <div>
    <div >
        <h1 class="w-100 "> Cuerpo principal</h1>
        <button class="m-2" @click="cambiopagina('cuerpo')" >Cambiar cuerpo 2</button>
        
    </div>
  </div>
</template>

<script>
export default {
   data(){
    return{
      page:null
    }
   },
   methods:{
       cambiopagina(page){
        this.$emit('cambiopagina',page)
       }
   }
}
</script>

<style scoped>
   


</style>