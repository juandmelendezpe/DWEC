let tablero = [,"android","fuchsia","ios"];
let vidas = 1;
let imagenUno = "";
let imagenDos = "";

function devolverNumero(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
function comprobarColocadas(){

    let colocadas = true;
    for(let i = 1; i<=9; i++) {
        let alt = document.getElementById("imagen"+i).getAttribute("alt");
        let src = document.getElementById("imagen"+i).getAttribute("src");
        if(alt != src) {
            colocadas = false;
        }
    }
    if(colocadas) {
        alert("Has ganado");
        let imagenes = document.getElementsByClassName("imagen");
        for(var i = 1; i<=imagenes.length; i++) {
            document.getElementById("imagen"+i).classList.add("completado");
        }
    }
}
function comprobarVidas(imagenUnoLocal,imagenDosLocal) {
    let pierdeVida = true;
    let altUno = document.getElementById(imagenUnoLocal).getAttribute(alt);
    let srcUno = document.getElementById(imagenUnoLocal).getAttribute(src);
    

}

function cambiarImagenes(elemento) {
   // let valorRecuperado = elemento.target.id;
   // alert("valor Pulsado : "+ valorRecuperado);
   if(imagenUno == "") {
         imagenUno = elemento.target.id;
    } else {
        imagenDos = elemento.target.id;
        let rutaImagenUno = document.getElementById(imagenUno).getAttribute("src");
        let rutaImagenDos = document.getElementById(imagenDos).getAttribute("src");
        document.getElementById(imagenUno).setAttribute("src",rutaImagenDos);
        document.getElementById(imagenDos).setAttribute("src",rutaImagenUno);
        imagenUno = "";
        imagenDos = "";
        comprobarColocadas();
    }

}
function cargarImagenes() {
    let numImagen = devolverNumero(1,3);
    let imagenes = document.getElementsByClassName("imagen");
    for( var i=1; i<=imagenes.length; i++) {
        let valorImagen = './imagenes/'+tablero[numImagen]+ '_' + i + '.png';
        document.getElementById("imagen"+i).setAttribute("src",valorImagen);
        document.getElementById("imagen"+i).setAttribute("alt",valorImagen);
    }
}
function descolocarImagenes() {
    for(let i=1; i<=100; i++) {
        let imagenUno = "imagen" + devolverNumero(1,9);
        let imagenDos = "imagen" + devolverNumero(1,9);
        let valorImagenUno = document.getElementById(imagenUno).getAttribute("src");
        let valorImagenDos = document.getElementById(imagenDos).getAttribute("src");
        document.getElementById(imagenUno).setAttribute("src",valorImagenDos);
        document.getElementById(imagenDos).setAttribute("src",valorImagenUno);
    }
}
window.onload = function() {
    let imagenes = document.getElementsByClassName("imagen");
    for (let i = 1; i <imagenes.length; i++) {
       let idImagen ="imagen"+i;
       document.getElementById(idImagen).addEventListener("click",cambiarImagenes);
    }
    cargarImagenes();
    descolocarImagenes();
}