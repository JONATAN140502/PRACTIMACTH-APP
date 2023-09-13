<template>
  <div class="contenedor">
    <div class="d-flex">
      <div class="card  "  style="background:#A93226  ;">
          <span class="s1">10</span>
          <span class="s2">
            <div><i class="fas fa-building"></i></div>
            <div>Empresas matcheadas</div>
          </span>
         </div>
         <div class="card" style="background:#5DADE2   ;" >
          <span class="s1">11</span>
          <span class="s2">
            <div><i class="fas fa-heart-broken"></i></div>
            <div>Posibles matchs</div>
          </span>
         </div>
         <div class="card" style="background:#52BE80  ;" >
          <span class="s1">5</span>
          <span class="s2">
            <div><i class="fas fa-heart"></i></div>
            <div>Match correctos</div>
          </span>
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
    
    padding: 40px 50px;
    flex-wrap: wrap;
  }
  .contenedor div .card span{
  
    color: white;
  }
  .contenedor div .card .s1{
    font-size: 40px;
  }
  .contenedor div .card .s2{
    font-size: 17px;
  }
</style>