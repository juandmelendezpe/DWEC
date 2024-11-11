document.getElementById('formCrearCliente').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    // Enviar datos al servidor para crear un nuevo cliente
    console.log("Creando cliente:", nombre);
});

document.getElementById('formRecargarPuntos').addEventListener('submit', function(event) {
    event.preventDefault();
    const idCliente = document.getElementById('idCliente').value;
    const puntos = document.getElementById('puntos').value;
    // Enviar datos al servidor para recargar puntos
    console.log("Recargando puntos:", idCliente, puntos);
});
