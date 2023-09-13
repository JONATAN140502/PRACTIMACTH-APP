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
            @keyup="mtdSearchDocument" maxlength="8" placeholder="DNI">
          </div>
          <div>
            <label for=""> NOMBRE Y APELLIDOS: </label>
            <input type="text" v-model="student.last_name" >
          </div>
         
          
          <div class="correo">
            <label for=""> CORREO: </label>
            <input type="text" v-model="student.dni">
          </div>
          
          <div>
            <label for=""> TELEFONO: </label>
            <input type="text" v-model="student.dni">
          </div>
          <div>
            <label for=""> USUARIO</label>
            <input type="text" v-model="student.dni">
          </div>
          <div>
            <label for=""> CONTRASEÑA</label>
            <input type=" password" v-model="student.dni">
          </div>
          
        </div>
     <button type="button"> Crear Cuenta </button>
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
      names:null,
      last_name:null,
      code:null,
      dni:null,
      correo:null,
      phone:null,
      id_school:null,
      skills:null,
      state:null,
      cicle:null,
    },
    documento:null
    }
   },
   created() {
    
  },

  computed: {
       
    },
    methods: {
    ...mapActions(["get", "post"]),
    //metodo insertar data
    mtdInsertData: function () {
        this.post({
          url: this.$store.getters.get__url + "/company/store",
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
                //showConfirmButton: true,
                width: "400px",
                //padding: '50px 0',
                //timer: 2000
                confirmButtonColor: "rgb(170, 2, 95)",
              });
              this.dataCategory.push(response.data[0]);
              this.mtdHideModal();
              //this.$refs.modalForm.modal("hide");
            } else {
            }
          })
          .catch((errors) => {});
     
    },
    mtdSearchDocument: function(){
      if (this.student.dni.length == 8) {
        this.documento=this.student.dni;
        this.post({
          url:
            this.$store.getters.get__url +
            "/consulta/dni" ,
            params: this.documento,
            
        })
          .then((response) => {
           console.log(response);

            // if (response.boo == 3) {
            //   this.client.document="";
            //   Swal.fire({
            //   text:'DNI no encontrado',
            //   icon:'warning', 
            //   confirmButtonColor: '#900052',
            // });
            // } else {
            //   this.client.fullName = response.name+" "+response.last_name;
            //   if (response.hasOwnProperty("patient")) {
            //     this.client.celphone=response.patient.phone;
            //     this.client.email=response.patient.email;
            //     this.client.yearOld=response.patient.year;
            //       } else {
            //         this.client.celphone="";
            //     this.client.email="";
            //     this.client.yearOld="";
            //         Swal.fire({
            //   text:'Paciente Nuevo',
            //   icon:'warning', 
            //   confirmButtonColor: '#900052',
            // });
            //       }
             
            // }
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