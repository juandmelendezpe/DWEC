document.addEventListener('DOMContentLoaded', () => {
    const bingoTable = document.getElementById('bingoTable');
    const rangos = [
        [1, 9], [10, 19], [20, 29], [30, 39], [40, 49],
        [50, 59], [60, 69], [70, 79], [80, 89]
    ];
    // Genera un cartón de bingo con 3 números en cada rango

    function generarCarton() {
        let carton = [];
        for (let i = 0; i < 9; i++) {
            carton[i] = generarNumerosRango(rangos[i]);
        }
        return carton;
    }
    // Genera 3 números aleatorios en un rango y los devuelve en un array
    function generarNumerosRango(rango) {
        let numeros = [];
        while (numeros.length < 3) {
            let num = Math.floor(Math.random() * (rango[1] - rango[0] + 1)) + rango[0];
            if (!numeros.includes(num)) {
                numeros.push(num);
            }
        }
        return numeros;
    }

    // Cargar el cartón en la tabla
    function cargarCarton(carton) {
        bingoTable.innerHTML = '';
        // Crear la cabecera con los rangos
        const headerRow = document.createElement('tr');
        for (let rango of rangos) {
            const th = document.createElement('th');
            th.textContent = `${rango[0]}..${rango[1]}`;
            headerRow.appendChild(th);
        }
        bingoTable.appendChild(headerRow);

        // Crear las filas con los números
        for (let fila = 0; fila < 3; fila++) {
            const row = document.createElement('tr');
            for (let col = 0; col < 9; col++) {
                const td = document.createElement('td');
                td.textContent = carton[col][fila] || '';
                td.classList.add('numero');
                row.appendChild(td);
            }
            bingoTable.appendChild(row);
        }
    }

    function nuevoCarton() {
        const carton = generarCarton();
        cargarCarton(carton);
    }

    // Generar el primer cartón al cargar la página
    nuevoCarton();
});

// Otra forma de hacerlo 
window.onload = function () {
    document.getElementById("rellenar").addEventListener("click", rellenarCasilleros);
    document.getElementById("borrar").addEventListener("click", borrarCasilleros);
  };
  
  function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function rellenarCasilleros() {
    const tabla = document.getElementById("numerosSorteados");
    const rangos = [
      [1, 15],  // B
      [16, 30], // I
      [31, 45], // N
      [46, 60], // G
      [61, 75]  // O
    ];
  
    for (let i = 0; i < tabla.rows.length; i++) {
      for (let j = 0; j < tabla.rows[i].cells.length; j++) {
        const [min, max] = rangos[j];
        tabla.rows[i].cells[j].textContent = generarNumeroAleatorio(min, max);
      }
    }
  }
  
  function borrarCasilleros() {
    const tabla = document.getElementById("numerosSorteados");
    for (let i = 0; i < tabla.rows.length; i++) {
      for (let j = 0; j < tabla.rows[i].cells.length; j++) {
        tabla.rows[i].cells[j].textContent = '';
      }
    }
  }
  
