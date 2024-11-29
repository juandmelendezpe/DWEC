function cargarhijos() {
    let capa = document.getElementById("pricipal");
    let hijos = capa.children;
    console.log("Número de hijos: " + hijos.length);

    let nuevoP = document.createElement("p");
    nuevoP.textContent = "Nuevo párrafo en la capa principal";
    capa.appendChild(nuevoP);
    console.log("Número de hijos: " + hijos.length);
    
}

window.onload = function() {
    document.getElementById("cargarhijos").addEventListener("click", cargarhijos);
}