<template>
  <div class="contenedor">
    <h4>Tus publicaciones</h4>
    <div class="contenedor-card d-flex">
      <div class="contenedor-card1">
        <div class="card contenedor-card1-texto">
          <div class="d-flex">
            <div>
              <h3>{{ user }}</h3>
              <p>{{ ruc }}</p>
            </div>
            <div>
              <img src="../../assets/empresa.png" alt="" />
            </div>
          </div>
        </div>
        <div class="card contenedor-card1-botones">
          <button @click="cambiopagina('publicacion')">
            Nueva Publicacion
          </button>
          <button @click="cambiopagina('perfil')">Perfil</button>
          <button @click="cambiopagina('match')">Mis Match</button>
        </div>
      </div>
      <div class="card contenedor-card2">
        <h5>Ofertas de practicas Publicadas</h5>
        <div class="texto" v-for="item in dataPractices">
          <div>
            <div>
              <h5>{{ item.name }}</h5>
              <p>{{ item.descripcion }}</p>
            </div>
            <p>{{ item.date }}</p>
          </div>
          <div class="d-flex">
            <img src="../../assets/work.png" alt="" />
            <div class="">
              <p>{{ item.modalidad }}</p>
              <p>Vacantes: {{ item.vacant }}</p>
              <button type="button" class="btn btn-warning btn-icon mx-1">
                <i class="fas fa-edit"></i>
              </button>
              <button
                type="button"
                class="btn btn-danger btn-icon"
                @click="mtdBeforeDelete(item.id)"
              >
                <i class="fas fa-trash-alt"></i>
              </button>
              <!--<button class="match">Ver Match</button>-->
            </div>
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
      user: null,
      ruc: null,
      dataPractices: [],
      Practice: {
        id: "",
      },
      modal: "add",
      filter: {
        type: "company",
        valueFilter: this.$store.getters.get__company.id,
        labelFilter: "id_company",
        id: this.$store.getters.get__company.id,
      },
    };
  },
  created() {
    this.user = this.$store.getters.get__company.name;
    this.ruc = this.$store.getters.get__company.ruc;
    this.mtdGetData();
  },
  methods: {
    ...mapActions(["get", "post"]),
    cambiopagina(page, type) {
      this.$emit("cambiopagina", page, type);
    },
    mtdGetData: function () {
      this.post({
        url: this.$store.getters.get__url + "/practice/filter",
        token: this.$store.getters.get__token,
        params: this.filter,
      })
        .then((response) => {
          this.dataPractices = response.data;
          //console.log(response.data);
        })
        .catch((errors) => {});
    },
    //metodo previo a la eliminación
    mtdBeforeDelete: function (id) {
      this.Practice.id = id;
      console.log(id);
      Swal.fire({
        title: "¿Estás seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar",
        width: "400px",
      }).then((result) => {
        if (result.isConfirmed) {
          this.mtdDeleteData();
        }
      });
    },
    mtdDeleteData: function () {
      this.post({
        url: this.$store.getters.get__url + "/practice/destroy",
        token: this.$store.getters.get__token,
        params: this.Practice,
      })
        .then((response) => {
          // Si la eliminación fue exitosa, mostrar una alerta de éxito.
          Swal.fire({
            title: "¡Eliminado!",
            text: "El registro ha sido eliminado.",
            icon: "success",
            width: "400px",
            confirmButtonColor: "rgb(170, 2, 95)",
          }).then(() => {
            this.mtdGetData();
          });
        })
        .catch((errors) => {
          Swal.fire(
            "¡Error!",
            "Hubo un problema al eliminar el registro.",
            "error"
          );
        });
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
  justify-content: space-between;
  flex-wrap: wrap;
}

.contenedor-card1 {
  width: 40%;
}

.contenedor-card1-texto {
  padding: 20px 30px;
  margin-bottom: 10px;
}

.contenedor-card1-texto .d-flex {
  justify-content: space-between;
  flex-wrap: wrap;
}

.contenedor-card2 {
  width: 59%;
  padding: 20px 30px;
}

.contenedor-card1-botones button {
  border: none;
  text-align: left;
  padding: 10px 20px;
  background: white;
}

.contenedor-card1-botones button:hover {
  background: #f2f3f4;
}

.contenedor-card2 .texto {
  justify-content: space-between;
  border-top: 0.5px solid #000000;
  padding-top: 15px;
  flex-wrap: wrap;
  padding-bottom: 15px;
}

.contenedor-card2 h5 {
  margin-bottom: 15px;
}

.contenedor-card2 .d-flex {
  justify-content: space-between;
}

.contenedor-card2 .d-flex p {
  margin: 5px;
  font-size: 14px;
  font-weight: 400;
}

.contenedor-card2 .d-flex img {
  width: 90px;
}

.contenedor-card2 .d-flex .match {
  border: none;
  background: red;
  width: 150px;
  color: white;
  border-radius: 5px;
  padding: 7px 0px;
}

.contenedor-card2 .d-flex .match:hover {
  background: #c0392b;
}

.contenedor-card2 p {
  text-align: justify;
  font-weight: 400;
}

.texto p {
  font-size: 14px;
}
</style>
