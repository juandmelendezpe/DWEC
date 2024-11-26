
function mostrarValoresClase(){
    let parrafo = document.getElementById("parrafo");
    console.log(parrafo.className);
}
function mostrarValoresClaseBucle(){
    let parrafo = document.getElementById("parrafo");

    for (const clase of parrafo.classList) {
        console.log(clase);
        
    }
    }
window.onload = function() {
    document.getElementById("recuperarValores").addEventListener("click", mostrarValoresClase);
    document.getElementById("recuperarValores").addEventListener("click", mostrarValoresClaseBucle);
    document.getElementById("recuperarValores").addEventListener("click", mostrarValoresClase);

}