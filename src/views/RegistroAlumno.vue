<template>
  <div>
    <div class="contenedor ">
          <div  class="  contendor-img">
          <h2>Esta es tu oportunidad</h2>
           <img src="../assets/img-estudiante.jpg" alt="" class="img-estudiante d-flex">
          </div>
          <div class="contenedor-formulario ">
            <h3>Create una cuenta </h3>
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
            <label for=""> CODIGO:  </label>
            <input type="text">
          </div>
          <div>
            <label for=""> CORREO  </label>
            <input type="text">
          </div>
          <div>
            <label for=""> HABILIDADES  </label>
            <input type="text">
          </div>
          <div>
            <label for=""> CICLO  </label>
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
    created() {
    // Cambia el color de fondo del body cuando se crea este componente
    document.body.style.backgroundColor =  '#ABB2B9'; // Cambia esto al color deseado
  },
  beforeDestroy() {
    // Restaura el color de fondo del body cuando se destruye el componente
    document.body.style.backgroundColor = 'white'; // Cambia esto al color predeterminado
  }
}
</script>

<style scoped >

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
 width: 55%;
 margin: 0 auto;
}
.contenedor-formulario{
    text-align: left;
    width: 49%;
    background: rgb(213, 230, 241,0.3) ;
    margin: 0px 40px;
    padding: 50px 40px;
  
}
.contenedor-formulario h3{
    margin-bottom: 20px;
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
    margin-bottom: 50px;
    color: #FFFFFF;
    font-weight: 600;
}



</style>