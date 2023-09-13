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
                  <label for="cicle">Ciclo Academico:</label>
                  <input id="cicle" name="cicle" type=" text" v-model="student.cicle" />
                </div>
                <div>
                  <label for="">Escuela Profesional:</label>
                  <input id="school_name" name="school_name" type=" text" v-model="student.school_name" />
                </div>

             </div>
              <div class="d-flex input-flex" >
                <div>
                  <label for="phone">Telefono:</label>
                  <input id="phone" name="phone" type=" text" v-model="student.phone" />
                </div>
                <div class="correo">
                  <label for="">Correo:</label>
                  <input id="correo" name="correo" type=" text" v-model="student.correo" />
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
              <h5 class="text-white mb-2">{{user}}</h5>
              <p class="text-white">{{student.correo}}</p>
           </div>
            
           <div class="card contenedor-card2">
            <h5> Configura tus Habilidades</h5>
            <img src="../../assets/perfil.png" alt="" class="mx-auto">
            <p>  
              Las empresas valoran tus habilidades de manera muy positiva.
              Ahora es el momento de perfeccionar tu perfil y resaltar tus Habilidades.
            </p>
            <button  data-bs-toggle="modal" data-bs-target="#nuevo" >Añadir Habilidades</button>
          </div>

         </div>

      </div>
       <!--modal-->
    
     <div class="modal fade" id="nuevo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content col-sm-11 p-">
                    <div class="modal-header mod-h  ">
                      <h4 class="modal-title  text-white mt-4 mb-2 ml-3  " id="exampleModalLabel"> Registrar Conocimientos</h4>
                      <div style="border: none ;cursor: pointer;" class="close text-white mr-2"  data-bs-dismiss="modal" aria-label="Close">
                        &times;
                      </div>
                    
                    </div>                  
                    <div class="modal-body ">
                      <div class="form-row d-flex mb-3">
                        <div class="form-group ">
                          <label for="inputtext">Areas:</label>
                          <select class="form-select" aria-label="Default select example" v-model="filter.area" @change="mtdSelectArea" >
                            <option selected>---Selecciona--</option>
                            <option v-for="(item, index) in areas" :key="index" :value="item.id">
                  {{ item.name }}
                </option>
                          </select>
                        </div>
                         <div class="form-group ">
                          <label for="inputtext">Especialidades</label>
                          <select class="form-select" name="areas" id="areas" aria-label="Default select example"
                v-model="filter.specialty" @change="mtdSelectSpecialty">
                <option disabled selected value="">Seleccione ...</option>
                <option v-for="(item, index) in specialties" :key="index" :value="item.id">
                  {{ item.name }}
                </option>
              </select>
                        </div>

                      </div>
                      <div class="form-row  mb-3">
                        <div class="form-group ">
                          <label for="inputtext" class="mb-2">Subespecialidades:</label>
                          <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                        

                      </div>
                      <div class=" habilidades ">
                        <label for="inputtext" class="mb-2"  style="display: block;">Habilidades:</label>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                          <label class="form-check-label" for="inlineCheckbox1">PHP</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
                          <label class="form-check-label" for="inlineCheckbox2">JAVA</label>
                        </div>
                      </div>
                      
                         
                       
                        

                      <button  class="btn  btn-block mt-4 mb-4 btn-1 text-white" >Añadir</button>
                                          
                        
                    </div>
                    
                 
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
          this.mtdGetAreas();
        })
        .catch((errors) => { });
    },
    mtdGetAreas:function(){
      this.get({
            url: this.$store.getters.get__url + "/area",
            token: this.$store.getters.get__token,
         }).then((response) => {
            this.areas = response.data;
            console.log(this.areas);
         })
            .catch((errors) => { });
    },
    mtdSelectArea: function () {
      this.areas.forEach((element, index) => {
        if (element.id == this.filter.area) {
          this.specialties = element.specialty;
          this.subspecialties = [];
          //console.log(this.specialties);
        }
      });
    },
    mtdSelectSpecialty: function () {
      this.specialties.forEach((element, index) => {
        if (element.id == this.filter.specialty) {
          this.subspecialties = element.subspecialty;
        }
      });
    },
    mtdSelectSubspecialty: function () {
      this.subspecialties.forEach((element, index) => {
        if (element.id == this.filter.subspecialty) {
          this.knowledges = element.knowledge;
        }
      });
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
.d-flex select{
  width: 215px;
}
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
 .btn-1{
    background: #1F618D;
    width: 100%;
}
.btn-1:hover{
    background:#2A7EB6   ;
}
.mod-h{
    background: #1F618D;
    padding: 8px 40px 15px 40px;
}
.modal-body .d-flex {
  justify-content: space-between;
  flex-wrap: wrap;
}
.modal-body .d-flex label{
 margin-bottom: 8px;
}
.modal-body{
  padding: 30px;
}

</style>