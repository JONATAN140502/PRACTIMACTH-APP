<template>
  <div class="contenedor">
    <h4>Match de {{user}}</h4>
    <div class="contenedor-card d-flex">
      <div class="card  contenedor-card1">
           <h5>Mis Match</h5>
           <div v-for="item in dataPractices" >
            <h5>{{item.name}}</h5>
            <p>{{ item.descripcion }}
            </p>   
            <p>{{item.date}}</p> 
            <button >Ver Macth</button>            
           </div>
    
      </div>
      <div class="card contenedor-card2">
        <h5>  Publicaciones de Ofertas</h5>
        <img src="../../assets/cierre.png" alt="" class="mx-auto">
        <p>¡ crear o edita tus ofertas de prácticas con Practimatch! 
          Y nos encargaremos de descubrir y atraer a jóvenes talentos prometedores que encajen perfectamente 
          con tus ofertas de prácticas.
        </p>
        <button @click="cambiopagina('publicacion')">Crear Publicacion</button>
      </div>

    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data(){
    return{
      page:null,
      dataMatch:[],
      dataPractices:[],
      filter:{
        type:"company",
        valueFilter: this.$store.getters.get__company.id ,
        labelFilter: "id_company",
        id: this.$store.getters.get__company.id,
      }
    }
   },
   created() {
        this.user = this.$store.getters.get__company.name;
        this.ruc = this.$store.getters.get__company.ruc;
        this.mtdGetData();
    },
   methods:{
    ...mapActions(['get', 'post']),
       cambiopagina(page){
        this.$emit('cambiopagina',page)
       
       },
       mtdGetData: function () {

            this.post({
                url: this.$store.getters.get__url + "/practice/filter",
                token: this.$store.getters.get__token,
                params: this.filter,
            }).then((response) => {
                this.dataPractices = response.data;
                //console.log(response.data);
            })
                .catch((errors) => { });
        },
   }
}
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
  justify-content: space-between;
  flex-wrap: wrap;
 }
 .contenedor-card1{
  width: 70%;
  padding:20px 30px;

 }
 .contenedor-card2{
  width: 29%;
  padding:20px 30px;
  height: 350px;
 }
 .contenedor-card1 h5{
  margin-bottom: 15px;
  font-weight: 400;
 }

 .contenedor-card1 div {
   border-top: 1px solid #000000;
   padding: 15px 0px;
 }
 .contenedor-card1 p{
  font-size: 14px;
  text-align: justify;
 }
 .contenedor-card1 button{
   border: none;
   width: 200px;
   color: white;
   background: green;
   padding: 4px 0px;
   border-radius: 5px;
 }

 .contenedor-card1 button:hover{
  background: #145A32;
 }
 .contenedor-card2 img{
    width: 120px;
    height: 120px;
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
</style>