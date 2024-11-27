function aniadirHijo() {
    var capa = document.getElementById("principal");
    var nuevoP = document.createElement("p");
    var contenido = document.createTextNode("soy el nuevo hijo");
    nuevoP.appendChild(contenido);
    capa.appendChild(nuevoP);

}
function aniadirEnPosicion() {
    var capa = document.getElementById("principal");
    var nuevoP = document.createElement("p");
    var contenido = document.createTextNode("soy el nuevo parrafo");
    var pPosterior = document.querySelectorAll("#principal p:nth-child(2)")[0];
    nuevoP.appendChild(contenido);
    capa.insertBefore(nuevoP, pPosterior);
}

window.onload = function() {
    document.getElementById("aniadirHijo").addEventListener("click", aniadirHijo);
    document.getElementById("aniadirEnPosicion").addEventListener("click", aniadirEnPosicion);
    document.getElementById("rempleazarElemento").addEventListener("click", rempleazarElemento);
    document.getElementById("eliminarElemento").addEventListener("click", eliminarElemento);

}