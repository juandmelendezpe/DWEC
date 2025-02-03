
let colores = ["verde", "rojo", "amarillo", "azul"];
let secuencia = [];
let color = "";
let i = 0; // para recorrer la secuencia
let dificultad = 1; // para saber la dificultad del juego, empieza en 1 y va aumentando

function devolverNumero(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}

function pulsa(elemento) {
    let color = document.getElementById(elemento.target.id).id;
    // console.log("pulsado --> " + color + " longitud: " + secuencia.length + " i: " + (i+1));
    
    if ( (color == secuencia[i]) && ((i+1) == secuencia.length) ) {
        //alert("correcto y fin");        
        i=0;
        dificultad++;
        cargarJuego(dificultad);
    } else if(color == secuencia[i]) {
        //alert("correcto y sigue");
        i++;
    }else{
        //alert("incorrecto");
        dificultad = 1;        
        cargarJuego(dificultad);
    }
}

function devolverSecuencia(dificultad) {
    for(let k=0; k<dificultad; k++) {
        let numero = devolverNumero(1,4);
        //alert("numero: " + numero);
        switch (numero) {
            case 1:
                //alert("verde");
                secuencia.push("verde");
                break;
            case 2:
                //alert("rojo");
                secuencia.push("rojo");
                break;
            case 3:
                //alert("amarillo");
                secuencia.push("amarillo");
                break;
            case 4:
                //alert("azul");
                secuencia.push("azul");
                break;
        }
        //alert(numero + " ---> " + secuencia);
    }
    return secuencia;        
}

function cargarJuego(dificultad){
    secuencia = [];
    color = "";
    i = 0;
    secuencia = devolverSecuencia(dificultad);
    //console.log("secuencia: " + secuencia);
    
    let cadenaSecuencia = "";
    for (const element of secuencia) {
        cadenaSecuencia += element + ", ";
    }
    document.getElementById("secuencia").textContent = cadenaSecuencia;
}
window.onload = function () {
    document.getElementById("verde").addEventListener("click", pulsa);
    document.getElementById("rojo").addEventListener("click", pulsa);
    document.getElementById("amarillo").addEventListener("click", pulsa);
    document.getElementById("azul").addEventListener("click", pulsa);
    cargarJuego(1);
}