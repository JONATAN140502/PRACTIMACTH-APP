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
            <input type="text" v-model="student.dni" v-on:keypress="isNumber($event)"  
            @keyup="mtdSearchDocument" maxlength="8" placeholder="">
          </div>
          <div>
            <label for=""> NOMBRE Y APELLIDOS: </label>
            <input type="text" v-model="student.fullName" >
          </div>
         
          
          <div class="correo">
            <label for=""> CORREO: </label>
            <input type="text" v-model="student.correo">
          </div>
          
          <div>
            <label for=""> TELEFONO: </label>
            <input type="text" v-model="student.phone">
          </div>
          <div>
            <label for=""> USUARIO</label>
            <input type="text" v-model="student.user_name">
          </div>
          <div>
            <label for=""> CONTRASEÑA</label>
            <input type="password" v-model="student.password">
          </div>
          <div>
            <label for="">CODIGO UNIVERSITARIO</label>
            <input type="text" v-model="student.code">
          </div>
          <div class="">
            <label for=""> FACULTAD: </label>
            <select class="" v-model="filter.faculty" 
                  @change="mtdSelectFaculty"
                    >
                    <option selected >Seleccione</option>
                      <option
                        v-for="(item, index) in faculties"
                        :key="index"
                        :value="item.id"
                      >
                        {{ item.name }}
                      </option>
                    </select> 
          </div>
          <div>
            <label for=""> ESCUELA:</label>
            <select v-model="student.id_school"   >
                    <option selected >Seleccione </option>
                      <option
                        v-for="(item, index) in schools"
                        :key="index"
                        :value="item.id"
                      >
                        {{ item.name }}
                      </option>
             </select> 
          </div>
          <div>
            <label for="">CICLO</label>
            <select v-model="student.cicle" class="text-center" >
           <option value="0" selected >Seleccionar ciclo académico</option>
            <option value="1">I</option>
            <option value="1">II</option>
            <option value="1">III</option>
            <option value="1">IV</option>
            <option value="1">V</option>
            <option value="1">VI</option>
            <option value="1">VII</option>
            <option value="1">VIII</option>
            <option value="1">IX</option>
            <option value="1">X</option>
             </select>
          </div>
          
        </div>
     <button type="button" @click="mtdInsertData()" > Crear Cuenta </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
   data(){
    return{
      student:{
      name:null,
      user_name:null,
      last_name:null,
      code:null,
      dni:null,
      correo:null,
      phone:null,
      id_school:null,
      password:null,
      skills:null,
      state:null,
      cicle:null,
      fullName:null
    },
    document:{
      documento:null
    },
    filter:{
      faculty:null,

        },
    faculties:[],
    schools:[]
    }
   },
   created() {
    this.mtdGetData();
    
  },

  computed: {
       
    },
    methods: {
    ...mapActions(["get", "post"]),
    //metodo insertar data
    mtdGetData(){
      this.get({
          url: this.$store.getters.get__url +"/faculty",
          params: '',
        }).then((response) => {
          console.log(response.data);
            if (response.data!=null) {
               this.faculties=response.data;
             } 
          })
          .catch((errors) => {});
    },
    mtdSelectFaculty(){
      this.post({
          url: this.$store.getters.get__url + "/faculty/filter",
          params: this.filter,
        }).then((response) => {
            if (response.schools!=null) {
               this.schools=response.schools;
             } 
          })
          .catch((errors) => {});
    },
    mtdInsertData: function () {
        this.post({
          url: this.$store.getters.get__url + "/student/store",
          token: this.$store.getters.get__token,
          params: this.student,
        })
          .then((response) => {
            if (response.state == 0) {
              /** todo correcto **/
              Swal.fire({
                title: "Registro Exitoso",
                text: "Perfecto!",
                icon: "success",
                width: "400px",
                confirmButtonColor: "rgb(170, 2, 95)",
              });
              this.limpiardatos();
              this.$router.push({ path: '/LoginAlumnos' });
            } else {
        console.log(this.student);
              Swal.fire({
              title: "Registro Fallido",
              text: "Incorrecto!",
              icon: "error",
               width: "400px",
               confirmButtonColor: "red", // Cambia el color a rojo
});
            }
          })
          .catch((errors) => {});
     
    },
    mtdSearchDocument: function(){
      if (this.student.dni.length == 8) {
        this.document.documento=this.student.dni;
        this.post({
          url:
            this.$store.getters.get__url +
            "/consulta/dni" ,
            params: this.document,
            
        })
          .then((response) => {
           console.log(response);
           console.log(this.document);
            if (response.data==null) {
              this.student.dni="";
              Swal.fire({
              text:'DNI no encontrado',
              icon:'warning', 
              confirmButtonColor: '#808080',
            });
            this.limpiardatos();
            } else {
              this.student.fullName = response.data.name+" "+response.data.last_name;
              this.student.last_name=response.data.last_name;
              this.student.name=response.data.name;
              this.student.dni=response.data.document;
              this.student.skills="Completar";
            }
          })
          .catch((errors) => {});
      }
    },
   
    isNumber: function (evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    limpiardatos:function(){
      this.student.name="",
      this.student.user_name="",
      this.student.last_name="",
      this.student.code="",
      this.student.dni="",
      this.student.correo="",
      this.student.phone="",
      this.student.id_school="",
      this.student.password="",
      this.student.skills="",
      this.student.state="",
      this.student.cicle="",
      this.student.fullName=""
    },
  }
  
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
    justify-content:space-evenly;
    flex-wrap: wrap;
    margin-bottom: 50px;
}
.contenedor-formulario-input input{
    margin-bottom: 20px;
    width: 210px;
    
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
.contenedor-formulario-input select{
    margin-bottom: 20px;
    width: 210px;
    padding: 2.5px 0;
    
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