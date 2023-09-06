<template>
  
    <div class="contenedor ">
         <div class="login">
           <img src="../assets/icono.png" alt="">
           <h2>Bienvenido</h2>
           <p class="subtitulo-rol">[ EMPRESA ]</p>
           <div class="login-input">
            <input type="text" placeholder="Ingresa tu usuario">
           </div>
           <div class="login-input">
            <input type="password" placeholder="Ingresa tu contraseña" > 
           </div>    
            <p> <a href=""> Olvidaste tu contraseña?</a></p>
       
            <button> INGRESAR</button>
            <p>Nuevo en PractiMatch? <a href=""> Registrate aqui</a></p>
         </div>
    </div>
  
</template>

<script>
export default {

}
</script >

<style scoped>
.contenedor{
    background: rgba(49, 129, 156, 0.9);
    height: 100vh;
    display: flex;
    justify-content: center;
    width: 100%;
   font-family: 'Open Sans', sans-serif;
padding-bottom: 100px;
}
.login{
   margin-top: 40px;
    height: 80vh;
    background:#FFFFFF;
    text-align: center;
    padding: 40px 50px;

}
.login-input{
    margin-bottom: 20px;
}
.login-input input{
    width: 80%;
    height: 39px;
    border-radius: 50px;
    padding:  4px 20px 4px 20px;
    border: 1px solid  #85929E;
}
.login-input input:focus {
 border-color: #FFFFFF;
}
.login h2{
    margin-bottom: 30px;
    font-weight: 600;
}
.contenedor button{
    width: 80%;
    padding: 10px ;
    border: none;
    background: rgba(46, 162, 199, 0.90);
    color: #FFFFFF;
    border-radius: 50px;
    margin-top: 10px;
    margin-bottom: 12px;
    transition: transform 0.6s ease;
}

.contenedor button:hover,.contenedor button:focus{
    transform: scale(1.05);
}
.subtitulo-rol{
    margin-top: -20px;
    font-size: 17px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
}

@media screen and (max-width:362px){

.login img{
    width: 90%;
}

            
            
        
}

</style>