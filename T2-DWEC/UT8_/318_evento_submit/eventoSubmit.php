
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<?php
    if (isset($_POST['usuario'])) {
        $name = $_POST['usuario'];
        echo "<h1>Nombre: $name</h1>";
    } else {
        echo "La variable 'name' no se ha enviado a través del formulario.";
    }
?>

</body>
</html>

