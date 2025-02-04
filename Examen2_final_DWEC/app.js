
let figurasArray = ["circuloAzul","circuloRojo","circuloVerde"];
const imagenUno = "";
const imagenDos = "";
const figuras = document.querySelector("imagen");

function cambiarColor() {

    if(figuras){

    }
    alert("...Cambiando color ");
    document.querySelector(".imagen").classList.toggle("imagen-transparente");
}

function devolverNumero(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}

function cargarImagenes() {
    let numImagen = devolverNumero(1,3);
    let imagenes = document.getElementsByClassName("imagen");
    for (var i = 1; i <= imagenes.length; i++) {
        let valorImagen = "./imagenes/"+figurasArray[numImagen]+".png";

        document.getElementById("imagen").setAttribute("src",valorImagen);
        document.getElementById("imagen").setAttribute("alt",valorImagen);
    }
}

function cambiarImagenes(elemento){
    if(imagenUno == "") {
        imagenUno = elemento.target.id;
    }else{
        imagenDos = elemento.target.id;
        let valorImagenUno = document.getElementById(imagenUno).getAttribute("src");
        let valorImagendos = document.getElementById(imagenDos).getAttribute("src");
        document.getElementById(imagenUno).setAttribute("src",valorImagendos);
        document.getElementById(imagenDos).setAttribute("src",valorImagenUno);
        imagenUno = "";
        imagenDos = "";
    }
}

window.onload = function() {
    document.querySelector(".imagen").addEventListener("click", cambiarColor);
}