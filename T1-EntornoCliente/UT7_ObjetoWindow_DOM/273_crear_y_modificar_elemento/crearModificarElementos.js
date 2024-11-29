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
    nuevoP.textContent = "_________soy el nuevo parrafo";
    var pPosterior = document.querySelectorAll("#principal p:nth-child(2)")[0];
    capa.insertBefore(nuevoP, pPosterior);
}

function rempleazarElemento() {
    let capa = document.getElementById("principal");
    let nuevoP = document.createElement("p");
    nuevoP.textContent = "soy el nuevo parrafo remplazado";
    let pPosterior = document.querySelector("#principal p:nth-of-type(2)");
    capa.replaceChild(nuevoP, pPosterior);
}


function eliminarElemento() {
    let capa = document.getElementById("principal");
    let pSegunda = document.querySelectorAll("#principal p:nth-of-type(2)");
    capa.removeChild(pSegunda);

}

window.onload = function() {
    document.getElementById("aniadirHijo").addEventListener("click", aniadirHijo);
    document.getElementById("aniadirEnPosicion").addEventListener("click", aniadirEnPosicion);
    document.getElementById("rempleazarElemento").addEventListener("click", rempleazarElemento);
    document.getElementById("eliminarElemento").addEventListener("click", eliminarElemento);

}