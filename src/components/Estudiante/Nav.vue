<template>
  <div>
    <nav class="contenedor ">
      <div class="contenedor-img">
        <img src="../../assets/icono.png" alt="">
      </div>
     
      <div class="contenedor-texto">
        <h3>Panel Estudiante </h3>
        <p>Hola {{user}} {{ user_lastname }}, Bienvenido a PractiMacth</p>
      </div>
      

    </nav>
  </div>
</template>

<script>

export default {
  created() {
      this.user = this.$store.getters.get__student.name;
      this.user_lastname = this.$store.getters.get__student.last_name;
      //this.mtdGetData();
   },
}
</script>

<style scoped>
    .contenedor{
      font-family: 'Open Sans', sans-serif;
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.60);
    
    }

    .contenedor-img{
      background:#1F618D  ;
      padding: 4px 20px;
    }

    .contenedor-img img{
      height: 40px;
    }
    .contenedor-texto{
      background: #D5D8DC;
      padding: 5px 20px;
    }
     .contenedor-texto h3{
      font-weight: 600;
     }
     .contenedor-texto p{
      margin-bottom: 0px;
      font-weight: 300;
     }
</style>