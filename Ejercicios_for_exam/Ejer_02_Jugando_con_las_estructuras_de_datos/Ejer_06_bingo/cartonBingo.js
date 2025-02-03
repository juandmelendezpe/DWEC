
function aleatoriosMininoMaximo(minimo,maximo){
    minimo = parseInt(minimo);
    maximo = parseInt(maximo);
    return parseInt(   Math.random() * ((maximo+1)-minimo)    + minimo   );
}

function rellenarPrimeraVuelta(valoresIntroducidos) {    
    let minimo = 0;
    let maximo = 0;
    let valor = 0;
    let posicion = 0;
    let valorCalculado = 0;

    for (let i=0; i<9; i++){
        if(i == 0){
            minimo = 1;
            maximo = 9;
        }else if(i == 8){            
            minimo = 80;
            maximo = 90;
        }else{
            minimo = i + "0";
            maximo = i + "9";
        }
        valor = aleatoriosMininoMaximo(minimo,maximo);
        posicion = aleatoriosMininoMaximo(1,3);        
        valorCalculado = "numero" + i + posicion;
        valoresIntroducidos[valor] = valor;        
        document.getElementById(valorCalculado).textContent = valor;
        document.getElementById(valorCalculado + "peq").textContent = valor;
    }
}

function rellenarSegundaVuelta(valorAIntroducir,valoresIntroducidos){    
    let columna = valorAIntroducir.toString().charAt(0);
    let limiteInferior = 0;
    let limiteSuperior = 0;
    let numVeces = 0;
    let insertado = false;

    if(valoresIntroducidos[valorAIntroducir] != valorAIntroducir){
    // *************************************************************
        if(valorAIntroducir.toString().length == 1){
            columna = 0;
            limiteInferior = 0;
            limiteSuperior = 9;            
        }else{
            limiteInferior = columna + "0";
            limiteSuperior = columna + "9";
        }
        // Si el valor es 90 se iguala en la columna de 80 a 89
        if(valorAIntroducir == 90){
            columna = 8;
        }
        // Calcula las celdas ocupadas en la columna
        for (let i=limiteInferior; i <= limiteSuperior; i++) {
            if(valoresIntroducidos[i] != undefined){
                numVeces++;
            }
        }
        // Controla que puede haber más de 3 números por columna
        if(numVeces < 2){
            let insertadoDiv = false;

            while(insertadoDiv == false){
                let posición = aleatoriosMininoMaximo(1,3);
                let valorDestino = "numero" + columna + posición;
                
                if(document.getElementById(valorDestino).textContent == ""){
                    valoresIntroducidos[valorAIntroducir] = valorAIntroducir;
                    document.getElementById(valorDestino).textContent = valorAIntroducir;
                    document.getElementById(valorDestino + "peq").textContent = valorAIntroducir;
                    insertadoDiv = true;
                }
            }            
            return insertado = true;
        }
    // *************************************************************
    }
}

function ordenarNumeros() {

    for (let i=0; i < 9; i++) {
        let posicionUno = document.getElementById("numero" + i + "1").textContent;
        let posicionDos = document.getElementById("numero" + i + "2").textContent;
        let posicionTres = document.getElementById("numero" + i + "3").textContent;
    
        
        if( (posicionDos > posicionTres) && (posicionDos != "") && (posicionTres != "") ){
            let aux = document.getElementById("numero" + i + "3").textContent;
            document.getElementById("numero" + i + "3").textContent = posicionDos;
            document.getElementById("numero" + i + "3peq").textContent = posicionDos;
            document.getElementById("numero" + i + "2").textContent = aux;
            document.getElementById("numero" + i + "2peq").textContent = aux;
            // Intercambiamos los valores de las posiciones a los cambios realizados
            // Usa desestructuración de arrays, 134_141_metodos_arrays, intercambioDeValores            
            [posicionDos,posicionTres] = [posicionTres,posicionDos];
        }
        if( (posicionUno > posicionDos) && (posicionUno != "") && (posicionDos != "") ){
            let aux = document.getElementById("numero" + i + "2").textContent;
            document.getElementById("numero" + i + "2").textContent = posicionUno;
            document.getElementById("numero" + i + "2peq").textContent = posicionUno;
            document.getElementById("numero" + i + "1").textContent = aux;
            document.getElementById("numero" + i + "1peq").textContent = aux;
            // Intercambiamos los valores de las posiciones a los cambios realizados
            // Usa desestructuración de arrays, 134_141_metodos_arrays, intercambioDeValores            
            [posicionUno,posicionDos] = [posicionDos,posicionUno];        
        }
        if( (posicionDos > posicionTres) && (posicionDos != "") && (posicionTres != "") ){
            let aux = document.getElementById("numero" + i + "3").textContent;
            document.getElementById("numero" + i + "3").textContent = posicionDos;
            document.getElementById("numero" + i + "3peq").textContent = posicionDos;
            document.getElementById("numero" + i + "2").textContent = aux;
            document.getElementById("numero" + i + "2peq").textContent = aux;
            // Intercambiamos los valores de las posiciones a los cambios realizados
            // Usa desestructuración de arrays, 134_141_metodos_arrays, intercambioDeValores            
            [posicionDos,posicionTres] = [posicionTres,posicionDos];
        }
        if( (posicionUno > posicionTres) && (posicionUno != "") && (posicionTres != "") ){
            let aux = document.getElementById("numero" + i + "3").textContent;
            document.getElementById("numero" + i + "3").textContent = posicionUno;
            document.getElementById("numero" + i + "3peq").textContent = posicionUno;
            document.getElementById("numero" + i + "1").textContent = aux;
            document.getElementById("numero" + i + "1peq").textContent = aux;
            // Intercambiamos los valores de las posiciones a los cambios realizados
            // Usa desestructuración de arrays, 134_141_metodos_arrays, intercambioDeValores            
            [posicionUno,posicionTres] = [posicionTres,posicionUno]
        }
    }
}

function cargarCarton() {
    let valoresIntroducidos = new Array();    
    let valorAleatorio = 0;
    let contador = 0;
    
    // Asegura que las celdas(div) están vacias
    for (let i=0; i<9; i++){
        for (let j=1; j<4; j++){
            let posicionDiv = "numero" + i + j;
            document.getElementById(posicionDiv).textContent = "";
        }
    }

    // Rellenar la primera vuelta con 9 valores
    rellenarPrimeraVuelta(valoresIntroducidos);

    // Rellena la segunda vuelta con 6 valores
    while(contador < 6){
        valorAleatorio = aleatoriosMininoMaximo(1,90);                
        let insertado = rellenarSegundaVuelta(valorAleatorio,valoresIntroducidos);

        if(insertado == true){
            contador++;
        }
    }

    // Ordenar los valores en las columnas del cartón
    ordenarNumeros();
}

window.onload = function(){
    cargarCarton();
    // document.getElementById("nuevoCarton").addEventListener("click",cargarCarton);
}