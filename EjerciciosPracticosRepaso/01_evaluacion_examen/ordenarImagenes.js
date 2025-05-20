let tablero = ["android","fuchsia","ios"];
let vidas = 1;
let imagenUno = "";
let imagenDos = "";

function devolverNumero(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
function cargarImagenes() { // carga las imagenes en el tablero
    let numImagen = devolverNumero(1,3); // devuelve un numero entre 1 y 3
    let imagenes = document.getElementsByClassName("imagen"); /*  la variable imagenes recoge todos los elementos con la clase imagen  /*/

    for(let i = 1; i <= imagenes.length; i++) {
        let valorImagen = "./imagenes/" + tablero[numImagen-1] + "_" + i + ".png";// iteramos el array tablero y le añadimos el numero de la imagen

        document.getElementById("imagen"+i).setAttribute("src", valorImagen); // cambiamos el atributo src de la imagen
        document.getElementById("imagen"+i).setAttribute("alt", valorImagen); // cambiamos el atributo alt de la imagen
    }
}
function descolocarImagenes() { // descoloca las imagenes
    // iteramos 100 veces para descolocar las imagenes
    // cogemos dos imagenes aleatorias y cambiamos su atributo src
    for(let i=0; i <= 100; i++) {
        let imagenUnoDes = "imagen" + devolverNumero(1,9);
        let imagenDosDes = "imagen" + devolverNumero(1,9);
        let valorImagenUno = document.getElementById(imagenUnoDes).getAttribute("src");
        let valorImagenDos = document.getElementById(imagenDosDes).getAttribute("src");
        document.getElementById(imagenUnoDes).setAttribute("src",valorImagenDos);
        document.getElementById(imagenDosDes).setAttribute("src",valorImagenUno);
    }
}

function cambiarImagenes(elemento) {
   // let valorRecuperado = elemento.target.id;
   // alert("valor Pulsado : "+ valorRecuperado);
   if(imagenUno == "") {
         imagenUno = elemento.target.id;
    } else {
        imagenDos = elemento.target.id;
        let rutaImagenUno = document.getElementById(imagenUno).getAttribute("src"); // recuperamos la ruta de la imagen uno
        let rutaImagenDos = document.getElementById(imagenDos).getAttribute("src");

        document.getElementById(imagenUno).setAttribute("src",rutaImagenDos);
        document.getElementById(imagenDos).setAttribute("src",rutaImagenUno);

        comprobarVidas(imagenUno,imagenDos);

        imagenUno = "";
        imagenDos = "";

        comprobarColocadas();
    }

}
/*
 en esta funcion comprobamos si las imagenes son iguales o no
 si son iguales no hacemos nada
    si no son iguales cambiamos la imagen de la dino
    si la dino es la cuarta imagen cambiamos todas las imagenes a su estado inicial
    y cambiamos la imagen de la dino a su estado inicial
    si la dino es la primera imagen cambiamos la imagen de la dino a su estado inicial
    si la dino es la segunda imagen cambiamos la imagen de la dino a su estado inicial
    si la dino es la tercera imagen cambiamos la imagen de la dino a su estado inicial
    si la dino es la cuarta imagen cambiamos la imagen de la dino a su estado inicial

*/
function comprobarVidas(imagenUnoLocal, imagenDosLocal) {
    let altUno = document.getElementById(imagenUnoLocal).getAttribute("alt");
    let srcUno = document.getElementById(imagenUnoLocal).getAttribute("src");
    let altDos = document.getElementById(imagenDosLocal).getAttribute("alt");
    let srcDos = document.getElementById(imagenDosLocal).getAttribute("src");
    
    if((altUno != srcUno) && (altDos != srcDos)) {
       document.getElementById("dino"+vidas).setAttribute("src","./imagenes/dino_rojo.png");
         vidas++;
    }
    if(vidas == 4) {
        alert("Has perdido");
        cargarImagenes();
        descolocarImagenes();
        let imagenesDino = document.getElementsByClassName("dino");
        for(let i = 1; i <= imagenesDino.length; i++) {
            document.getElementById("dino"+i).setAttribute("src","./imagenes/dino_verde.png");
        }
        vidas = 1;
    }
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
        for(let i = 1; i<=imagenes.length; i++) {
            document.getElementById("imagen"+i).classList.add("completado");
        }
    }
}
window.onload = function() {
    let imagenes = document.getElementsByClassName("imagen");

    for (let i = 1; i <=imagenes.length; i++) {
       let idImagen ="imagen"+i;
       document.getElementById(idImagen).addEventListener("click",cambiarImagenes);
    }
    cargarImagenes();
    descolocarImagenes();
}