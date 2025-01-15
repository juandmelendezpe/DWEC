function asignarEventosDinamicos() {
    let parrafos = document.querySelectorAll("p"); // Seleccionamos todos los parrafos
    for (let parrafo of parrafos) { // Recorremos todos los parrafos
        parrafo.addEventListener("click", () => alert(parrafo.textContent)); // Asignamos el evento click a cada parrafo
    }
}
function crearElementos() {
    let nuevoParrafo = document.createElement("p");
    nuevoParrafo.textContent = "Parrafo dinamico";
    document.body.append(nuevoParrafo);
}

window.onload = function() {
    document.getElementById("asignarEventosDinamicos").addEventListener("click", asignarEventosDinamicos);
    document.getElementById("crearElementos").addEventListener("click", crearElementos);
}