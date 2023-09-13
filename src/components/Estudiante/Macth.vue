<template>
  <div class="contenedor">
    <h4>Mis Matches</h4>
    <div class="contenedor-card d-flex">
      <div class="card contenedor-card1">
        <h5>Mis Matchs</h5>
        <div v-for="item in dataMatches">
          <h3>{{item.pratice_obj.company.name
}}</h3>
          <h5>
            {{item.pratice_name}}
          </h5>
          <p>
            {{item.pratice_obj.descripcion}}
          </p>
          <p>{{item.practice_obj}}</p>
          <button type="button" class="btn btn-danger btn-icon" @click="mtdBeforeDelete(item[0].id)" >
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
        <div v-if="dataMatches.leght==0">
          <h5>Aun no haz hecho match</h5>
        </div>
      </div>
      <div class="card contenedor-card2">
        <h5>Configura tu Perfil</h5>
        <img src="../../assets/perfil.png" alt="" class="mx-auto" />
        <p>
          ¡Estás a punto de convertirte en un candidato excepcional!. Las
          empresas valoran tus habilidades de manera muy positiva. Ahora es el
          momento de perfeccionar tu perfil y resaltar tus Habilidades.
        </p>
        <button @click="cambiopagina('perfil')">Mejorar Perfil</button>
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
      dataMatches: [],
      match:{
        id:null,
      },
      filter:{
        type:'student',
        valueFilter:this.$store.getters.get__student.id,
      },
    };
  },
  created() {
    this.user = this.$store.getters.get__student.name;
    this.user_lastname = this.$store.getters.get__student.last_name;
    this.mtdGetData();
  },
  methods: {
    ...mapActions(["get", "post"]),
    cambiopagina(page) {
      this.$emit("cambiopagina", page);
    },
    mtdGetData: function () {
      //Posibles match
      this.post({
        url: this.$store.getters.get__url + "/match/myMatches",
        token: this.$store.getters.get__token,
        params: this.filter,
      })
        .then((response) => {
          this.dataMatches = response.data;
          console.log(this.dataMatches);
        })
        .catch((errors) => {});
    },
    
    //metodo previo a la eliminación
    mtdBeforeDelete: function (id) {
      this.match.id = id;
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
        url: this.$store.getters.get__url + "/match/destroy",
        token: this.$store.getters.get__token,
        params: this.match,
      })
        .then((response) => {
          // Si la eliminación fue exitosa, mostrar una alerta de éxito.
          Swal.fire({
            title: "¡Eliminado!",
            text: "Tu match ha sido eliminado.",
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
  width: 70%;
  padding: 20px 30px;
}

.contenedor-card2 {
  width: 29%;
  padding: 20px 30px;
  height: 395px;
}

.contenedor-card1 h5 {
  margin-bottom: 15px;
  font-weight: 400;
}

.contenedor-card1 div {
  border-top: 1px solid #000000;
  padding: 15px 0px;
}

.contenedor-card1 p {
  font-size: 14px;
  text-align: justify;
}

.contenedor-card1 button {
  border: none;
  width: 200px;
  color: white;
  padding: 4px 0px;
  border-radius: 5px;
}

.contenedor-card2 img {
  width: 120px;
  height: 120px;
  margin-bottom: 10px;
  margin-top: 10px;
}

.contenedor-card2 p {
  font-size: 13px;
  text-align: justify;
}

.contenedor-card2 button {
  border: none;
  background: #1f618d;
  color: white;
  padding: 7px 0px;
  border-radius: 25px;
}

.contenedor-card2 button:hover {
  background: #1a5276;
}
</style>
