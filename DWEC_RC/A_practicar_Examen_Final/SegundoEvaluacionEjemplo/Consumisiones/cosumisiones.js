// ─── Expresiones regulares ────────────────────────────────────────────────────
const REGEX_BEBIDA = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/;   // letras, sin espacios ni especiales
const REGEX_PRECIO = /^[0-9]$/;                      // exactamente 1 dígito 0-9

// ─── Estado ───────────────────────────────────────────────────────────────────
let totalCuenta = 0;   // acumulado de la cuenta actual

// ─── Referencias al DOM ───────────────────────────────────────────────────────
const inputBebida    = document.getElementById("bebida");
const inputPrecio    = document.getElementById("precio");
const cuerpTabla     = document.getElementById("cuerpo-tabla");
const listaCuenta    = document.getElementById("lista-cuenta");
const spanTotal      = document.getElementById("valor-total");
const btnIntroducir  = document.getElementById("btn-introducir");
const btnNuevaCuenta = document.getElementById("btn-nueva-cuenta");

// ─── Marcar campo con error o limpiar ────────────────────────────────────────
function marcarError(input, hayError) {
    if (hayError) {
        input.classList.add("error");
    } else {
        input.classList.remove("error");
    }
}

// ─── Buscar fila existente por nombre de bebida ───────────────────────────────
function buscarFila(nombre) {
    const filas = cuerpTabla.querySelectorAll("tr");
    for (const fila of filas) {
        // La celda de nombre es la primera (índice 0)
        if (fila.cells[0].textContent.toLowerCase() === nombre.toLowerCase()) {
            return fila;
        }
    }
    return null;
}

// ─── Añadir consumición a la cuenta ──────────────────────────────────────────
function añadirConsumicion(nombre, precio) {
    totalCuenta += Number(precio);

    const li = document.createElement("li");
    li.textContent = `${nombre} — ${precio} €`;
    listaCuenta.appendChild(li);

    spanTotal.textContent = totalCuenta;
}

// ─── Crear fila nueva en la tabla ─────────────────────────────────────────────
function crearFila(nombre, precio) {
    const fila = document.createElement("tr");

    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = nombre;
    celdaNombre.classList.add("celda-bebida");  // clicable

    const celdaPrecio = document.createElement("td");
    celdaPrecio.textContent = precio;

    // Clic en el nombre → añadir consumición
    celdaNombre.addEventListener("click", function () {
        const precioActual = fila.cells[1].textContent;
        añadirConsumicion(this.textContent, precioActual);
    });

    fila.appendChild(celdaNombre);
    fila.appendChild(celdaPrecio);
    cuerpTabla.appendChild(fila);
}

// ─── Botón "Introducir producto" ──────────────────────────────────────────────
btnIntroducir.addEventListener("click", function () {
    const nombreVal = inputBebida.value.trim();
    const precioVal = inputPrecio.value.trim();

    const errorBebida = !REGEX_BEBIDA.test(nombreVal);
    const errorPrecio = !REGEX_PRECIO.test(precioVal);

    marcarError(inputBebida, errorBebida);
    marcarError(inputPrecio, errorPrecio);

    // Si algún campo es inválido, no continuar
    if (errorBebida || errorPrecio) return;

    // Buscar si la bebida ya existe
    const filaExistente = buscarFila(nombreVal);

    if (filaExistente) {
        // Modificar el precio de la fila existente
        filaExistente.cells[1].textContent = precioVal;
    } else {
        // Insertar nueva fila
        crearFila(nombreVal, precioVal);
    }

    // Limpiar inputs
    inputBebida.value = "";
    inputPrecio.value = "";
    inputBebida.focus();
});

// ─── Botón "Cuenta nueva" ─────────────────────────────────────────────────────
btnNuevaCuenta.addEventListener("click", function () {
    listaCuenta.innerHTML = "";
    totalCuenta = 0;
    spanTotal.textContent = 0;
});
