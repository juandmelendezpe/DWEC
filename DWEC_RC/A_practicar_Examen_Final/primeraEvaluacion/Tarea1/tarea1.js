// ─── Parser y validador de fechas dd/mm/aaaa ──────────────────────────────────

/**
 * Comprueba si un año es bisiesto.
 * @param {number} anio
 * @returns {boolean}
 */
function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
}

/**
 * Devuelve el número de días del mes dado (1-12) en el año dado.
 * @param {number} mes  1-12
 * @param {number} anio
 * @returns {number}
 */
function diasEnMes(mes, anio) {
    const dias = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (mes === 2 && esBisiesto(anio)) return 29;
    return dias[mes];
}

/**
 * Valida y convierte una cadena "dd/mm/aaaa" en un objeto Date.
 * Devuelve null si el formato o los valores son inválidos.
 * @param {string} cadena
 * @returns {Date|null}
 */
function parsearFecha(cadena) {
    // Patrón estricto: exactamente dd/mm/aaaa
    const patron = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const coincidencia = patron.exec(cadena);
    if (!coincidencia) return null;

    const dia  = parseInt(coincidencia[1], 10);
    const mes  = parseInt(coincidencia[2], 10);
    const anio = parseInt(coincidencia[3], 10);

    // Rango de año
    if (anio < 1900 || anio > 2100) return null;
    // Rango de mes
    if (mes < 1 || mes > 12) return null;
    // Rango de día según mes y año
    if (dia < 1 || dia > diasEnMes(mes, anio)) return null;

    // Construir Date con UTC para evitar desfases de zona horaria
    return new Date(Date.UTC(anio, mes - 1, dia));
}

/**
 * Formatea un objeto Date (creado con UTC) de vuelta a "dd/mm/aaaa".
 * @param {Date} fecha
 * @returns {string}
 */
function formatearFecha(fecha) {
    const dia  = String(fecha.getUTCDate()).padStart(2, "0");
    const mes  = String(fecha.getUTCMonth() + 1).padStart(2, "0");
    const anio = fecha.getUTCFullYear();
    return `${dia}/${mes}/${anio}`;
}

// ─── Recogida de fechas mediante prompt ───────────────────────────────────────

const fechas = [];   // array de objetos Date válidos

while (true) {
    const entrada = prompt("Introduce una fecha (dd/mm/aaaa) o deja vacío para terminar:");

    // Cadena vacía o cancelar (null) → terminar
    if (entrada === null || entrada.trim() === "") break;

    const fecha = parsearFecha(entrada.trim());

    if (fecha === null) {
        alert(`Formato o valor incorrecto: "${entrada}"\nUsa el formato dd/mm/aaaa con valores válidos (año 1900-2100).`);
        // El bucle vuelve a pedir fecha
    } else {
        fechas.push(fecha);
    }
}

// ─── Cálculo de la fecha más antigua ─────────────────────────────────────────

let fechaMasAntigua = null;

for (const fecha of fechas) {
    if (fechaMasAntigua === null || fecha < fechaMasAntigua) {
        fechaMasAntigua = fecha;
    }
}

// ─── Número aleatorio entero [1, 10] ─────────────────────────────────────────

const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

// ─── Mostrar resultado en nueva ventana ──────────────────────────────────────

const mensajeFecha = fechaMasAntigua !== null
    ? `Fecha más antigua: <strong>${formatearFecha(fechaMasAntigua)}</strong>`
    : "No se han introducido fechas válidas.";

const contenidoHTML = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Resultado</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 2rem; }
        h1   { color: #333; }
        p    { font-size: 1.2rem; margin: 0.8rem 0; }
    </style>
</head>
<body>
    <h1>Resultado</h1>
    <p>${mensajeFecha}</p>
    <p>Número aleatorio: <strong>${numeroAleatorio}</strong></p>
</body>
</html>`;

const ventana = window.open("", "_blank");

if (ventana) {
    ventana.document.write(contenidoHTML);
    ventana.document.close();
} else {
    // Fallback si el navegador bloquea la ventana emergente
    const textoFecha = fechaMasAntigua !== null
        ? `Fecha más antigua: ${formatearFecha(fechaMasAntigua)}`
        : "No se han introducido fechas válidas.";
    alert(`${textoFecha}\nNúmero aleatorio: ${numeroAleatorio}`);
}
