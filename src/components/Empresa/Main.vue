<template>
  <div class="contenedor">
      <div class="d-flex">
         <div class="card  "  style="background:#BB8FCE  ;">
          hola
         </div>
         <div class="card" style="background:#BB8FCE  ;" >
          hola
         </div>
         <div class="card" style="background:#BB8FCE  ;" >
          hola
         </div>
         <div class="card" style="background:#BB8FCE  ;" >
          hola
         </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .contenedor{
    font-family: 'Open Sans', sans-serif;
    padding: 60px 50px;
  }
  .contenedor div{
    justify-content: space-evenly;
    flex-wrap: wrap;
   
  }
  .contenedor div .card{
    width: 24%;
    height: 200px;
  }
</style>