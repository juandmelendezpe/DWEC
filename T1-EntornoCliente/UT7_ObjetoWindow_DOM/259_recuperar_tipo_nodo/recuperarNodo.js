function cargarTipoNodo(){
    let section = document.getElementById("s1");
    console.log("Elemento(nodeType): " + section.nodeType);
    console.log("Nombre del elemento(nodeName): " + section.nodeName);
    console.log("documento(nodeType): " + document.nodeType);

    let parrafoTexto = document.getElementById("texto");
    log("Node name (nombre): " + parrafoTexto.nodeName);
    log("Node value (value): " + parrafoValue.nodeValue);
    log("Valor del nodo " + parrafoTexto.firstChild.nodeValue);

}

    

function texto(){
    var nodo = document.getElementById("texto")
    alert("El nodo es de tipo: " + nodo.nodeType)
    
}
window.onload = function() {
    document.getElementById("texto").addEventListener("click",cargarTipoNodo)
}