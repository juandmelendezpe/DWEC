<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>valizacion php</title>
</head>
<body>
<?php
    $name = $_POST['usuario'];
    if (isset($_POST['usuario'])) {
        $name = $_POST['usuario'];
        echo "<h1>Nombre: $name</h1>";
    } else {
        echo "La variable 'name' no se ha enviado a través del formulario.";
    }
    echo "<br>";
    echo "<p>Hola desde php $name</p>";
?>
</body>
</html>

