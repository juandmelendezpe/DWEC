let contadorIteracciones = 0;

function devolverNumero(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}

function cargarNumeros() {
    let completadoNumero = [null,false,false,false,false,false,false,false,false,false];
    let existe = false;
    let numAleatorio = 0;

    for (let i=1; i < 10; i++) {
        //console.log("Numero aleatorio " + i + " " + numAleatorio);
        contadorIteracciones++;
        do{
            numAleatorio = devolverNumero(1, 9);
            contadorIteracciones++;
            // console.log(typeof numAleatorio + " el número es:" + numAleatorio);
            // console.log(completadoNumero[numAleatorio]);
            
        }while(completadoNumero[numAleatorio] == true)
        
        document.getElementById("cuadro" + i).textContent = numAleatorio;
        completadoNumero[numAleatorio] = true;   
    }
    console.log("Iteracciones: " + contadorIteracciones);
    
}

window.onload = function() {
    cargarNumeros()
}