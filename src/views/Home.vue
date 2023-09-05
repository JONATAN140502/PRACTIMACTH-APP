<template>
    <div >
        <header  >
                <nav  >
                    <router-link to="/" class="text-white a">inicio</router-link>
                    <a href="#" class="text-white a">Acerca de</a>
                    <a href="#" class="text-white a">Portafolio</a>
                    <a href="#" class="text-white a">Servicios </a>
                    <a href="#" class="text-white a">Contacto</a>
                </nav>
                <div class="header-icono ">
                    <img src="../assets/icono.png" alt="" class="inline-block">
                </div >  
                <section class=" texto-header d-flex flex-column text-center align-items-center justify-content-center">
                    <h1 class="text-white">Potencia tus habilidades al 100%</h1>
                    <h2 class="text-white">Con Practi Match</h2>
                </section>
                <div class="wave" style="height: 150px; overflow: hidden; width: 100%" >
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
                        <path d="M-0.00,49.85 C150.00,149.60 349.20,-49.85 500.00,49.85 L500.00,149.60 L-0.00,149.60 Z" style="stroke: none; fill: #FFFFFF;">
                        </path>
                    </svg>
                </div>
                
        </header>
           <main >
            <section class="contenedor m-auto sobre-nosotros ">
               <h2 class="titulo">Nuestro Producto</h2>
               <div class="contenedor-sobre-nosotros d-flex">
                 <img src="../assets/svg-1.svg" alt="" class="imagen-about-us">
                 <div class="contenido-textos text-start">
                    <h4><span class=" text-white">1</span>Personalización de Oportunidades</h4>
                    <p>La plataforma permite a los estudiantes buscar y filtrar
                     oportunidades de prácticas según sus intereses, habilidades y metas profesionales.
                    </p>
                    <h4><span class=" text-white" >2</span>Proceso de selección optimizado</h4>
                    <p>Para las empresas, la plataforma facilita el proceso de identificación y 
                       reclutamiento de jóvenes talentos para prácticas.
                    </p>
                 </div>
               </div>
            </section>
            <section class="portafolio">
                <div class="contenedor m-auto">
                    <h2 class="titulo">Portafolio</h2>
                    <div class="galeria-port d-flex">
                        <div class="imagen-port">
                            <img src="../assets/img1.jpg" alt="">
                        </div>
                        <div class="imagen-port">
                            <img src="../assets/img2.jpg" alt="">
                        </div>
                        <div class="imagen-port">
                            <img src="../assets/img3.jpg" alt="">
                        </div>
                        <div class="imagen-port">
                            <img src="../assets/img4.jpg" alt="">
                        </div>
                        <div class="imagen-port">
                            <img src="../assets/img5.jpg" alt="">
                        </div>
                        <div class="imagen-port">
                            <img src="../assets/img6.jpg" alt="">
                        </div>
                        <div class="imagen-port">
                            <img src="../assets/img7.jpg" alt="">
                        </div>
                        <div class="imagen-port">
                            <img src="../assets/img8.jpg" alt="">
                        </div>
                    </div>
                </div>
            </section>
            <section class="clientes contenedor m-auto">
                <h2 class="titulo">Nuestros Clientes</h2>
                <div class="cards d-flex">
                    <div class="card1 d-flex ">
                        <img src="../assets/img1-clientes.jpg" alt="">
                        <div class="contenido-texto-card text-white text-start">
                            <h5>Estudiantes</h5>
                            <p>Persona que hace uso de la plataforma con la finalidad de dar a conocer sus habilidades y 
                                talentos que ha desarrollado a lo largo de sus estudios en la universidad</p>
                        </div>
                    </div>
                    <div class="card1 d-flex">
                        <img src="../assets/img2-clientes.jpg" alt="">
                        <div class="contenido-texto-card text-white text-start">
                            <h5>Empresas</h5>
                            <p>Organización que utilizará la plataforma con la finalidad de publicar sus ofertas de prácticas para los 
                            estudiantes, además que podrá visualizar cuántos estudiantes han postulado a dicho puesto.</p>
                        </div>
                    </div>
                    
                </div>
               
            </section>
            <section class="about-services">
                <div class="contenedor m-auto ">
                    <h2 class="titulo">Nuestros Servicios</h2>
                    <div class="servicios-cont d-flex">
                        <div class="servicio-ind">
                            <img src="../assets/svg1-servicios.svg" alt="">
                            <p>Mejorar la experiencia de búsqueda para los estudiantes.</p>
                        </div>
                        <div class="servicio-ind">
                            <img src="../assets/svg2-servicios.svg" alt="">
                            <p>Facilitar la postulación a prácticas.</p>
                        </div>
                        <div class="servicio-ind">
                            <img src="../assets/svg3-servicios.svg" alt="">
                            <p>Promover la igualdad de oportunidades de prácticas para los estudiantes.</p>
                        </div>
                    </div>
                </div>
            </section>
           </main>
           <footer>
            <h2 class="titulo-footer text-white">Contactanos , queremos ayudarte </h2>
             <div class="contenedor-footer m-auto d-flex">
                <div class="content-foo  ">
                    <h4 class=" text-white">Telefono </h4>
                    <p class="">937398743</p>
                </div>
                <div class="content-foo  ">
                    <h4 class=" text-white">Direccion </h4>
                    <p class="">Chiclayo</p>
                </div>
                <div class="content-foo">
                    <h4 class=" text-white">Correo </h4>
                    <p class="">practimach@gmail.com</p>
                </div>
             </div>
           </footer>
        </div>
    
  
</template>

<script>
export default {

}
</script>

<style scoped>
  .contenedor{
    padding: 60px 0;
    width: 90%;
    max-width: 1000px;
    overflow: hidden;
    font-family: 'Open Sans', sans-serif;
   
  }
  .titulo{
    color:rgba(46, 162, 199, 0.90);
    font-size: 30px;
    text-align: center;
    margin-bottom: 60px;
    font-weight: 600;
  }


  /*Header*/

 header{
   width: 100%;
   height: 650px;
   background: linear-gradient(175deg, rgba(73, 72, 72, 0.60) 0%, rgba(13, 46, 76, 0.70) 100%), url('../assets/fondo.jpg');
   /*background: linear-gradient(175deg, rgb(43, 88, 118,0.49) 0%, rgb(78, 67, 118,0.50) 100%),url('../assets/fondo.jpg');*/
   background-size: cover;
   background-repeat: no-repeat;
   opacity: 1;
   position: relative;
   background-attachment: fixed; 
   background-position: center ;
   font-family: 'Open Sans', sans-serif;
   
 }
 nav{ 
    padding: 30px 120px 0 0;
    text-align: right;
 }
 nav > .a{
    font-weight: 500;
    text-decoration: none;
    margin-right: 10px;
  }
  nav > .a:hover{
    text-decoration: underline
  }

 .header-icono{
    position:absolute; 
    top:0;
    left: 0;
    margin: 30px 0 0px 120px;
 }
 .wave{
    position: absolute;
    bottom: -2px;
    
 }
 header .texto-header{
    height: 430px;
    width: 100%;
    
 }
 .texto-header h1{
    font-size: 50px;
    font-weight: 900;
 }
 main .sobre-nosotros{
    padding: 30px 0 60px 0;
 }
 .texto-header h2{
    font-size: 30px;
    font-weight: 400px;
 }
 .contenedor-sobre-nosotros{
  justify-content: space-evenly;
 }
 .imagen-about-us{ 
    width: 48%;
 }
 .sobre-nosotros .contenido-textos{
    width: 48%;
    padding: 0px 30px;
 }
 .contenido-textos h4{
    margin-bottom: 15px;
    font-size: 23px;
    color:#808B96 
   
 }
 .contenido-textos h4 span{
    background: rgba(46, 162, 199, 0.90);
    border-radius: 50%;
    display: inline-block;
    text-align:center;
    width: 30px;
    height: 30px;
    padding: 2px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.50);
    margin-right: 5px;
 }
 .contenido-textos p{
    padding: 0px 0px 30px 20px;
    text-align: justify;
    font-weight: 300;
    color: #85929E;
 }
 .portafolio{
    background: #F2F2F2;
    
 }
 .galeria-port{
    justify-content: space-evenly;
    flex-wrap: wrap;
 }
 .imagen-port{
    width: 24%;
    margin-bottom: 10px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.50);
    height: 250px;
 }
 .imagen-port >img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
 }
 /*Cliente */
 .cards{
    justify-content: space-evenly;
 }
 .cards .card1{
    background: rgba(46, 162, 199, 0.90);
    width: 46%;
    height: 200px;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 5px;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.60);
 }
 .cards .card1 img{
    width: 100px;
    height: 100px;
    object-fit: cover;
    border: 3px solid #FFFFFF;
    border-radius: 50%;
    display: block;
 }
 .cards .card1 > .contenido-texto-card{
    width: 70%;   
 }
 .cards .card1 > .contenido-texto-card h5{
    font-weight: 600;
 }
 .cards .card1 > .contenido-texto-card p{
    font-weight: 300;
    padding-top: 5px;
    font-size: 14px;
    
 }
 /*our team */
  .about-services{
    background: #F2F2F2;
    padding-bottom: 30px;
  }
  .servicios-cont{
    justify-content: space-between;
    align-items: center;
  }
  .servicio-ind{
    width:28%;
   
    text-align: center;
  }

  .servicio-ind img{
    width: 90%;

  }
  .servicio-ind p{
    margin: 15px 0;
    text-align: justify;
    font-weight: 300;
    color: #85929E;
    font-size: 15px;
  }
  /*footer */
  footer{
    /*background: #AEB6BF;*/
    background: #2C3E50;
    padding:60px 0 50px 0;
    margin: auto;
    overflow: hidden;
    font-family: 'Open Sans', sans-serif;
  }
  .contenedor-footer{
    padding-top: 30px;
    justify-content: space-evenly;
    margin: auto;
  }
  .titulo-footer{
    font-weight: 800;
  }
  .content-foo h4{
    text-align: center;
    border-bottom: 3px solid #AED6F1  ;
    padding-bottom: 5px;
    margin-bottom: 10px;
    text-align: left;
    font-size: 17px;
  }
  .content-foo p{
    color:#D6DBDF ;
     text-align: left;
  }
  @media screen and (max-width:1060px){
    header{
        background-position: center;
    }
    .contenedor-sobre-nosotros{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .sobre-nosotros .contenido-textos{
        width: 96%;
    }
    .imagen-about-us{
        padding-bottom: 50px;
    }
  }
  @media screen and (max-width:860px){

    nav{  
        text-align: center ;
        padding: 30px 0px 20px 0;
    }
    .header-icono{
        top:65px;
        margin: 0;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
       
    }

  }
  @media screen and (max-width:900px){
    .imagen-port{
        width: 44%;
    }
    .cards{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .cards .card1{
        width: 90%;
    }
    .cards .card1:first-child{
        margin-bottom: 20px;
    }
    .servicios-cont{
        justify-content:center;
        flex-direction: column;
    }
    .servicio-ind{
        width: 100%;
        text-align: center;
    }
    .servicio-ind:nth-child(1),.servicio-ind:nth-child(2){
        margin-bottom: 60px;
    }
    .servicio-ind img{
         width: 60%;
    }
    .servicio-ind p{
        text-align: center;
    }
  }
  @media screen and (max-width:497px){
    .texto-header {
        margin-top: 10px;
    }
    
  }
  @media screen and (max-width:500px){
     nav{
        text-align: center;
        padding: 30px 0 0 0;
     }
     nav > .a{
      margin-right: 3px;
      font-size: 15px;
     }
     .header-icono{
        top:75px
    }
    .texto-header {
        margin-top: 25px;
    }
    .texto-header h1{
        font-size: 35px;
    }
    .texto-header h2{
        font-size: 20px;
    }
    .imagen-about-us{
       
        width: 99%;
    }
    .sobre-nosotros .contenido-textos{
        width: 95%;
    }
    .imagen-port{
        width: 95%;
    }
    /*Clientes */
    .cards .card1{
        height: 450px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .cards .card1 img{
        width: 90px;
        height: 90px;
    }
    .contenedor-footer{
        flex-direction: column;
        
    }
    .content-foo h4{
        text-align: center;
        border: none;
    }
    .content-foo p{
        text-align: center;
    }
  }

</style>