let tablero = [,"android","fuchsia","ios"];
let vidas = 1;
let imagenUno = "";
let imagenDos = "";

function devolverNumero(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}

function cargarImagenes() {
    let numImagen = devolverNumero(1,3);
    //let imageneArray = [numImagen];
    let imagenes = document.getElementsByClassName("imagen");
    for (var i = 1; i <= imagenes.length; i++) {
        let valorImagen = "./ordenaImagenes/"+tablero[numImagen]+"_"+i+".png";
        //let valorAlt = tablero[numImagen]+"_"+i;      
        document.getElementById("imagen"+i).setAttribute("src",valorImagen);
        document.getElementById("imagen"+i).setAttribute("alt",valorImagen);
    }
}

function cambiarImagenes(elemento){
    //alert("Cambiando imagenes --> " + elemento.target.id);
    if(imagenUno == "") {
        imagenUno = elemento.target.id;
    }else{
        imagenDos = elemento.target.id;
        let valorImagenUno = document.getElementById(imagenUno).getAttribute("src");
        let valorImagendos = document.getElementById(imagenDos).getAttribute("src");
        document.getElementById(imagenUno).setAttribute("src",valorImagendos);
        document.getElementById(imagenDos).setAttribute("src",valorImagenUno);
        comprobarVidas(imagenUno,imagenDos);
        comprobarColocados();
        imagenUno = "";
        imagenDos = "";
    }
}
function descolocarImagenes(){
    for(let i = 1; i <= 100; i++){
        let imagenUno = "imagen"+devolverNumero(1,9);
        let imagenDos = "imagen"+devolverNumero(1,9);
        let valorImagenUno = document.getElementById(imagenUno).getAttribute("src");
        let valorImagenDos = document.getElementById(imagenDos).getAttribute("src");
        document.getElementById(imagenUno).setAttribute("src",valorImagenDos);
        document.getElementById(imagenDos).setAttribute("src",valorImagenUno);
    }
}
function comprobarColocados(){
    let colocadas = true;
    for(let i = 1; i <= 9; i++){
        let alt = document.getElementById("imagen"+i).getAttribute("alt");        
        let src = document.getElementById("imagen"+i).getAttribute("src");                
        if(alt != src){
            return false;
        }
    }
    if(colocadas){
        alert("Has ganado");
        let imagenes = document.getElementsByClassName("imagen");
        for (var i = 1; i <= imagenes.length; i++) {
            document.getElementById("imagen"+i).classList.add("completado");
        }
    }
}
function comprobarVidas(imagenUnoLocal,imagenDosLocal){
    let pierdeVida = true;
    let altUno = document.getElementById(imagenUnoLocal).getAttribute("alt");        
    let srcUno = document.getElementById(imagenUnoLocal).getAttribute("src");
    let altDos = document.getElementById(imagenDosLocal).getAttribute("alt");
    let srcDos = document.getElementById(imagenDosLocal).getAttribute("src");
    if( (altUno == srcUno) || (altDos == srcDos) ){
        pierdeVida = false;
    }else{
        document.getElementById("vida"+vidas).setAttribute("src","./ordenaImagenes/dino_rojo.png");
        vidas++;
    }
    if(vidas == 4){        
        cargarImagenes();
        descolocarImagenes();
        let imagenesDino = document.getElementsByClassName("dino");
        for (var i = 1; i <= imagenesDino.length; i++) {
            document.getElementById("vida"+i).setAttribute("src","./ordenaImagenes/dino_verde.png");
        }
        vidas = 1;
    }
    
}
window.onload = function() {
    cargarImagenes();
    let imagenes = document.getElementsByClassName("imagen");
    for (var i = 1; i <= imagenes.length; i++) {
        let idImagen = "imagen"+i;
        document.getElementById(idImagen).addEventListener("click", cambiarImagenes);
    }
    descolocarImagenes();
}