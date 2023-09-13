<template>
  <div class="contenedor">
      <div class="d-flex">
         <div class="card  "  style="background:#A93226  ;">
          hola
         </div>
         <div class="card" style="background:#5DADE2   ;" >
          hola
         </div>
         <div class="card" style="background:#52BE80  ;" >
          hola
         </div>
         <div class="card" style="background:#ABB2B9  ;" >
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
    border: none;
  }
</style>