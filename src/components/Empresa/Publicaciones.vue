<template>
    <div class="contenedor">
        <h4>Nueva Publicacion</h4>
        
        <div class="contenedor-card">
           <div class="card card-1">
             <h5>Crear Publicacion</h5>
             <div class="card-input mb-5">
                <div  class="correo" >
                    <label for="">Nombre de la publicacion:</label>
                    <input class="form-control"  type=" text">
                  </div>
               <div class="d-flex input-flex" >
                  <div>
                    <label for="">Modalidad</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Seleccione...</option>
                        <option value="1">Remoto</option>
                        <option value="2">Presencial</option>
                    </select>
                  </div>
                  <div>
                    <label for="">Vacantes :</label>
                    <input class="form-control"  type=" text">
                </div>
               </div>
              
               <div class="correo">
                  <label for="">Descripcion:</label>
                  <input class="form-control"  type=" text">
               </div>
             </div>
            
            <div class="card-boton">
              <button>Crear Publicacion</button>
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
      width: 65%;
    }
    .card-1 h5{
      margin-bottom: 25px;
      margin-top: 25px;
      
    }
    
    .input-flex{
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 25px;
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
      width: 100%;
     
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
      width: 100%;
    }
   
  
    .card-1 p{
      font-weight: 300;
      font-size: 15px;
     text-align: justify;
     margin-bottom: 20px;
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
      width: 33%;
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