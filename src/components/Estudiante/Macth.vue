<template>
  <div class="contenedor">
    <h4>Macth del Estudiante</h4>
    <div class="contenedor-card d-flex">
      <div class="card  contenedor-card1">
           <h5>Mis Postulaciones</h5>
           <div >
            <h5>Analista Programador RPA, Inteligencia Artificial con Node JS y Python</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Perspiciatis perferendis aut exercitationem maiores cumque. 
              Iusto ea numquam, reprehenderit ad quia laboriosam sapiente
              dolor minus alias, libero soluta, voluptatum magni nam!
            </p>   
            <p>2023-09-08</p> 
            <button >Ver Informacion</button>            
           </div>
           <div >
            <h5>Analista Programador RPA, Inteligencia Artificial con Node JS y Python</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Perspiciatis perferendis aut exercitationem maiores cumque. 
              Iusto ea numquam, reprehenderit ad quia laboriosam sapiente
              dolor minus alias, libero soluta, voluptatum magni nam!
            </p>   
            <p>2023-09-08</p> 
            <button >Ver Informacion </button>            
           </div>
    
      </div>
      <div class="card contenedor-card2">
        <h5> Configura tu Perfil</h5>
        <img src="../../assets/perfil.png" alt="" class="mx-auto">
        <p> ¡Estás a punto de convertirte en un candidato excepcional!. 
          Las empresas valoran tus habilidades de manera muy positiva.
           Ahora es el momento de perfeccionar tu perfil y resaltar tus Habilidades.
        </p>
        <button @click="cambiopagina('perfil')" >Mejorar Perfil</button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      page:null
    }
   },
   methods:{
       cambiopagina(page){
        this.$emit('cambiopagina',page)
       
       }
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
  height: 395px;
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
</style>