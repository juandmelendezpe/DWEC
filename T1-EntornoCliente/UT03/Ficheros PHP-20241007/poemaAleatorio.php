<?php
// Array de poemas
$poemas = array(
    "Poema 1...",
    "Poema 2...",
    "Poema 3...",
    // Añade más poemas aquí
);

// Selecciona un poema aleatorio
$poema_aleatorio = $poemas[array_rand($poemas)];

// Devuelve el poema
echo $poema_aleatorio;
?>