<template>
  <div class="contenedor">
    <div class="contenedor-texto">
      <h4 class="d-inline ">Lista de Empresas </h4>
      <button class="float-end" ><i class="fas fa-plus"></i> Nueva Empresa</button>
    </div>
    <div class="card mt-4">
      <div class="card-body p-4">
        <table id="datatable" class="table scroll-table nowrap py-3 ">
          <thead class="table-secondary  ">
            <tr class="">
              <th scope="col">RUC</th>
              <th scope="col" >RAZON SOCIAL</th>
              <th scope="col">NOMBRE COMERCIAL</th>
              <th scope="col">DESCRIPCION</th>
              <th scope="col">DISTRITO</th>
              <th scope="col">PROVINCIA</th>
              <th scope="col">DIRECCION</th>
              <th scope="col">TELEFONO</th>
              <th scope="col">CORREO</th>
              <th scope="col">ESTADO</th>
              <th scope="col">ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            <tr class="">
              <td >1073336257</td>
              <td >EMPRESA S.A.C.</td>
              <td >EMPRESA</td>
              <td  >Empresa muy conocida</td>
              <td >Chiclayo</td>
              <td >Monsefu</td>
              <td >Calle Desconocida</td>
              <td >999444222</td>
              <td >empresa@gmail.com</td>
              <td ><button type="button" class="btn btn-success btn-icon">Activo</button></td>
              <td class=" px-0 py-2">
                <button type="button" class="btn btn-warning btn-icon"><i class="fas fa-edit"></i>
                </button> <button type="button" class="btn btn-danger btn-icon"><i class="fas fa-trash-alt"></i></button>
              </td>

            </tr>
           
          </tbody>
        </table>
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

};
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
 

</style>