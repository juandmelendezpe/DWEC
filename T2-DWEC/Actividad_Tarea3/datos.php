<?php
if(isset($_POST['cantItems'])){
    $numCantidad = $_POST['cantItems'];
    echo "Nombre: $numCantidad<br>";
}else{
    echo "No se han recibido los datos";
}