function cambiarColor(i) {
   // alert("La caja tiene el id -->" + i.target.id);
    //document.getElementById("cuadrado1").innerText = "Este es un mensaje en el elemento HTML";
    confirm("¿Desea cambiar el color de la caja?" + i.target.id); //ventana de confirmación
    document.getElementById(i.target.id).classList.toggle("cuadradoColorAmarillo"); //cambia el color de la caja
    
}

function asignarEventos() {
    let elementosClaseCaja = document.getElementsByClassName("cuadrado");

    for (let i=0; i <=elementosClaseCaja.length; i++) {
        elementosClaseCaja[i].addEventListener("click", function(i){ cambiarColor(i); });
    }
}
window.onload = function() {
   asignarEventos();
   
}
   /*
document.addEventListener("DOMContentLoaded", function() {
    const elementosClaseCaja = document.getElementsByClassName("cuadrado");

    const cambiarColor = (event) => {
        console.log("La caja tiene el id --> " + event.target.id);
        event.target.classList.toggle("cuadradoColorAmarillo");
    };

    Array.from(elementosClaseCaja).forEach(elemento => {
        elemento.addEventListener("click", cambiarColor);
    });
});
*/
