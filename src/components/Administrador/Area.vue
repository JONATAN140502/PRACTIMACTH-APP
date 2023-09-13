<template>
  <div class="contenedor">
    <div class="contenedor-texto">
      <h4 class="d-inline ">Lista de Areas </h4>
      <button class="float-end"  data-bs-toggle="modal" data-bs-target="#nuevo" ><i class="fas fa-plus"></i> Nueva Area</button>
    </div>
    <div class="card mt-4">
      <div class="card-body p-4">
        <table id="datatable" class="table scroll-table nowrap py-3 ">
          <thead class="table-secondary  ">
            <tr class="">
              <th scope="col">NOMBRE</th>
              <th scope="col" class="text-center" >DESCRIPCION</th>
              <th scope="col">ESTADO</th>
              <th scope="col">ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td >Tecnologia</td>
              <td >Incluye el desarrollo de software, el diseño web, la ciberseguridad, la administración de bases de datos</td>
              <td ><button type="button" class="btn btn-success btn-icon">Activo</button></td>
              <td class=" px-0 py-2">
                <button type="button" class="btn btn-warning btn-icon"  data-bs-toggle="modal" data-bs-target="#nuevo"><i class="fas fa-edit"></i>
                </button> <button type="button" class="btn btn-danger btn-icon"><i class="fas fa-trash-alt"></i></button>
              </td>

            </tr>
           
          </tbody>
        </table>
      </div>

    </div>
   

      <!--modal-->
      <div class="modal fade" id="nuevo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content col-sm-11 p-">
                    <div class="modal-header mod-h  ">
                      <h4 class="modal-title  text-white mt-4 mb-2 ml-3  " id="exampleModalLabel"><i class="fas fa-user"></i> Nuevo Cliente</h4>
                      <div style="border: none ;cursor: pointer;" class="close text-white mr-2"  data-bs-dismiss="modal" aria-label="Close">
                        &times;
                      </div>
                    
                    </div>                  
                    <div class="modal-body ">
                      <div class="form-row d-flex mb-3">
                        <div class="form-group ">
                          <label for="inputtext">Dni:</label>
                          <div class="input-group">
                              <input type="text" class="form-control"   placeholder="Dni" required>
                          </div>
                        </div>
                         <div class="form-group ">
                          <label for="inputtext">Nombre y Apellidos</label>
                          <div class="input-group">
                              <input type="text" class="form-control"  placeholder="Nombres y Apellidos" required>
                          </div>
                        </div>

                      </div>
                      <div class="form-row d-flex mb-3">
                        <div class="form-group ">
                          <label for="inputtext">Correo:</label>
                          <div class="input-group">
                              <input type="text" class="form-control"   placeholder="Correo" required>
                          </div>
                        </div>
                         <div class="form-group ">
                          <label for="inputtext">Telefono</label>
                          <div class="input-group">
                              <input type="text" class="form-control"  placeholder="Telefono" required>
                          </div>
                        </div>

                      </div>
                      <div class="form-row d-flex mb-3">
                        <div class="form-group ">
                          <label for="inputtext">Usuario:</label>
                          <div class="input-group">
                              <input type="text" class="form-control"   placeholder="Usuario" required>
                          </div>
                        </div>
                         <div class="form-group ">
                          <label for="inputtext">Contraseña</label>
                          <div class="input-group">
                              <input type="password" class="form-control"  placeholder="Contraseña" required>
                          </div>
                        </div>

                      </div>
                         
                       
                        

                      <button  class="btn  btn-block mt-4 mb-4 btn-1 text-white" >Registrar</button>
                                          
                        
                    </div>
                    
                 
                  </div>
                </div>
    </div>
    
    
  </div>

</template>

<script>
export default {
  mounted() {
    $('#datatable').DataTable( {
               "ordering": false,
                "language": {
                    "lengthMenu": "Mostrar _MENU_ Registros por paginas",
                    "zeroRecords": "Nada encontrado - disculpa",
                    "info": "Mostrando la pagina _PAGE_ de _PAGES_",
                    "infoEmpty": "No hay datos a mostrar",
                    "infoFiltered": "(Filtrado de _MAX_ Registros Totales)",
                    "search":"Buscar:",
                    "paginate":{
                        "next":"Siguiente",
                        "previous":"Anterior"
                    }
                    
                }
               
            } );
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
   
    padding-bottom: 15px;
    margin-bottom: 30px;
  }
  .contenedor-texto{
    border-bottom: 1px solid #1F618D;
    padding-bottom: 15px ;
  }
  .contenedor-texto button{
    border: none;
    background:  #1F618D;
    padding: 6px 15px;
    color: white;
    border-radius: 8px;
  }
  .scroll-table {
    display: block;
   
    overflow-x: auto;

  }
  .btn-1{
    background: #1F618D;
    width: 100%;
}
.btn-1:hover{
    background:#2A7EB6   ;
}
.mod-h{
    background: #1F618D;
    padding: 8px 40px 15px 40px;
}
.modal-body .d-flex {
  justify-content: space-between;
  flex-wrap: wrap;
}
.modal-body{
  padding: 30px;
}
.modal-body .d-flex label{
 margin-bottom: 8px;
}
</style>