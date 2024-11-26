function manipularClases() {
    var parrafo = document.getElementById("parrafo");
    parrafo.className = "remarcado";
    parrafo.classList.add("hola");
    console.log(parrafo.className);
}


window.onload = function() {
    document.getElementById("manipularClases").addEventListener("click", manipularClases)
}