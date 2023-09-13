<template>
  <div class="contenedor">
    <h4>Datos de la Empresa</h4>

    <div class="contenedor-card">
      <div class="card card-1">
        <h5>Datos Empresa</h5>
        <div class="card-input">
          <div class="d-flex input-flex">
            <div class="">
              <label for="name">Nombre de la empresa:</label>
              <input id="name" name="name" type=" text" v-model="company.name" />
            </div>
            <div class="">
              <label for="ruc">Ruc:</label>
              <input id="ruc" name="ruc" type=" text" v-model="company.ruc" />
            </div>
          </div>
          <div class="d-flex input-flex">
            <div>
              <label for="direccion">Direccion:</label>
              <input id="direccion" name="direccion" type=" text" v-model="company.address" />
            </div>
            <div>
              <label for="phone">Telefono:</label>
              <input id="phone" name="phone" type=" tel" v-model="company.phone" />
            </div>
            <div class="correo">
              <label for="correo">Correo:</label>
              <input id="correo" name="correo" type=" email" v-model="company.correo" />
            </div>
          </div>
          <div class="d-flex input-flex">
            <div><h5>Areas</h5><br></div>
            
            <ul class="list-group">
              <div v-for="item in areas">
                <li class="list-group-item">{{item}}</li>
              </div>
  
</ul>
          </div>
        </div>
        <h5>Cambiar Contraseña</h5>
        <p>
          Para actualizar la contraseña de esta cuenta debera ingresar la
          contraseña actual, una nueva y volverla a escribir. En caso que no
          desee actualizarla debe dejar los 3 campos vacios
        </p>
        <div class="d-flex input-flex-2">
          <div class="">
            <label for="password">Contraseña Actual:</label>
            <input id="password" name="password" type="password" v-model="company.password" />
          </div>
          <div class="">
            <label for="password1">Contraseña Nueva:</label>
            <input id="password1" name="password1" type="password" />
          </div>
          <div class="">
            <label for="">Repita contraseña Nueva:</label>
            <input id="password2" name="password2" type="password" />
          </div>
        </div>
        <div class="card-boton">
          <button @click="mtdEditCompay(company.id)">Actualizar</button>
        </div>
      </div>
      <div class="card card-2 text-center">
        <div class=" ">
          <img src="../../assets/empresa.png" class="mx-auto mb-3" alt="" />
          <h5 class="text-white mb-2">{{ user }}</h5>
          <p class="text-white">{{ company.correo }}</p>
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
      company: {
        id: this.$store.getters.get__company.id,
        ruc: "",
        address: "",
        correo: "",
      },
    };
  },
  created() {
    this.user = this.$store.getters.get__company.name;
    this.mtdGetData(this.$store.getters.get__company.id);
  },
  methods: {
    ...mapActions(["get", "post"]),
    mtdGetData: function (id) {
      this.get({
        url: this.$store.getters.get__url + "/company/" + id + "/show",
        token: this.$store.getters.get__token,
      })
        .then((response) => {
          this.company = response.company;
          this.areas = response.areas;
          //console.log(response.company);
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
.contenedor {
  font-family: "Open Sans", sans-serif;
  padding: 25px 40px;
}

.contenedor h4 {
  color: #1f618d;
  border-bottom: 1px solid #1f618d;
  padding-bottom: 15px;
  margin-bottom: 30px;
}

.contenedor-card {
  width: 93%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.card-1 {
  padding: 30px 40px;
}

.card-1 {
  width: 70%;
}

.card-1 h5 {
  margin-bottom: 25px;
  margin-top: 25px;
}

.input-flex {
  justify-content: space-between;
  flex-wrap: wrap;
}

.input-flex div {
  width: 49%;
  margin-bottom: 20px;
}

.input-flex label {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}

.input-flex input {
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #000000;
}

.input-flex input:focus {
  outline: none;
}

.correo {
  margin-bottom: 10px;
}

.correo label {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}

.correo input {
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #000000;
}

.correo input {
  outline: none;
}

.card-1 p {
  font-weight: 300;
  font-size: 15px;
  text-align: justify;
  margin-bottom: 20px;
}

.input-flex-2 {
  justify-content: space-between;
  flex-wrap: wrap;
}

.input-flex-2 {
  margin-bottom: 80px;
}

.input-flex-2 label {
  display: block;
  width: 100%;
  margin-bottom: 10px;
}

.input-flex-2 input {
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #000000;
}

.input-flex-2 input:focus {
  outline: none;
}

.card-boton {
  display: flex;
  justify-content: flex-end;
}

.card-boton button {
  background: #1f618d;
  color: #ffffff;
  border: none;
  width: 200px;
  height: 40px;
  border-radius: 10px;
}

.card-boton button:hover {
  background: rgb(31, 97, 141, 0.9);
}

.card-2 {
  width: 29%;
  height: 400px;
}

.card-2 div {
  height: 300px;
  background: #1f618d;
  padding: 50px;
}

.card-2 div img {
  height: 100px;
}
</style>
