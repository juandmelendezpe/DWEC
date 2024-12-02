let tablero = ["android","funchsia","ios"];
let vidas = 1;
let imagen1 = "";
let imagen2 = "";


function cambiarImagenes(elemento) {
    let valorRecuperado = elemento.target.id;
    alert("valor Pulsado : "+ valorRecuperado);
}

window.onload = function() {
    let imagenes = document.getElementsByClassName("imagen");
    for (let i = 1; i <imagenes.length; i++) {
       let idImagen ="img"+i;
       document.getElementById(idImagen).addEventListener("click",cambiarImagenes);
    }
}