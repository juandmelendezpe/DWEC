// Versión 2: usa preventDefault en el submit y separa comportamiento/markup
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // evita la recarga de la página

        const numeroInput = document.getElementById('numero'); // Obtener el input dentro del listener
        const tabla = document.getElementById('tabla'); // Obtener la tabla dentro del listener
        const numero = Number(numeroInput && numeroInput.value);// Obtener el valor del input

        if (Number.isNaN(numero) || numero < 0 || numero > 10) { // Validación del número
            alert('Por favor ingrese un numero entre 0 y 10');
            if (numeroInput) numeroInput.value = ''; // Limpia el input
            if (tabla) tabla.innerHTML = ''; // Limpia la tabla
            return;
        }

        let tablaMultiplicar = `<h2>Tabla de multiplicar del numero ${numero}</h2>`; // Genera el markup
        tablaMultiplicar += '<ul>'; // Lista de multiplicaciones
        for (let i = 0; i <= 10; i++) { // Genera cada línea
            tablaMultiplicar += `<li>${numero} x ${i} = ${numero * i}</li>`; // Línea de la tabla
        }
        tablaMultiplicar += '</ul>'; // Cierra la lista

        if (tabla) tabla.innerHTML = tablaMultiplicar; // Inserta el markup generado
    });
});
