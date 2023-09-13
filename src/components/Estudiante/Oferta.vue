<template>
   <div class="contenedor">
      <h4>Publicaciones de la Empresa</h4>
      <div class="contenedor-card d-flex">
         <div class="contenedor-card1" v-if="!mostrarMatch">
            <div class="card contenedor-card1-texto">
               <div class="d-flex">
                  <div>
                     <h3>{{ user }}</h3>
                     <p>{{ user_lastname }}</p>
                  </div>
                  <div>
                     <img src="../../assets/educacion.png" alt="">
                  </div>
               </div>
            </div>
            <div class="card contenedor-card1-botones ">
               <button @click="cambiopagina('perfil')">Perfil</button>
               <button @click="cambiopagina('match')">Mis Postulaciones</button>

            </div>
         </div>

         <div class="card contenedor-card2" :class="{ 'reducido': mostrarMatch }">
            <h5>Con estas ofertas puedes hacer Match {{ user }}</h5>
            <div class="texto" v-for="item in dataPractices">
               <div>
                  <div>
                     <h3>{{ item.name }}</h3>
                     <h5>{{ item.descripcion }}</h5>
                     <p>{{ item.modalidad}} </p>
                  </div>
                  <p>{{ item.date }}</p>

               </div>
               <div class="d-flex">

                  <div class="">
                     <button @click="mtdListOferta(item.id)">Ver informacion</button>
                  </div>
               </div>

            </div>
            <div class="texto text-center" v-if="dataPractices.length==0">
               <h5>No hay sugerencias, completa tu perfil</h5>
               <button  class="mejorar-perfil" @click="cambiopagina('perfil')" >Mejorar Perfil</button>
            </div>



         </div>
         <div class=" card contenedor-card3" v-if="mostrarMatch">
            <h5>Más informacion</h5>
            <div class="texto">
               <div>
                  <div>
                     <h3>{{ practice.company.name }}</h3>
                     <h5>{{practice.name}}</h5>
                     <p>L{{practice.descripcion}}</p>
                  </div>
                  <p>{{practice.data}}</p>

               </div>
               <div class="d-flex">
                  <img src="../../assets/work.png" alt="">
                  <div class="">
                     <p>{{practice.modalidad}}</p>
                     <p>V{{practice.vacant}}</p>
                     <button>Hacer Mactch</button>
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
         firstClick: true,
         mostrarMatch: false,
         page: null,
         dataPractices:[],
         filter:{
            id:this.$store.getters.get__student.id,
            
         },
         practice:{
            name:null,
            modalidad:null,
         }
      }
   },
   created() {
      this.user = this.$store.getters.get__student.name;
      this.user_lastname = this.$store.getters.get__student.last_name;
      this.mtdGetData();
   },
   methods: {
      ...mapActions(['get', 'post']),
      cambiopagina(page) {
         this.$emit('cambiopagina', page)

      },
      mtdGetData: function () {
         //this.filter.valueFilter=id;
          this.post({
                url: this.$store.getters.get__url + "/match/filterPractices",
                token: this.$store.getters.get__token,
                params: this.filter,
            }).then((response) => {
                this.dataPractices = response;
                console.log(response);
            })
                .catch((errors) => { });
      },
      mtdListOferta: function (id) {
         if (this.firstClick) {
            this.mostrarMatch = !this.mostrarMatch;
            this.firstClick = false;
         }
         this.get({
        url: this.$store.getters.get__url + "/practice/" + id + "/show",
        token: this.$store.getters.get__token,
      })
        .then((response) => {
          this.practice = response.data[0];
        })
        .catch((errors) => { });
      }
   }
}
</script>

<style scoped>
.contenedor {
   font-family: 'Open Sans', sans-serif;
   padding: 25px 40px;
}

.contenedor h4 {
   color: #1F618D;
   border-bottom: 1px solid #1F618D;
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

.contenedor-card3 {
   width: 50%;
   padding: 20px 30px;
}

.contenedor-card1-botones button {
   border: none;
   text-align: left;
   padding: 10px 20px;
   background: white;
}

.contenedor-card1-botones button:hover {
   background: #F2F3F4;
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
   width: 80px;
}

.contenedor-card2 .d-flex button {
   border: none;
   background: #1F618D;
   width: 150px;
   color: white;
   border-radius: 5px;
}

.contenedor-card2 .d-flex button:hover {
   background: #1A5276;
}

.contenedor-card2 p {
   text-align: justify;
   font-weight: 400;
}

.reducido {
   width: 49%;
}
.mejorar-perfil{
   border: none;
  background: #1F618D;
  color: white;
  padding: 10px 20px;
  border-radius: 25px;

}
.mejorar-perfil:hover{
   background: #1A5276;
}






.contenedor-card3 .texto {
   justify-content: space-between;
   border-top: 0.5px solid #000000;
   padding-top: 15px;
   flex-wrap: wrap;
   padding-bottom: 15px;
}

.contenedor-card3 h5 {
   margin-bottom: 15px;
}

.contenedor-card3 .d-flex {
   justify-content: space-between;
}

.contenedor-card3 .d-flex p {
   margin: 5px;
   font-size: 14px;
   font-weight: 400;
}

.contenedor-card3 .d-flex img {
   width: 70px;
}

.contenedor-card3 .d-flex button {
   border: none;
   background: red;
   width: 150px;
   color: white;
   border-radius: 5px;
}

.contenedor-card3 .d-flex button:hover {
   background: #C0392B;
}

.contenedor-card3 p {
   text-align: justify;
   font-weight: 400;
}

.texto p {
   font-size: 14px;
}

.contenedor-card1-texto img {
   width: 80px;
}</style>