<template>
  <div>
    <div >
        <h1 class="w-100 "> Cuerpo principal</h1>
        <button class="m-2" @click="cambiopagina('cuerpo')" >Cambiar cuerpo 2</button>
        <button @click="cambiopagina('cuerpo3')">Cambiar cuerpo 3 </button>
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
        this.$emit('cambiopagina',page),
        console.log(page)
       }
   }
   
}
</script>

<style scoped>
   


</style>