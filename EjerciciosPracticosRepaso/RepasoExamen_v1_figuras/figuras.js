let figuras = ["circuloAzul", "circuloRojo", "circuloVerde",
    "cuadradoAzul", "cuadradoRojo", "cuadradoVerde",
    "trianguloAzul", "trianguloRojo", "trianguloVerde"
];
function devolverNumero(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}
function cargarSecuencia(){
    var figurasUsadas = new Set();
    completado = 0;
    while(completado < 6){
        let numPosicion = devolverNumero(0,8);
        let posicionImagen = "imagenAbajo" + completado;
        let nombreImagen = "./imagenes/"+figuras[numPosicion]+".png"; 
        if(!figurasUsadas.has(figuras[numPosicion])){
            document.getElementById(posicionImagen).setAttribute("src", nombreImagen);
            figurasUsadas.add(figuras[numPosicion]);
            completado++;
        }
    }
}
function cargarImagenesCentral(){
    while( completado < 6){
        numeroPosicionTablero = devolverNumero(0.5);
        posicionTablero ="posicion"+numeroPosicionTablero; 
        posicionSecuencia = "imagenAbajo"+completado;
        nombreImagenTablero = document.getElementById(posicionSecuencia).setAttribute("src");
        if(nombreImagenTablero == ""){
            document.getElementById(imagenesCentral).setAttribute("src",posicionSecuencia);
            completado++;
        }

    }
}

window.onload = function() {
    cargarSecuencia();
    cargarImagenesCentral();
}