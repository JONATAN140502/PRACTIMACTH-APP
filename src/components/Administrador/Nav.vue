<template>
  <div>
    <nav class="contenedor ">
      <div class="contenedor-img">
        <img src="../../assets/icono.png" alt="">
      </div>
     
      <div class="contenedor-texto">
        <h3>Panel Administrador </h3>
        <p>Hola Luis, Bienvenido a PractiMacth</p>
      </div>
      

    </nav>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
    .contenedor{
      font-family: 'Open Sans', sans-serif;
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.60);
    
    }

    .contenedor-img{
      background:#1C2833 ;
      padding: 4px 20px;
    }

    .contenedor-img img{
      height: 40px;
    }
    .contenedor-texto{
      background: #D5D8DC;
      padding: 5px 20px;
    }
     .contenedor-texto h3{
      font-weight: 600;
     }
     .contenedor-texto p{
      margin-bottom: 0px;
      font-weight: 300;
     }
</style>