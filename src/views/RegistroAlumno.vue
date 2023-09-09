<template>
  <div class="contenido">
    <div class="contenedor ">
      <div class="  contendor-img">
        <h2>Esta es tu oportunidad</h2>
        <p>Si eres estudiante en busca de practicas laborales registrate aqui y enterate de todas las oportunidades
          que tenemos disponibles para ti</p>
        <img src="../assets/svg-estudiante.svg" alt="" class="img-estudiante d-flex">
      </div>
      <div class="contenedor-formulario ">
        <h3>Registro Estudiante  </h3>
        <div class="contenedor-formulario-input">
          <div>
            <label for=""> DNI </label>
            <input type="text">
          </div>

          <div>
            <label for=""> NOMBRE: </label>
            <input type="text">
          </div>
          <div>
            <label for=""> APELLIDOS: </label>
            <input type="text">
          </div>
          <div>
            <label for=""> CODIGO: </label>
            <input type="text">
          </div>
          <div>
            <label for=""> CORREO </label>
            <input type="text">
          </div>
          <div>
            <label for=""> HABILIDADES </label>
            <input type="text">
          </div>
          <div>
            <label for=""> CICLO </label>
            <input type="text">
          </div>
          <div>
            <label for=""> USUARIO </label>
            <input type="text">
          </div>
          <div>
            <label for=""> CONTRASEÑA</label>
            <input type=" password">
          </div>

        </div>

        <button type="button"> Crear Cuenta </button>






      </div>
    </div>
  </div>
</template>

<script>
export default {
   
}
</script>

<style scoped >
.contenido{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color:#ABB2B9; 
}

.contenedor{
  display: flex;
  margin: 0 auto;
  width: 80%;
  height: 650px;
  margin-top: 60px;
   background: #2C3E50;
   font-family: 'Open Sans', sans-serif;
   
}
.img-estudiante{
 width: 70%;
 margin: 0 auto;
}
.contenedor-formulario{
    text-align: left;
    width: 48%;
    background: rgb(213, 230, 241,0.3) ;
   
    padding: 50px 60px;
   
}
.contenedor-formulario h3{
    margin-bottom: 20px;
    font-weight: 600; 
  
}
.contenedor-formulario-input{
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-bottom: 50px;
}
.contenedor-formulario-input input{
    margin-bottom: 20px;
}
.contenedor-formulario label{
    display: block;
    color: #FFFFFF;
}

.contenedor-formulario button{
    width: 80%;
    margin: 0 auto;
    display: block;
    padding: 7px 10px;
    background:#2C3E50;
    color:#FFFFFF
}
.contendor-img{
    width: 49%;
    padding: 40px; 
}
.contendor-img h2{
    text-align: center;
    margin-bottom: 10px;
    color: #2ea2c7e6;
    font-weight: 600;
    margin-top:10px
}
.contendor-img p{
  color:#FFFFFF;
  padding: 0 20px;
  text-align: justify;
  font-weight: 300;
  margin-bottom: 10px;
}

@media screen and (max-width:1390px){
  .contenedor{
    height: 548px;
    margin-top: 40px;
  }
  .contenedor-formulario{   
    padding: 40px 60px;
   
}
  .contendor-img{
    display: none;
  }
  .contenedor-formulario{
    width: 100%;
    margin: 0 auto;
  }
  .contenedor-formulario-input{
    margin-bottom: 13px;
  }
}
@media screen and (max-width:680px){
  .contenedor{
    width: 100%;
    margin-top: 0px;
    height: 100vh;
    
  }
  .contenedor-formulario{
    padding: 70px 40px;
    
  }
@media screen and (max-width:475px){
  .contenedor-formulario-input{
     margin-bottom: 15px;
  
  }
  .contenedor-formulario{
    padding: 15px 40px;
    
  }
  .contenedor-formulario-input label{
    width: 100%;
  }
  .contenedor-formulario-input input{
    width: 100%;
    margin-bottom: 6px;
    height: 27px;
  }
  .contenedor-formulario button{
    width: 100%;

  }
  .contenedor-formulario h3{
    margin-bottom: 5px;
    font-weight: 600; 
   font-size: 23px;
}
  
}

}

</style>