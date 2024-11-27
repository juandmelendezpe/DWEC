function cargarHijosElementos() {
    let parrafo1 = document.getElementById("parrafo1");
    for(let hijo of parrafo1.children) {
        console.log(
            `texto:"${hijo.nodeValue}"\n` +
                `tipo de nodos: ${hijo.nodeType},${hijo.nodeName}`
        );
        console.log("************************************");
    }
}

function cargarHijos() {
    let parrafo1 = document.getElementById("parrafo1");
    for(let hijo of parrafo1.childNodes) {
        console.log(
            `texto:"${hijo.nodeValue}"\n` +
             `tipo de nodos: ${hijo.nodeType},${hijo.nodeName}`
        );
        console.log("************************************");
    }
}
window.onload = function() {
    document.getElementById("cargarHijos").addEventListener("click", cargarHijos);
    document.getElementById("cargarHijosElementos").addEventListener("click", cargarHijosElementos);
}