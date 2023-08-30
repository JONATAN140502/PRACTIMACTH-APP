<template>
 <div>
   <main class="contenedor d-flex position-relative align-items-center">
     <div class="contenedor-texto text-start text-white">
        <h1 class="titulo">Entra ahora es tu momento </h1>
        <h2 class="subtitulo">Bienvenido a Practi Macth</h2>
        <router-link to="/home" class="cta bg-white text-center rounded-2">Entra ahora</router-link>
     </div>
     <div  class="contenedor-imagen">
        <img src="../assets/data-storage-b 1.svg" alt="" class="img" >
     </div>
     <img src="../assets/Vector 1.svg" alt="" class=" vector position-absolute top-0 end-0">
  </main>

 </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>


 .contenedor{
    background: linear-gradient(90deg, #2B5876 0%, #4E4376 100%);
    /*background: linear-gradient(175deg, rgba(73, 72, 72, 0.59) 0%, rgba(13, 46, 76, 0.50) 100%);*/
    height: 100vh;
   
 }
 .vector{
    width: 50%;
 }
 .contenedor-texto{
    flex-basis: 50%;
    padding-left: 60px;
    overflow: hidden;
    font-family: 'Open Sans', sans-serif;
 }
 .titulo{
    font-size: 60px;
    font-weight:700 ;
 }
 .subtitulo{
    font-size: 30px;
    font-weight:500 ;
    margin: 20px 0;
 }
 .cta{
    display: inline-block;
    width: 150px;
    padding: 15px 0;
    text-decoration: none;
    color: #2B5876;
 }
 .contenedor-imagen{
    flex-basis: 50%;
    position: relative;
    z-index: 1;
    overflow: hidden;
    text-align: center;
 }
 .img{
    animation: ilustracion ease-in 1s infinite alternate;
    width: 95%;
 }
 @keyframes ilustracion{
    0%{
        transform: scale(1);
    }
    100%{
        transform: scale(1.04);
    }
 }

 @media screen and (max-width: 912px){
    .contenedor{
        flex-direction: column-reverse;
    }
    .vector{
        width: 80%;
    }
    .contenedor-texto{
        display: flex;
        padding-left: 0;
        justify-content: center;
        align-items: center;
        flex-basis: 40%;
        flex-direction: column;
        text-align: center;
    }
    .titulo{
        font-size: 40px;
    }
    .subtitulo{
        font-size: 20px;
    }
    .contenedor-imagen{
        flex-basis: 60%;
       width: 100%;
        align-items: center;
        justify-content: center;
        display:flex
    }
    .img{
        height: 98%;
    }
 }

 @media screen and (max-width: 555px){

    .vector{
        height: 48%; 
        width: auto;
    }
    .contenedor-texto{
        flex-basis: 40%;
        justify-content: flex-start;
    }
    .titulo{
        font-size: 30px;
        text-align: center;
    }
 }
</style>