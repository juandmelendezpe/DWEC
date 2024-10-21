function cambiarColor(i) {
    alert("La caja tiene el id -->" + i.target.id);

    document.getElementById(i.target.id).classList.toggle("cuadradoColorAmarillo");
}

function asignarEventos() {
    let elementosClaseCaja = document.getElementsByClassName("cuadrado");

    for (let i=0; i < elementosClaseCaja.length; i++) {
        elementosClaseCaja[i].addEventListener("click", function(i){ cambiarColor(i); });
    }
}
window.onload = function() {
    asignarEventos();
   
}