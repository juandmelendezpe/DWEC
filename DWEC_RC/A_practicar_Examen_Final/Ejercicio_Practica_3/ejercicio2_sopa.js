"use strict";

// ============================================================
//  EJERCICIO 2 – Sopa de letras N×N
// ============================================================

const ABECEDARIO = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// ---- Referencias al DOM ----
const btnIniciar      = document.getElementById("btnIniciar");
const btnBuscar       = document.getElementById("btnBuscar");
const inputTamano     = document.getElementById("tamano");
const inputPalabra    = document.getElementById("palabraBuscar");
const panelJuego      = document.getElementById("panelJuego");
const contenedorTabla = document.getElementById("contenedorTabla");
const resultado       = document.getElementById("resultado");

/** Matriz 2D con las letras actuales de la sopa */
let matriz = [];

// ============================================================
//  Generación de la sopa
// ============================================================

/**
 * Devuelve una letra aleatoria del abecedario.
 * @returns {string}
 */
function letraAleatoria() {
  return ABECEDARIO[Math.floor(Math.random() * ABECEDARIO.length)];
}

/**
 * Genera una matriz NxN con letras aleatorias.
 * @param {number} n
 * @returns {string[][]}
 */
function generarMatriz(n) {
  return Array.from({ length: n }, () =>
    Array.from({ length: n }, () => letraAleatoria())
  );
}

/**
 * Construye la tabla HTML a partir de la matriz y la inserta en el DOM.
 * @param {string[][]} mat
 */
function renderizarTabla(mat) {
  const tabla = document.createElement("table");
  tabla.className = "sopa";
  tabla.id = "tablaSopa";

  mat.forEach((fila, r) => {
    const tr = tabla.insertRow();
    fila.forEach((letra, c) => {
      const td = tr.insertCell();
      td.textContent = letra;
      td.dataset.fila = r;
      td.dataset.col  = c;
    });
  });

  contenedorTabla.innerHTML = "";
  contenedorTabla.appendChild(tabla);
}

// ============================================================
//  Búsqueda
// ============================================================

/**
 * Quita el marcado azul de todas las celdas.
 */
function limpiarMarcas() {
  document.querySelectorAll("table.sopa td.marcada")
    .forEach(td => td.classList.remove("marcada"));
}

/**
 * Marca las celdas indicadas por sus coordenadas [fila, col].
 * @param {Array<[number,number]>} celdas
 */
function marcarCeldas(celdas) {
  const tabla = document.getElementById("tablaSopa");
  if (!tabla) return;
  celdas.forEach(([r, c]) => {
    const td = tabla.rows[r]?.cells[c];
    if (td) td.classList.add("marcada");
  });
}

/**
 * Busca la palabra en la sopa horizontal (izq→der) y vertical (arriba→abajo).
 * Devuelve un array con todos los grupos de celdas donde aparece.
 * @param {string} palabra
 * @returns {Array<Array<[number,number]>>}
 */
function buscarPalabra(palabra) {
  const n       = matriz.length;
  const len     = palabra.length;
  const hallazgos = [];

  // ---- Búsqueda horizontal ----
  for (let r = 0; r < n; r++) {
    for (let c = 0; c <= n - len; c++) {
      let coincide = true;
      for (let k = 0; k < len; k++) {
        if (matriz[r][c + k] !== palabra[k]) { coincide = false; break; }
      }
      if (coincide) {
        hallazgos.push(
          Array.from({ length: len }, (_, k) => [r, c + k])
        );
      }
    }
  }

  // ---- Búsqueda vertical (descendente) ----
  for (let c = 0; c < n; c++) {
    for (let r = 0; r <= n - len; r++) {
      let coincide = true;
      for (let k = 0; k < len; k++) {
        if (matriz[r + k][c] !== palabra[k]) { coincide = false; break; }
      }
      if (coincide) {
        hallazgos.push(
          Array.from({ length: len }, (_, k) => [r + k, c])
        );
      }
    }
  }

  return hallazgos;
}

// ============================================================
//  Manejadores de eventos
// ============================================================

btnIniciar.addEventListener("click", () => {
  const n = parseInt(inputTamano.value, 10);

  if (isNaN(n) || n < 3 || n > 20) {
    alert("Introduce un tamaño entre 3 y 20.");
    return;
  }

  matriz = generarMatriz(n);
  renderizarTabla(matriz);

  resultado.textContent = "";
  inputPalabra.value    = "";
  panelJuego.hidden     = false;
  inputPalabra.focus();
});

btnBuscar.addEventListener("click", realizarBusqueda);

inputPalabra.addEventListener("keydown", e => {
  if (e.key === "Enter") realizarBusqueda();
});

function realizarBusqueda() {
  const palabra = inputPalabra.value.trim().toUpperCase();

  if (palabra.length === 0) {
    resultado.textContent = "Escribe una palabra para buscar.";
    return;
  }

  if (palabra.length > matriz.length) {
    resultado.textContent = `La palabra es más larga que la tabla (${matriz.length} columnas/filas).`;
    limpiarMarcas();
    return;
  }

  limpiarMarcas();
  const hallazgos = buscarPalabra(palabra);

  if (hallazgos.length === 0) {
    resultado.textContent = `"${palabra}" no aparece en la sopa.`;
  } else {
    resultado.textContent =
      `"${palabra}" aparece ${hallazgos.length} vez${hallazgos.length > 1 ? "es" : ""}.`;
    hallazgos.forEach(grupo => marcarCeldas(grupo));
  }
}
