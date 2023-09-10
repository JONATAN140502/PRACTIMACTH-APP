<template>
  <div class="contenedor">
    <h4>Publicaciones de la Empresa</h4>
    <div class="contenedor-card d-flex">
        <div class="contenedor-card1">
            <div class="card contenedor-card1-texto">
                <div class="d-flex">  
                    <div>
                        <h3>Empresa Soft</h3>
                        <p>20484850632</p>
                    </div>
                    <div>
                        <img src="../../assets/empresa.png" alt="">
                    </div>
                </div>
            </div>
            <div class="card contenedor-card1-botones ">
                <button>Nueva Publicacion</button>
                <button >Perfil</button>
                <button>Mis Match</button>
              
            </div>
        </div>
        <div class="card contenedor-card2">
            <h5>Ofertas Publicas</h5>
            <div class="d-flex">
                <div > 
                    <div>
                        <h5>Analista Programador RPA, Inteligencia Artificial con Node JS y Python</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Perspiciatis perferendis aut exercitationem maiores cumque. 
                            Iusto ea numquam, reprehenderit ad quia laboriosam sapiente
                            dolor minus alias, libero soluta, voluptatum magni nam!</p>
                    </div>
                    <p>2023-09-08</p>

                </div>
                <div>
                    <img src="../../assets/work.png" alt="">
                </div>

            </div>
            <div class="d-flex">
                <div> 
                    <div>
                        <h5>Analista Programador RPA, Inteligencia Artificial con Node JS y Python</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Perspiciatis perferendis aut exercitationem maiores cumque. 
                            Iusto ea numquam, reprehenderit ad quia laboriosam sapiente
                            dolor minus alias, libero soluta, voluptatum magni nam!</p>
                    </div>
                    <p>2023-09-08</p>

                </div>
                <div>
                    <img src="../../assets/work.png" alt="">
                </div>

            </div>
            
        </div>
    </div>
  </div>
</template>

<script>
export default {

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
 .contenedor-card1-botones button{
    border: none;
    text-align: left;
    padding: 10px 20px;
    background: white;
 }
 .contenedor-card1-botones button:hover{
    background:#F2F3F4 ;
 }
 .contenedor-card2 .d-flex{
    justify-content: space-between;
    border-top: 0.5px solid #000000;
    padding-top: 15px;
    flex-wrap: wrap;
 }
 .contenedor-card2 h5{
    margin-bottom: 15px;
 }


</style>