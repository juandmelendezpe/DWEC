<?php
header('Content-Type: application/json');

// Array de publicaciones de ejemplo
$posts = [
    ["userId" => 1, "id" => 1, "title" => "Post 1", "body" => "Contenido del post 1"],
    ["userId" => 2, "id" => 2, "title" => "Post 2", "body" => "Contenido del post 2"],
    // Añade más publicaciones aquí
];

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Para las peticiones GET, devolvemos las publicaciones
    echo json_encode($posts);
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Para las peticiones POST, asumimos que los datos de la publicación se han enviado como JSON
    $post_data = json_decode(file_get_contents('php://input'), true);
    $post_data['id'] = rand(100, 999); // Añadimos un id aleatorio
    echo json_encode($post_data);
}
?>