<template>
    <div>
        <button class="m-2" @click="retornar">Retornar</button>
        <h1 class="w-100">Cuerpo 2</h1>
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
       retornar(){
        this.$emit('retornar')
       }
   }
}
</script>