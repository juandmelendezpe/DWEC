function asignarEventosDinamicos() {
    let parrafos = document.querySelectorAll("p");
    for (let parrafo of parrafos) {
        parrafo.addEventListener("click", () => alert(parrafo.textContent));
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