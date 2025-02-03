let tablero = [[],[],[],[],[],[],[],[],[],[]];

function aleatoriosMininoMaximo(minimo,maximo){
    minimo = parseInt(minimo);
    maximo = parseInt(maximo);
    return parseInt(   Math.random() * ((maximo+1)-minimo)    + minimo   );
}

function rellenarBarco(longitud){
    let posicionHorizontal, posHoriCambio;
    let posicionVertical, posVerCambio;
    let direccion;
    let coincide = true;

    // *******************************************************
    while (coincide == true) {
        posicionHorizontal = parseInt(aleatoriosMininoMaximo(0,10-longitud));
        posHoriCambio = posicionHorizontal;
        posicionVertical = parseInt(aleatoriosMininoMaximo(0,10-longitud));
        posVerCambio = posicionVertical;
        direccion = parseInt(aleatoriosMininoMaximo(0,1));
        coincide = false;
    
        for(let i=0; i<longitud; i++){            
            if(tablero[posicionVertical][posicionHorizontal] != "a"){
                coincide = true;
            }

            if(direccion == "0"){
                posicionHorizontal = posicionHorizontal + 1;
            }else{
                posicionVertical = posicionVertical + 1;
            }
        }        
    }
    // *******************************************************

    for(let i=0; i<longitud; i++){        
        tablero[posVerCambio][posHoriCambio] = longitud;
        let posicionDiv = "celda" + posVerCambio + posHoriCambio;

        document.getElementById(posicionDiv).textContent = longitud;
        document.getElementById(posicionDiv).classList.add("barco" + longitud);
        if(direccion == "0"){
            posHoriCambio = posHoriCambio + 1;
        }else{
            posVerCambio = posVerCambio + 1;
        }
    }
}

function construirArray() {    
    // tablero = [["a","a","a","a","a","a","a","a","a","a"],
    //            ["a","a","a","a","a","a","a","a","a","a"],
    //            ["a","a","a","a","a","a","a","a","a","a"],
    //            ["a","a","a","a","a","a","a","a","a","a"],
    //            ["a","a","a","a","a","a","a","a","a","a"],
    //            ["a","a","a","a","a","a","a","a","a","a"],
    //            ["a","a","a","a","a","a","a","a","a","a"],
    //            ["a","a","a","a","a","a","a","a","a","a"],
    //            ["a","a","a","a","a","a","a","a","a","a"],
    //            ["a","a","a","a","a","a","a","a","a","a"]];
    
    for (let i=0; i<10; i++){
        for (let j=0; j<10; j++){
          let posicion  = "celda" + i + j;        
          let valor = ""+i+j;
          tablero[i][j] = "a";
          document.getElementById(posicion).textContent = valor;
          document.getElementById(posicion).classList.remove("barco3","barco4","barco5","agua");
        }
    }
    console.log(tablero.join("\n"));
    document.getElementById("mostrarArray").addEventListener("click",mostrarArray);
}

function mostrarArray(){
    for (let i=0; i<tablero.length; i++){
      for (let j=0; j<tablero[1].length; j++){
        let posicion  = "celda" + i + j;
        // let valor = "A-" + i + j
        let valor = "a";        
        document.getElementById(posicion).textContent = valor;
        document.getElementById(posicion).classList.remove("barco3","barco4","barco5","agua");
      }
    }
    document.getElementById("rellenarBarcos").addEventListener("click",rellenarBarcos);
}

function reiniciarTablero(){
    for (let i=0; i<tablero.length; i++){
      for (let j=0; j<tablero[1].length; j++){
        let posicion  = "celda" + i + j;        
        let valor = "a";
        tablero[i][j] = "a";
        document.getElementById(posicion).textContent = valor;
        document.getElementById(posicion).classList.remove("barco3","barco4","barco5","agua");
      }
    }
    document.getElementById("rellenarBarcos").addEventListener("click",rellenarBarcos);
}

function rellenarBarcos() {
    reiniciarTablero();
    rellenarBarco(3);
    rellenarBarco(4);
    rellenarBarco(5);
    document.getElementById("asignarEventos").addEventListener("click",asignarEventos);

}

function descubrirCelda(i) {
    let posicion = i.target.id;
    let fila = posicion.charAt(5);
    let columna = posicion.charAt(6);
    document.getElementById(posicion).textContent = tablero[fila][columna];
    if(tablero[fila][columna] != "a"){
        document.getElementById(posicion).classList.add("barco" + tablero[fila][columna]);
    }else{
        document.getElementById(posicion).classList.add("agua");
    }
}

function asignarEventos(){
    for (let i=0; i<tablero.length; i++){
        for (let j=0; j<tablero[1].length; j++){
          let posicion  = "celda" + i + j;          
          let valor = "a";
          document.getElementById(posicion).addEventListener("click",descubrirCelda);
          document.getElementById(posicion).textContent = "*";
          document.getElementById(posicion).classList.remove("barco3","barco4","barco5","agua");
        }
      }
}

window.onload = function(){
    document.getElementById("construirArray").addEventListener("click",construirArray);
}