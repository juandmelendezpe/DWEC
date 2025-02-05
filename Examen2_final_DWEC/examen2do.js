let figurasArray = ["circuloAzul","circuloRojo","circuloVerde",
"cuadradoAzul","cuadradoRojo","cuadradoVerde",
"trianguloAzul","trianguloRojo","trianguloVerde",
];
figurasusadas = new Set();

let puntuacion = 0;
let vidas = 0;

function devolverNumero(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}
function compararFiguras(elemento){
    let idtablero = elemento.target.id;
    alert("Has pulsado en el tablero "+idtablero);

}
function cargarSecuencia(){
    let completado = 0;
    while(completado < 6){
        let numeroPosicion = devolverNumero(0,8);
        let posicionSecuencia = "secuencia"+completado;
        let nombreImagen = "./imagenes/"+figura[numeroPosicion]+".png";

        if(!figurasusadas.has(figuras[numeroPosicion])){
            document.getElementById(posicionSecuencia).setAttribute("src",nombreImagen);
            document.getElementById(posicionSecuencia).setAttribute("alt",figuras[numeroPosicion]);
            completado++;
    }
}
}

function cargarTablero(){
    let completado = 0;

    while(completado < 6){
        let numeroPosicion = devolverNumero(0,8);
        let posicionTablero = "juego"+completado;
        let nombreImagen = "./imagenes/"+figura[numeroPosicion]+".png";

        if(!figurasusadas.has(figuras[numeroPosicion])){
            document.getElementById(posicionTablero).setAttribute("src",nombreImagen);
            document.getElementById(posicionTablero).setAttribute("alt",figuras[numeroPosicion]);
            completado++;
        }
}
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
}