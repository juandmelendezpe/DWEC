<?php
header('Content-Type: application/json');

$numDnis = isset($_GET['n']) ? intval($_GET['n']) : 1;
$tipo = isset($_GET['tipo']) ? $_GET['tipo'] : 'dni';

$dnis = array();
for ($i = 0; $i < $numDnis; $i++) {
    $dni = generateDni($tipo);
    $dnis[] = array('tipo' => $tipo, 'numero' => $dni);
}

echo json_encode($dnis);

function generateDni($tipo) {
    $dni = '';
    switch ($tipo) {
        case 'dni':
            $dni = generateDniNumber();
            break;
        case 'nie':
            $dni = generateNieNumber();
            break;
        default:
            $dni = generateDniNumber();
            break;
    }
    return $dni;
}

function generateDniNumber() {
    $numbers = '1234567890';
    $dni = '';
    for ($i = 0; $i < 8; $i++) {
        $dni .= $numbers[rand(0, strlen($numbers) - 1)];
    }
    $dni .= calculateDniLetter($dni);
    return $dni;
}

function generateNieNumber() {
    $letters = 'XYZ';
    $numbers = '1234567890';
    $nie = $letters[rand(0, strlen($letters) - 1)];
    for ($i = 0; $i < 7; $i++) {
        $nie .= $numbers[rand(0, strlen($numbers) - 1)];
    }
    $nie .= calculateNieLetter($nie);
    return $nie;
}

function calculateDniLetter($dni) {
    $letters = 'TRWAGMYFPDXBNJZSQVHLCKE';
    return $letters[intval($dni) % 23];
}

function calculateNieLetter($nie) {
    $prefix = $nie[0];
    $dni = substr($nie, 1);
    $dni = intval(strtr($dni, 'XYZ', '012'));
    return calculateDniLetter($dni);
}
?>
