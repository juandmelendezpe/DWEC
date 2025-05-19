figurasArray = ["circuloAzul","circuloRojo","circuloVerde",
"cuadradoAzul","cuadradoRojo","cuadradoVerde",
"trianguloAzul","trianguloRojo","trianguloVerde"];
figurasusadas = new Set();

 puntuacion = 0;
vidas = 0;

function devolverNumero(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}
function cargarSecuencia(){
    let completado = 0;
        figurasUsadas = new Set();

    while(completado < 6){
        let numeroPosicion = devolverNumero(0,8);
        let posicionSecuencia = "secuencia"+completado;
        let nombreImagen = "./imagenes/"+figurasArray[numeroPosicion]+".png";

        if(!figurasUsadas.has(figurasArray[numeroPosicion])){
            document.getElementById(posicionSecuencia).setAttribute("src",nombreImagen);
            figurasUsadas.add(figurasArray[numeroPosicion]);
            completado++;
    }
}
}

function cargarTablero(){
    let completado = 0;

    while(completado < 6){
        let numeroPosicion = devolverNumero(0,8);
        let posicionTablero = "juego"+completado;
        let nombreImagen = "./imagenes/"+figurasArray[numeroPosicion]+".png";

        if(!figurasusadas.has(figurasArray[numeroPosicion])){
            document.getElementById(posicionTablero).setAttribute("src",nombreImagen);
            document.getElementById(posicionTablero).setAttribute("alt",figurasArray[numeroPosicion]);
            figurasusadas.add(figurasArray[numeroPosicion]);
            
            completado++;
        }
}
}
function compararFiguras(elemento){
    let idtablero = elemento.target.id;
    alert("Has pulsado en el tablero "+idtablero);

}
function borrarVidas(){
    let vidas = 3;
    let vidasElemento = document.getElementById("vidas");
    vidasElemento.innerHTML = "Vidas: "+vidas;
}

window.onload = function() {
    
    for(let i= 1;i<6 ;i++){
        let idSecuencia = "secuencia"+i;
        document.getElementById(idSecuencia).addEventListener("click",compararFiguras);
    }
    cargarSecuencia();
    cargarTablero();
    borrarVidas();
}