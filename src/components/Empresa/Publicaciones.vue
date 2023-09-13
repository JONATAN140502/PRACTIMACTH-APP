<template>
  <div class="contenedor">
    <h4>Nueva Oportunidad de prácticas</h4>

    <div class="contenedor-card">
      <div class="card card-1">
        <h5>Crear Publicacion</h5>
        <div class="card-input mb-5">
          <div class="correo">
            <label for="name">Nombre de la publicacion:</label>
            <input class="form-control" v-model="Practice.name" name="name" id="name" type=" text" />
          </div>
          <div class="d-flex input-flex">
            <div>
              <label for="modalidad">Modalidad</label>
              <select class="form-select" name="modalidad" id="modalidad" aria-label="Default select example"
                v-model="Practice.modalidad">
                <option disabled value="">Seleccione ...</option>
                <option value="remoto">Remoto</option>
                <option value="presencial">Presencial</option>
              </select>
            </div>
            <div>
              <label for="workload">Carga de trabajo</label>
              <select class="form-select" name="workload" id="workload" aria-label="Default select example"
                v-model="Practice.workload">
                <option disabled value="">Seleccione ...</option>
                <option value="Medio tiempo">Medio tiempo</option>
                <option value="Por horas">Por horas</option>
              </select>
            </div>
            <div>
              <label for="vacant">Vacantes :</label>
              <input class="form-control" name="vacant" id="vacant" v-model="Practice.vacant" type=" text" />
            </div>
          </div>

          <div class="correo">
            <label for="descripcion">Descripcion:</label>
            <textarea class="form-control" rows="3" v-model="Practice.descripcion" name="descripcion" id="descripcion"
              placeholder="Agrega una breve descripcion de la practica"></textarea>
          </div>
          <hr />
          <h5>Palabras claves</h5>
          <div class="d-flex input-flex">
            <div>
              <label for="areas">Area</label>
              <select class="form-select" name="areas" id="areas" aria-label="Default select example"
                v-model="filter.area" @change="mtdSelectArea">
                <option disabled selected value="">Seleccione...</option>
                <option v-for="(item, index) in areas" :key="index" :value="item.id">
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div>
              <label for="areas">Especialidad</label>
              <select class="form-select" name="areas" id="areas" aria-label="Default select example"
                v-model="filter.specialty" @change="mtdSelectSpecialty">
                <option disabled selected value="">Seleccione ...</option>
                <option v-for="(item, index) in specialties" :key="index" :value="item.id">
                  {{ item.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="d-flex input-flex">
            <div>
              <label for="subSpecialty">Sub Especialidad</label>
              <select class="form-select" name="subSpecialty" id="subSpecialty" aria-label="Default select example"
                v-model="filter.subspecialty" @change="mtdSelectSubspecialty">
                <option disabled selected value="">Seleccione ...</option>
                <option v-for="(item, index) in subspecialties" :key="index" :value="item.id">
                  {{ item.name }}
                </option>
              </select>
            </div>
          </div>
          <!--Palabras claves-->
          <div>
            <label>Palabras claves</label> <br>
            <div class="form-check form-check-inline" v-for="(item,index) in knowledges">
              <input class="form-check-input" type="checkbox"  v-model="Practice.knowledges" v-bind:value="item.id" :key="index" />
              <label class="form-check-label" >{{item.name}}</label>
            </div>
          </div>
        </div>

        <div class="card-boton">
          <button @click="mtdInsertData">Crear Publicacion</button>
        </div>
      </div>
      <div class="card card-2 text-center">
        <div class=" ">
          <img src="../../assets/empresa.png" class="mx-auto mb-3" alt="" />
          <h5 class="text-white mb-2">{{ user }}</h5>
          <p class="text-white">{{ correo }}</p>
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
      user: null,
      ruc: null,
      areas: [],
      specialties: [],
      subspecialties: [],
      knowledges:[],
      Practice: {
        id: "",
        name: "",
        modalidad: "",
        vacant: "",
        descripcion: "",
        workload: "",
        id_company: this.$store.getters.get__company.id,
        knowledges: [],
      },
      Company: {
        id: this.$store.getters.get__company.id,
      },
      filter: {
        area: null,
        specialty: null,
        subspecialty: null,
      },
      //radioConocimientos: [],
    };
  },
  created() {
    this.user = this.$store.getters.get__company.name;
    this.ruc = this.$store.getters.get__company.ruc;
    this.correo = this.$store.getters.get__company.correo;
    this.mtdFilterArea();
  },
  methods: {
    ...mapActions(["get", "post"]),
    cambiopagina(page) {
      this.$emit("cambiopagina", page);
    },
    mtdInsertData: function () {
      this.post({
        url: this.$store.getters.get__url + "/practice/store",
        token: this.$store.getters.get__token,
        params: this.Practice,
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
            }).then(() => {
              //enviar a la lista de ofertas
            //var page='oferta';
            this.$emit('cambiopagina', "oferta");
            });
            
          } else {
            alert("ocurrió un error");
          }
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
    mtdFilterArea: function () {
      this.post({
        url: this.$store.getters.get__url + "/company/filterAreas",
        token: this.$store.getters.get__token,
        params: this.Company,
      })
        .then((response) => {
          this.areas = response.data;
          //console.log(this.areas);
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
  width: 65%;
}

.card-1 h5 {
  margin-bottom: 25px;
  margin-top: 25px;
}

.input-flex {
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 25px;
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
  width: 100%;
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
  width: 100%;
}

.card-1 p {
  font-weight: 300;
  font-size: 15px;
  text-align: justify;
  margin-bottom: 20px;
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
  width: 33%;
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
