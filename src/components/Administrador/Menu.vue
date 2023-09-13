<template>
    <div>
       <div class="contenedor ">
            <div class="contenedor-img">
                <img src="../../assets/icono.png" alt="">    
            </div>
            <div class="btn-group contenedor-perfil" role="group">
                    <button type="button" class=" dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                     Luis Fernando 
                    </button>
                    <ul class="dropdown-menu ">
                        <li>
                            <a  href="#" @click="cambiopagina('perfil')">Perfil</a>
                        </li>
                        <li><hr class="dropdown-divider"></li>
                        <li>
                            <a class="" href="#">Cerrar sesión</a>
                        </li>
                    </ul>
            </div>
            
            <div class="contenedor-menu">
                <ul>
                    <li>
                        <a href="#" @click="cambiopagina('inicio')">Inicio</a>
                    </li>
                    <li>
                        <a href="#" @click="cambiopagina('perfil')" >Perfil</a>
                    </li>
                    <li>
                        <a href="#"  @click="cambiopagina('empresa')">Empresas</a>
                    </li>
                    <li>
                        <a href="#" @click="cambiopagina('area')" >Area</a>
                    </li>
                    <li>
                        <a href="#" @click="cambiopagina('especialidades')" >Especialidades</a>
                    </li>
                    <li>
                        <a href="#" @click="cambiopagina('subespecialidades')" >Subespecialidades</a>
                    </li>
                    <li>
                        <a href="#" @click="cambiopagina('estudiante')" > Alumnos</a>
                    </li>
                    
                    <li class="cerrar">
                        <a href="#"> Cerrar</a>
                    </li>
                </ul>
                

            </div>
        
       </div>
    </div>
  
</template>

<script >
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
</script >

<style scoped>
 .contenedor{
    font-family: 'Open Sans', sans-serif;
   text-align: center;
   background:  #566573 ;
   padding: 25px 0;
   height: 100vh;
   box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.60);
 }
 .contenedor-img{
    margin-bottom: 20px;
 }
 .contenedor-img img{
    height: 70px;

 }
 .contenedor-perfil{
    display: block;
    margin-bottom: 30px;
    
 }

 .contenedor-perfil button{
    border: none;
    color: #FFFFFF;
    background:#566573 ;
    font-size: 12px;
 }
 .contenedor-perfil ul{
    padding: 0;
 }
 .contenedor-perfil ul li a{
   text-decoration: none;
   color:#2C3E50;
   display: block;
   margin: 0;
   padding: 5px 10px;
   
 }
 .contenedor-perfil ul li a:hover{
    background:rgb(44, 62, 80,0.87) ;
    
    color:#FFFFFF;
   
 }
 .contenedor-perfil ul li hr{
    margin: 0px;
 }
 .contenedor-menu ul{
    margin-bottom: 0;
    list-style-type: none;
    padding: 0;
 }
 .contenedor-menu ul li{
    padding: 15px 0px;
    text-align: left;
 }
 .contenedor-menu ul li:hover{
    background:rgb(0, 0, 0,0.3) ;
    padding-left: 8px;
 }

 .contenedor-menu ul li a{
    text-decoration: none;
    color: #FFFFFF;
    display: block;
    padding: 0px 20px;
    font-weight: 400;
    font-size: 13px;
 }

</style>