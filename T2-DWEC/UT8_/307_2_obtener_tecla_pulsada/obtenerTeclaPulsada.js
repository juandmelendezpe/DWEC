
function obtenerTeclaPulsada() {
    window.addEventListener("keydown", function(evento) {
        alert("La tecla pulsada es: " + evento.key);
    });
}

window.onload = function() {
    document.getElementById("obtenerTeclaPulsada").addEventListener("click", obtenerTeclaPulsada);
}