document.addEventListener('DOMContentLoaded', () => {
const cuadricula = document.getElementById('cuadricula');
const puntuacionElemento = document.getElementById('puntuacion');
let puntuacion = 100;
let tablero = [];
let barcos = [{ tamano: 3 }, { tamano: 4 }, { tamano: 5 }];

function crearTablero() {
    tablero = Array.from({ length: 10 }, () => Array(10).fill(0));
    cuadricula.innerHTML = '';
    for (let fila = 0; fila < 10; fila++) {
        for (let col = 0; col < 10; col++) {
            const celda = document.createElement('div');
            celda.classList.add('celda', 'oculto');
            celda.dataset.fila = fila;
            celda.dataset.col = col;
            celda.addEventListener('click', manejarClic);
            cuadricula.appendChild(celda);
        }
    }
}

function colocarBarcos() {
    barcos.forEach(barco => {
        let colocado = false;
        while (!colocado) {
            const orientacion = Math.random() < 0.5;
            const fila = Math.floor(Math.random() * (10 - (orientacion ? barco.tamano : 0)));
            const col = Math.floor(Math.random() * (10 - (!orientacion ? barco.tamano : 0)));
            if (sePuedeColocarBarco(fila, col, barco.tamano, orientacion)) {
                for (let i = 0; i < barco.tamano; i++) {
                    tablero[fila + (orientacion ? i : 0)][col + (!orientacion ? i : 0)] = barco.tamano;
                }
                colocado = true;
            }
        }
    });
}

function sePuedeColocarBarco(fila, col, tamano, horizontal) {
    for (let i = 0; i < tamano; i++) {
        if (tablero[fila + (horizontal ? i : 0)][col + (!horizontal ? i : 0)] !== 0) {
            return false;
        }
    }
    return true;
}

function manejarClic(e) {
    const fila = +e.target.dataset.fila;
    const col = +e.target.dataset.col;
    const valorCelda = tablero[fila][col];
    e.target.classList.remove('oculto');
    if (valorCelda === 0) {
        e.target.classList.add('agua');
        e.target.textContent = '🌊';
    } else {
        e.target.classList.add('barco');
        e.target.textContent = '🚤';
    }
    puntuacion--;
    puntuacionElemento.textContent = puntuacion;
}

function alternarVisibilidad() {
    document.querySelectorAll('.celda').forEach(celda => {
        celda.classList.toggle('oculto');
    });
}

function reiniciarTablero() {
    puntuacion = 100;
    puntuacionElemento.textContent = puntuacion;
    crearTablero();
    colocarBarcos();
}

crearTablero();
colocarBarcos();
});