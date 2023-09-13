<template>
  <div class="contenedor">
      <h4> Perfil del Estudiante</h4>
      
      <div class="contenedor-card">
         <div class="card card-1">
           <h5>Datos Personales</h5>
           <div class="card-input">
                <div  class="correo" >
                  <label for="name">Nombre</label>
                  <input id="name" name="name" type=" text" v-model="student.name" />
                </div>
                <div  class="correo" >
                  <label for="last_name">Apellido</label>
                  <input id="last_name" name="last_name" type=" text" v-model="student.last_name" />
                </div>
             <div  class="d-flex input-flex">
                <div  class="">
                  <label for="dni">Dni:</label>
                  <input id="dni" name="dni" type=" text" v-model="student.dni" />
                </div>
                <div  class="">
                  <label for="code">Codigo:</label>
                  <input id="code" name="code" type=" text" v-model="student.code" />
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
         <div class="card card-2 text-center">
           <div class=" ">
              <img src="../../assets/educacion.png"  class="mx-auto mb-3 " alt="">
              <h5 class="text-white mb-2">{{user}}</h5>
              <p class="text-white">{{student.correo}}</p>
           </div>
         </div>

      </div>
      
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      page: null,
      areas: [],
      specialties: [],
      subspecialties: [],
      knowledges:[],
      student: {
        id: this.$store.getters.get__student.id,
        name:"",
        last_name:"",
        address: "",
        correo: "",
      },
      filter: {
        area: null,
        specialty: null,
        subspecialty: null,
      }
    };
  },
  created() {
    this.user = this.$store.getters.get__student.name;
    this.mtdGetData(this.$store.getters.get__student.id);
  },
  methods: {
    ...mapActions(["get", "post"]),
    mtdGetData: function (id) {
      this.get({
        url: this.$store.getters.get__url + "/student/" + id + "/show",
        token: this.$store.getters.get__token,
      })
        .then((response) => {
          this.student = response.data;
          //this.areas = response.areas;
          console.log(response);
        })
        .catch((errors) => { });
    },
    mtdEditCompay: function () {
      this.post({
        url: this.$store.getters.get__url + "/company/update",
        token: this.$store.getters.get__token,
        params: this.company,
      })
        .then((response) => {
          if (response.state == 0) {
            /** todo correto */
            Swal.fire({
              title: "Modificación Exitosa",
              text: "Perfecto!",
              icon: "success",
              //showConfirmButton: true,
              width: "400px",
              //padding: '50px 0',
              //timer: 2000
              confirmButtonColor: "rgb(170, 2, 95)",
            });
          } else {
          }
        })
        .catch((errors) => { });
    },
  },
};
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