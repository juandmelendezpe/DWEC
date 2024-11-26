function obtenerEstilo() {
    var parrafo = document.getElementById("parrafo");
    var estilo = window.getComputedStyle(parrafo);
    console.log(estilo);
}
window.onload = function() {
    document.getElementById("obtenerEstilo").addEventListener("click", obtenerEstilo)
}