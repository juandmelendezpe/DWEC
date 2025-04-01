// juego de cartas

let numCartas = 10;
const baraja = [corazones, diamantes, tréboles, picas];

// rellenar los div con las cartas
const divCorazones = document.getElementById("corazones");
const divDiamantes = document.getElementById("diamantes");
const divTréboles = document.getElementById("treboles");
const divPicas = document.getElementById("picas");
const divBaraja = document.getElementById("baraja");
const divBarajaBarajada = document.getElementById("barajaBarajada");

function crearCartas(){
    // crear las cartas
    for (let i = 0; i < numCartas; i++) {
        let carta = document.createElement("div");
        

    }


}
    



window.onload = function() {
    let btnCrear = document.getElementById("btnIniciar");
    btnCrear.addEventListener("click", crearCartas);

   
    
}