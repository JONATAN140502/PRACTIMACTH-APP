<template>
  
    <div class="contenedor ">
         <div class="login">
           <img src="../assets/icono.png" alt="">
           <h2>Bienvenido</h2>
           <p class="subtitulo-rol">[ ESTUDIANTE ]</p>
           <div class="login-input">
            <input type="text"  v-model="login.login" placeholder="Ingresa tu usuario">
           </div>
           <div class="login-input">
            <input type="password" v-model="login.password"  placeholder="Ingresa tu contraseña" > 
           </div>    
             <p> <a href=""> Olvidaste tu contraseña?</a></p>
       
            <button @click="loginSend"> INGRESAR</button>
            <p>Nuevo en PractiMatch? <a href=""> Registrate aqui</a></p>
         </div>
    </div>
  
</template>

<script>

import { mapActions } from 'vuex'
export default {

    data() {
        return {
            login: {
                login: null,
                password: null
            }
        }
    },
    created() {
        this.url = this.$store.getters.get__url
        document.body.style.backgroundColor = 'rgba(46, 162, 199, 0.90)'; // Cambia esto al color deseado
    },
    methods: {
        ...mapActions(['get', 'post']),

        loginSend: function () {
            if (this.login.login != null) {
                if (this.login.password != null) {
                    this.post({
                        url: this.url + '/login/loginstudent',
                        params: this.login
                    })
                        .then((response) => {
                            if (response.student != null) {
                                this.$store.commit('mt_set_student', response.student);
                                console.log(this.$store.getters.get__student);
                                console.log(this.$store.getters.get__user);
                                console.log("company:" + response.state);
                                alert('BIENVENIDO');
                            } else {
                               alert('Datos incorrectos');
                            }
                        })
                        .catch((errors) => {
                            
                        });
                } else {
                    alert('No se ha proporcionado una contraseña');
                }
            } else {
                alert('No se ha proporcionado un nombre de usuario');
            }
        }
    }
    ,
    beforeDestroy() {

        document.body.style.backgroundColor = 'white'; // Cambia esto al color predeterminado
    }
}
</script >


<style scoped>
.contenedor{
    display: flex;
    justify-content: center;
    width: 100%;
   font-family: 'Open Sans', sans-serif;
}
.login{
   margin-top: 40px;
    background:#FFFFFF;
    text-align: center;
    padding: 40px 50px;
}
.login-input{
    margin-bottom: 20px;
}
.login-input input{
    width: 80%;
    height: 39px;
    border-radius: 50px;
    padding:  4px 20px 4px 20px;
    border: 1px solid  #85929E;
    transition: transform 0.4s ease;
}

.login h2{
    margin-bottom: 30px;
    font-weight: 600;
}
.contenedor button{
    width: 80%;
    padding: 10px ;
    border: none;
    background: rgba(46, 162, 199, 0.90);
    color: #FFFFFF;
    border-radius: 50px;
    margin-top: 10px;
    margin-bottom: 12px;
    transition: transform 0.6s ease;
}

.contenedor button:hover,.contenedor button:focus{
    transform: scale(1.05);
}
.subtitulo-rol{
    margin-top: -20px;
    font-size: 17px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
}

@media screen and (max-width:362px){

.login img{
    width: 90%;
}
                   
}

</style>