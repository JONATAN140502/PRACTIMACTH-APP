<template>
  <div class="contenedor">
      <h4> Datos de la Empresa</h4>
      
      <div class="contenedor-card">
         <div class="card card-1">
           <h5>Datos Empresa</h5>
           <div class="card-input">
             <div  class="d-flex input-flex">
                <div  class="" >
                  <label for="">Nombre de la empresa:</label>
                  <input type=" text">
                </div>
                <div  class="">
                  <label for="">Ruc:</label>
                  <input type=" text">
                </div>
             </div>
             <div class="d-flex input-flex" >
                <div>
                  <label for="">Direccion:</label>
                  <input type=" text">
                </div>
                <div>
                  <label for="">Telefono:</label>
                  <input type=" text">
              </div>
             </div>
            
             <div class="correo">
                <label for="">Correo:</label>
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
         <div class="card card-2 text-center">
           <div class=" ">
              <img src="../../assets/empresa.png"  class="mx-auto mb-3 " alt="">
              <h5 class="text-white mb-2">Emppresa Soft</h5>
              <p class="text-white">empresasoft@gmail.com</p>
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
  .card-2{
    width: 29%;
    height: 400px;
   
  }
  .card-2 div{
    height: 300px;
    background: #1F618D;
    padding: 50px;
  }
  .card-2 div img{
    height: 100px;
  }

  

</style>