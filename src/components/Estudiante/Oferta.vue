<template>
  <div class="contenedor">
    <h4>Publicaciones de la Empresa</h4>
    <div class="contenedor-card d-flex" >
        <div class="contenedor-card1" v-if="!mostrarMatch">
            <div class="card contenedor-card1-texto">
                <div class="d-flex">  
                    <div>
                        <h3>Luis Fernando</h3>
                        <p>73336257</p>
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
            <h5>Ofertas que encajan con tu Perfil</h5>
            <div class="texto">
                <div > 
                    <div>
                        <h3>Empresa Soft</h3>
                        <h5>Analista Programador RPA, Inteligencia Artificial con Node JS y Python</h5>
                        <p>Modalidad: Presencial </p>
                    </div>
                    <p>2023-09-08</p>

                </div>
                <div class="d-flex">
                   
                    <div class="">
                        <button @click="mtdListOferta()">Ver informacion</button>
                    </div>
                </div>

            </div>
           
           
            
        </div>
        <div class=" card contenedor-card3" v-if="mostrarMatch">
            <h5>Informacion</h5>
            <div class="texto">
                <div > 
                    <div>
                        <h3>Empresa Soft</h3>
                        <h5>Analista Programador RPA, Inteligencia Artificial con Node JS y Python</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Perspiciatis perferendis aut exercitationem maiores cumque. 
                            Iusto ea numquam, reprehenderit ad quia laboriosam sapiente
                            dolor minus alias, libero soluta, voluptatum magni nam!</p>
                    </div>
                    <p>2023-09-08</p>

                </div>
                <div class="d-flex">
                    <img src="../../assets/work.png" alt="">
                    <div class="">
                        <p>Modalidad: Presencial </p>
                        <p>Vacantes: 10</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
    return{
      firstClick: true,
      mostrarMatch: false,
      page:null
    }
   },
   methods:{
       cambiopagina(page){
        this.$emit('cambiopagina',page)
       
       },
       mtdListOferta:function(){
        if (this.firstClick) {
          this.mostrarMatch = !this.mostrarMatch;
          this.firstClick = false;}
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
    width: 40%;

 }
 .contenedor-card1-texto{
    padding:20px 30px;
    margin-bottom: 10px;
 
 }
 .contenedor-card1-texto .d-flex{
    justify-content: space-between;
   flex-wrap: wrap;
  
 }
 

 .contenedor-card2{
    width: 59%;
    padding: 20px 30px;
 }
 .contenedor-card3{
    width: 50%;
    padding: 20px 30px;
 }
 .contenedor-card1-botones button{
    border: none;
    text-align: left;
    padding: 10px 20px;
    background: white;
 }
 .contenedor-card1-botones button:hover{
    background:#F2F3F4 ;
 }
 .contenedor-card2 .texto{
    justify-content: space-between;
    border-top: 0.5px solid #000000;
    padding-top: 15px;
    flex-wrap: wrap;
    padding-bottom: 15px;
 }
 .contenedor-card2 h5{
    margin-bottom: 15px;
 }
 .contenedor-card2 .d-flex{
    justify-content: space-between;
 }
 .contenedor-card2 .d-flex p{
    margin: 5px;
    font-size: 14px;
    font-weight: 400;
 }
 .contenedor-card2 .d-flex img{
    width: 80px;
 }
 .contenedor-card2 .d-flex button{
    border:none;
    background:red ;
    width: 150px;
    color:white;
    border-radius: 5px;
 }
 .contenedor-card2 .d-flex button:hover{
    background:#C0392B ;
 }

 .contenedor-card2 p{
    text-align: justify;
    font-weight: 400;
 }
 .reducido{
    width: 49%;
 }

 




 .contenedor-card3 .texto{
    justify-content: space-between;
    border-top: 0.5px solid #000000;
    padding-top: 15px;
    flex-wrap: wrap;
    padding-bottom: 15px;
 }
 .contenedor-card3 h5{
    margin-bottom: 15px;
 }
 .contenedor-card3 .d-flex{
    justify-content: space-between;
 }
 .contenedor-card3 .d-flex p{
    margin: 5px;
    font-size: 14px;
    font-weight: 400;
 }
 .contenedor-card3 .d-flex img{
    width: 70px;
 }
 .contenedor-card3 .d-flex button{
    border:none;
    background:red ;
    width: 150px;
    color:white;
    border-radius: 5px;
 }
 .contenedor-card3 .d-flex button:hover{
    background:#C0392B ;
 }

 .contenedor-card3 p{
    text-align: justify;
    font-weight: 400;
 }
 .texto p{
    font-size: 14px;
 }
 .contenedor-card1-texto img{
    width: 80px;
 }
</style>