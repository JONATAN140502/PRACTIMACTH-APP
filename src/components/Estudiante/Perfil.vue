<template>
  <div class="contenedor">
      <h4> Perfil del Estudiante</h4>
      
      <div class="contenedor-card">
         <div class="card card-1">
           <h5>Datos Personales</h5>
           <div class="card-input">
                <div  class="correo" >
                  <label for="">Nombre y Apellidos:</label>
                  <input type=" text">
                </div>
             <div  class="d-flex input-flex">
                <div  class="">
                  <label for="">Dni:</label>
                  <input type=" text">
                </div>
                <div  class="">
                  <label for="">Codigo:</label>
                  <input type=" text">
                </div>
             </div>
             <div class="d-flex input-flex" >
                
                <div>
                  <label for="">Ciclo Academico:</label>
                  <input type=" text">
                </div>
                <div>
                  <label for="">Escuela Profesional:</label>
                  <input type=" text">
                </div>

             </div>
              <div class="d-flex input-flex" >
                <div>
                  <label for="">Telefono:</label>
                  <input type=" text">
                </div>
                <div class="correo">
                  <label for="">Correo:</label>
                  <input type=" text">
                </div>
             </div>
            
             <div class="correo">
                  <label for="">Usuario:</label>
                  <input type=" text">
             </div>

           </div>
           <h5>Cambiar Contraseña</h5>
           <p>Para actualizar la contraseña de esta cuenta debera ingresar la contraseña actual, 
            una nueva y volverla a escribir. En caso que no desee actualizarla debe dejar los 3 campos 
            vacios
          </p>
          <div  class="d-flex input-flex-2">
                <div  class="" >
                  <label for="">Contraseña Actual:</label>
                  <input type=" text">
                </div>
                <div  class="">
                  <label for="">Contraseña Nueva:</label>
                  <input type=" text">
                </div>
                <div  class="">
                  <label for="">Repita contraseña Nueva:</label>
                  <input type=" text">
                </div>
          </div>
          <div class="card-boton">
            <button>Actualizar</button>
          </div>
         </div>
         <div class=" card-conte">
           <div class=" card card-2 text-center">
              <img src="../../assets/educacion.png"  class="mx-auto mb-3 " alt="">
              <h5 class="text-white mb-2">Luis Fernando</h5>
              <p class="text-white">Luis@gmail.com</p>
           </div>
            
           <div class="card contenedor-card2">
            <h5> Configura tu Perfil</h5>
            <img src="../../assets/perfil.png" alt="" class="mx-auto">
            <p> ¡Estás a punto de convertirte en un candidato excepcional!. 
              Las empresas valoran tus habilidades de manera muy positiva.
              Ahora es el momento de perfeccionar tu perfil y resaltar tus Habilidades.
            </p>
            <button @click="cambiopagina('perfil')" >Mejorar Perfil</button>
          </div>

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
    padding: 25px 40px;
  }
  .contenedor h4{
    color: #1F618D;
    border-bottom: 1px solid #1F618D;
    padding-bottom: 15px;
    margin-bottom: 30px;
  }

  .contenedor-card{
    width: 93%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .card-1{
    padding: 30px 40px;
  }
  .card-1{
    width: 70%;
  }
  .card-1 h5{
    margin-bottom: 25px;
    margin-top: 25px;
    
  }
  
  .input-flex{
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .input-flex div{
    width: 49%;
    margin-bottom: 20px;
  }
  .input-flex label{
    display: block;
    width: 100%;
    margin-bottom: 10px;
  }
  .input-flex input{
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid #000000;
   
  }
  .input-flex input:focus{
    outline: none;
   
  }
  .correo{
    margin-bottom: 10px;
  }
  .correo label{
    display: block;
    width: 100%;
    margin-bottom: 10px;
  }
  .correo input{
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid #000000;
  }
  .correo input{
    outline: none;
  }

  .card-1 p{
    font-weight: 300;
    font-size: 15px;
   text-align: justify;
   margin-bottom: 20px;
  }
  .input-flex-2 {
    justify-content: space-between;
    flex-wrap: wrap;

  }
  .input-flex-2{
    margin-bottom: 80px;
  }
  
  .input-flex-2 label{
    display: block;
    width: 100%;
    margin-bottom: 10px;
  }
  .input-flex-2 input{
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid #000000;
  }
  .input-flex-2 input:focus{
    outline: none;
  }
  .card-boton{
    display: flex; 
    justify-content: flex-end;
  
  }
  .card-boton button{
    background: #1F618D ;
    color: #FFFFFF;
    border: none;
    width: 200px;
    height: 40px;
    border-radius: 10px;
  }
  .card-boton button:hover{
    background: rgb(31, 97, 141, 0.9) ;
   
  }
  .card-conte{
    width: 29%;
  }
  .card-2{
   
    height: 300px;
   
  }
  .card-2 {
    height: 300px;
    background: #1F618D;
    padding: 50px;
    margin-bottom: 15px;
  }
  .card-2  img{
    height: 100px;
  }

  .contenedor-card2 img{
    width: 120px;
    height: 120px;
    margin-bottom: 10px;
    margin-top: 10px;
 }
 .contenedor-card2 p{
  font-size: 13px;
  text-align: justify;
 }
 .contenedor-card2 button{
  border: none;
  background: #1F618D;
  color: white;
  padding: 7px 0px;
  border-radius: 25px;
 }
 .contenedor-card2 button:hover{
  background: #1A5276;
 }
 .contenedor-card2{
  
  padding:20px 30px;
  height: 395px;
 }

</style>