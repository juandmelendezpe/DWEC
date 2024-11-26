// Función para inicializar el juego
function initializeGame() {
  const tamanio = parseInt(document.getElementById("tamanio").value);
  const minas = parseInt(document.getElementById("minas").value);
  const tablero = createBoard(tamanio, minas);
  renderizarTablero(tablero);
  crearCirculo(tamanio);
}

// Función para crear el tablero y colocar minas
function createBoard(tamanio, minas) {
  const tablero = Array(tamanio).fill(null).map(() => Array(tamanio).fill(0)); // Crear un tablero de tamanio x tamanio con 0 en todas las casillas

  for (let i = 0; i < minas; i++) {
    let fila, col;
    do {
      fila = Math.floor(Math.random() * tamanio); // Generar una fila aleatoria
      col = Math.floor(Math.random() * tamanio); //
    } while (tablero[fila][col] === "M"); // Repetir si la casilla ya tiene una mina
    tablero[fila][col] = "M"; // Colocar una mina en la casilla
  }

  for (let fila = 0; fila < tamanio; fila++) {
    // Contar las minas alrededor de cada casilla
    for (let col = 0; col < tamanio; col++) {
      // Si la casilla no tiene mina, contar las minas alrededor
      if (tablero[fila][col] !== "M") {
        // Si la casilla no tiene mina, contar las minas alrededor
        tablero[fila][col] = countMines(tablero, fila, col); // Contar las minas alrededor de la casilla
      }
    }
  }

  return tablero;
}

// Función para contar las minas alrededor de una casilla
function countMines(tablero, fila, col) {
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  let count = 0;
  for (const [dr, dc] of directions) {
    const newRow = fila + dr;
    const newCol = col + dc;
    if (
      newRow >= 0 &&
      newRow < tablero.length &&
      newCol >= 0 &&
      newCol < tablero[0].length &&
      tablero[newRow][newCol] === "M"
    ) {
      count++;
    }
  }
  return count;
}

// Función para renderizar el tablero en la página web
function renderizarTablero(tablero) {
  const gameDiv = document.getElementById("game");
  gameDiv.innerHTML = "";

  const table = document.createElement("table");
  for (let row = 0; row < tablero.length; row++) {
    const tr = document.createElement("tr");

    for (let col = 0; col < tablero[row].length; col++) {
      const td = document.createElement("td");

      if (tablero[row][col] === "M") {
        td.classList.add("minado");
        td.textContent = "M";
      } else {
        td.classList.add("casilla");
        td.textContent = tablero[row][col];
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  gameDiv.appendChild(table);
}
function crearFormulario() {
  const formDiv = document.getElementById("formulario");
  formDiv.innerHTML = "";

  const form = document.createElement("form");
  form.id = "form";
  const labelTamanio = document.createElement("label");
  labelTamanio.textContent = "Tamaño del tablero: ";
  const inputTamanio = document.createElement("input");
  inputTamanio.type = "number";
  inputTamanio.id = "tamanio";
  inputTamanio.min = "1";
  inputTamanio.max = "20";
  inputTamanio.value = "10";
  form.appendChild(labelTamanio);
  form.appendChild(inputTamanio);
  const labelMinas = document.createElement("label");
  labelMinas.textContent = "Número de minas: ";
  const inputMinas = document.createElement("input");
  inputMinas.type = "number";
  inputMinas.id = "minas";
  inputMinas.min = "1";
  inputMinas.max = "20";
  inputMinas.value = "10";
  form.appendChild(labelMinas);
  form.appendChild(inputMinas);
  const button = document.createElement("button");
  button.type = "button";
  button.id = "iniciar";
  button.textContent = "Iniciar juego";
  form.appendChild(button);
  formDiv.appendChild(form);
}

function crearCirculo(n) {
  const divCirculos = document.getElementById("circulos");
  divCirculos.innerHTML = "";
  
  for (let i = 0; i < n ; i++) {
    const div = document.createElement("div");
    div.id = "circulo";
    const p = document.createElement("p");
    p.textContent = "Logo";
    div.appendChild(p);
    divCirculos.appendChild(div);
  }

}

function crearFooter() {
  const footer = document.createElement("footer");
  const p = document.createElement("p");
  p.textContent = "Juego de Buscaminas Desarrollado por: TecnologiesFlexy";
  footer.appendChild(p);
  document.body.appendChild(footer);

  
}
window.onload = function () {
  crearFooter();
  crearFormulario();
  //crearCirculo();
  document.getElementById("iniciar").addEventListener("click", initializeGame);
  
};
