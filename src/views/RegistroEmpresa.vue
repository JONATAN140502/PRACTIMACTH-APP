<template>
  <div class="contenido">
    <div class="contenedor ">
      <div class="  contendor-img">
        <h2>Esta es tu oportunidad</h2>
        <p>Si eres empresa en busca de estudiantes registrate aqui y enterate de todos talentos
          que tenemos disponibles para ti</p>
        <img src="../assets/svg-empresa.svg" alt="" class="img-estudiante d-flex">
      </div>
      <div class="contenedor-formulario ">
        <h3>Registro Empresa </h3>
        <div class="contenedor-formulario-input">
          <div>
            <label for=""> RUC: </label>
            <input type="text" v-model="company.ruc" v-on:keypress="isNumber($event)" 
            @keyup="mtdSearchDocument"
              maxlength="11" 
              placeholder="RUC">
          </div>

          <div>
            <label for=""> RAZON SOCIAL: </label>
            <input type="text" v-model="company.name">
          </div>
          <div>
            <label for=""> NOMBRE COMERCIAL: </label>
            <input type="text" v-model="company.business_name">
          </div>

          <div>
            <label for=""> CORREO: </label>
            <input type="text" v-model="company.correo">
          </div>
          <div>
            <label for=""> TELEFONO: </label>
            <input type="text" v-model="company.phone">
          </div>
          <div>
            <label for=""> USUARIO</label>
            <input type="text" v-model="company.user_name">
          </div>
          <div>
            <label for=""> CONTRASEÑA</label>
            <input type=" password" v-model="company.password">
          </div>

        </div>

        <button type="button" @click="mtdInsertData()"> Crear Cuenta </button>






      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      company: {
        name: null,
        ruc: null,
        correo: null,
        business_name: null,
        address: null,
        district: null,
        province: null,
        department: null,
        phone: null,
        descripcion: null,
        valoration: null,
        user_name: null,
        password: null,
        state: null,
      },
      document: {
        documento: null
      },
      filter: {
        faculty: null,

      },
      faculties: [],
      schools: []
    }
  },
  created() {
    //this.mtdGetData();

  },

  computed: {

  },
  methods: {
    ...mapActions(["get", "post"]),
    mtdInsertData: function () {
      this.post({
        url: this.$store.getters.get__url + "/company/store",
        params: this.company,
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
            this.$router.push({ path: '/LoginEmpresas' });
          } else {
           
            Swal.fire({
              title: "Registro Fallido",
              text: "Incorrecto!",
              icon: "error",
              width: "400px",
              confirmButtonColor: "red", // Cambia el color a rojo
            });
          }
        })
        .catch((errors) => { });

    },
    mtdSearchDocument: function () {

      if (this.company.ruc.length == 11) {
        console.log("dddddd");
        this.document.documento = this.company.ruc;
        this.post({
          url:
            this.$store.getters.get__url +
            "/consulta/ruc",
          params: this.document,

        })
          .then((response) => {
            console.log(response);
            console.log(this.document);
            if (response.data == null) {
              // this.student.dni="";
              Swal.fire({
                text: 'RUC no encontrado',
                icon: 'warning',
                confirmButtonColor: '#808080',
              });
              // this.limpiardatos();
            } else {
              if (response.data.estado!="ACTIVO"
                 
              ) {
                console.log("inactvo");
                Swal.fire({
                  text: 'Empresa Inactiva',
                  icon: 'warning',
                  confirmButtonColor: '#808080',
                });
              } else {
                this.company.name =response.data.nombre;
                this.company.ruc = response.data.ruc;
                this.company.correo = "";
                this.company.business_name =response.data.nombre;
                this.company.address = response.data.direccion;
                this.company.district = response.data.distrito;
                this.company.province = response.data.provincia;
                this.company.department =response.data.departamento;
                this.company.phone = "";
                this.company.descripcion = "CAMBIAR";
                this.company.valoration = "1";
                this.company.user_name = "";
                this.company.password = "";
                this.company.state = "1";
              }
              
            }
          })
          .catch((errors) => { });
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
    limpiardatos: function () {
      this.company.name = "";
      this.company.ruc = "";
      this.company.correo = "";
      this.company.business_name = "";
      this.company.address = "";
      this.company.district = "";
      this.company.province = "";
      this.company.department = "";
      this.company.phone = "";
      this.company.descripcion = "";
      this.company.valoration = "";
      this.company.user_name = "";
      this.company.password = "";
      this.company.state = "";
    },
  }
}
</script>

<style scoped >
.contenido {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ABB2B9;
}

.contenedor {
  display: flex;
  margin: 0 auto;
  width: 80%;
  height: 650px;
  margin-top: 60px;
  background: #2C3E50;
  font-family: 'Open Sans', sans-serif;

}

.img-estudiante {
  width: 70%;
  margin: 0 auto;
}

.contenedor-formulario {
  text-align: left;
  width: 48%;
  background: rgb(213, 230, 241, 0.3);

  padding: 50px 60px;

}

.contenedor-formulario h3 {
  margin-bottom: 20px;
  font-weight: 600;

}

.contenedor-formulario-input {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 50px;
}

.contenedor-formulario-input input {
  margin-bottom: 20px;
}

.contenedor-formulario label {
  display: block;
  color: #FFFFFF;
}

.contenedor-formulario button {
  width: 80%;
  margin: 0 auto;
  display: block;
  padding: 7px 10px;
  background: #2C3E50;
  color: #FFFFFF
}

.contendor-img {
  width: 49%;
  padding: 40px;
}

.contendor-img h2 {
  text-align: center;
  margin-bottom: 10px;
  color: #2ea2c7e6;
  font-weight: 600;
  margin-top: 10px
}

.contendor-img p {
  color: #FFFFFF;
  padding: 0 20px;
  text-align: justify;
  font-weight: 300;
  margin-bottom: 10px;
}

@media screen and (max-width:1390px) {
  .contenedor {
    height: 548px;
    margin-top: 40px;
  }

  .contenedor-formulario {
    padding: 40px 60px;


  }

  .contendor-img {
    display: none;
  }

  .contenedor-formulario {
    width: 100%;
    margin: 0 auto;
  }

  .contenedor-formulario-input {
    margin-bottom: 13px;
  }

}

@media screen and (max-width:680px) {
  .contenedor {
    width: 100%;
    margin-top: 0px;
    height: 100vh;

  }

  .contenedor-formulario {
    padding: 70px 40px;

  }

  @media screen and (max-width:475px) {
    .contenedor-formulario-input {
      margin-bottom: 15px;

    }

    .contenedor-formulario {
      padding: 15px 40px;

    }

    .contenedor-formulario-input label {
      width: 100%;
    }

    .contenedor-formulario-input input {
      width: 100%;
      margin-bottom: 6px;
      height: 27px;
    }

    .contenedor-formulario button {
      width: 100%;

    }

    .contenedor-formulario h3 {
      margin-bottom: 5px;
      font-weight: 600;
      font-size: 23px;
    }

  }

}</style>