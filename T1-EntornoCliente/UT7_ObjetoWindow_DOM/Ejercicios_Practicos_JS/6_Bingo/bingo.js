document.addEventListener('DOMContentLoaded', () => {
    const bingoTable = document.getElementById('bingoTable');
    const rangos = [
        [1, 9], [10, 19], [20, 29], [30, 39], [40, 49],
        [50, 59], [60, 69], [70, 79], [80, 89]
    ];
    
    function generarCarton() {
        let carton = [];
        for (let i = 0; i < 9; i++) {
            carton[i] = generarNumerosRango(rangos[i]);
        }
        return carton;
    }

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

    function cargarCarton(carton) {
        bingoTable.innerHTML = '';
        const headerRow = document.createElement('tr');
        for (let rango of rangos) {
            const th = document.createElement('th');
            th.textContent = `${rango[0]}..${rango[1]}`;
            headerRow.appendChild(th);
        }
        bingoTable.appendChild(headerRow);

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
