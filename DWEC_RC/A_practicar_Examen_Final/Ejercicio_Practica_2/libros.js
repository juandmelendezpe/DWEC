"use strict";

// ============================================================
//  EJERCICIO 1 – Formulario + tabla de libros con validación
// ============================================================

const form        = document.getElementById("formLibro");
const cuerpoTabla = document.getElementById("cuerpoTabla");
const mensajeVacio = document.getElementById("mensajeVacio");

// ---- Campos del formulario ----
const campoIsbn      = document.getElementById("isbn");
const campoTitulo    = document.getElementById("titulo");
const campoAutor     = document.getElementById("autor");
const campoEditorial = document.getElementById("editorial");
const campoPrecio    = document.getElementById("precio");

// ---- Spans de error ----
const errorIsbn      = document.getElementById("errorIsbn");
const errorTitulo    = document.getElementById("errorTitulo");
const errorAutor     = document.getElementById("errorAutor");
const errorEditorial = document.getElementById("errorEditorial");
const errorPrecio    = document.getElementById("errorPrecio");

// ---- Helpers de validación ----

/**
 * Valida que el ISBN tenga exactamente 8 dígitos numéricos.
 * @param {string} valor
 * @returns {string} Mensaje de error o cadena vacía si es válido.
 */
function validarIsbn(valor) {
  if (!/^\d{8}$/.test(valor)) {
    return "El ISBN debe tener exactamente 8 dígitos numéricos.";
  }
  return "";
}

/**
 * Valida que un campo de texto no esté vacío.
 * @param {string} valor
 * @param {string} nombre  Nombre del campo para el mensaje.
 * @returns {string}
 */
function validarTexto(valor, nombre) {
  if (valor.trim() === "") {
    return `El campo "${nombre}" no puede estar vacío.`;
  }
  return "";
}

/**
 * Valida que el precio sea un número mayor que cero.
 * @param {string} valor
 * @returns {string}
 */
function validarPrecio(valor) {
  const num = parseFloat(valor);
  if (isNaN(num) || num <= 0) {
    return "El precio debe ser un número mayor que cero.";
  }
  return "";
}

/**
 * Comprueba si ya existe un ISBN en la tabla.
 * @param {string} isbn
 * @returns {boolean}
 */
function isbnDuplicado(isbn) {
  const filas = cuerpoTabla.querySelectorAll("tr");
  for (const fila of filas) {
    // La primera celda de cada fila contiene el ISBN
    if (fila.cells[0].textContent === isbn) {
      return true;
    }
  }
  return false;
}

/**
 * Muestra u oculta el mensaje de tabla vacía.
 */
function actualizarMensajeVacio() {
  mensajeVacio.style.display =
    cuerpoTabla.rows.length === 0 ? "block" : "none";
}

/**
 * Limpia todos los mensajes de error y las clases de error de los inputs.
 */
function limpiarErrores() {
  const errores = [errorIsbn, errorTitulo, errorAutor, errorEditorial, errorPrecio];
  const campos  = [campoIsbn, campoTitulo, campoAutor, campoEditorial, campoPrecio];

  errores.forEach(span => (span.textContent = ""));
  campos.forEach(input => input.classList.remove("input-error"));
}

/**
 * Muestra un mensaje de error en el span correspondiente y marca el input.
 * @param {HTMLElement} spanError
 * @param {HTMLInputElement} input
 * @param {string} mensaje
 */
function mostrarError(spanError, input, mensaje) {
  spanError.textContent = mensaje;
  input.classList.add("input-error");
}

// ---- Manejador del formulario ----
form.addEventListener("submit", function (evento) {
  evento.preventDefault();
  limpiarErrores();

  const isbn      = campoIsbn.value.trim();
  const titulo    = campoTitulo.value.trim();
  const autor     = campoAutor.value.trim();
  const editorial = campoEditorial.value.trim();
  const precio    = campoPrecio.value.trim();

  // Validar cada campo
  const errIsbn      = validarIsbn(isbn);
  const errTitulo    = validarTexto(titulo, "Título");
  const errAutor     = validarTexto(autor, "Autor");
  const errEditorial = validarTexto(editorial, "Editorial");
  const errPrecio    = validarPrecio(precio);

  let hayErrores = false;

  if (errIsbn)      { mostrarError(errorIsbn,      campoIsbn,      errIsbn);      hayErrores = true; }
  if (errTitulo)    { mostrarError(errorTitulo,    campoTitulo,    errTitulo);    hayErrores = true; }
  if (errAutor)     { mostrarError(errorAutor,     campoAutor,     errAutor);     hayErrores = true; }
  if (errEditorial) { mostrarError(errorEditorial, campoEditorial, errEditorial); hayErrores = true; }
  if (errPrecio)    { mostrarError(errorPrecio,    campoPrecio,    errPrecio);    hayErrores = true; }

  if (hayErrores) return;

  // Comprobar ISBN duplicado
  if (isbnDuplicado(isbn)) {
    mostrarError(errorIsbn, campoIsbn, "Ya existe un libro con ese ISBN en la tabla.");
    return;
  }

  // Insertar fila en la tabla
  const fila = cuerpoTabla.insertRow();
  fila.insertCell(0).textContent = isbn;
  fila.insertCell(1).textContent = titulo;
  fila.insertCell(2).textContent = autor;
  fila.insertCell(3).textContent = editorial;                       
  fila.insertCell(4).textContent = (precio).toFixed(2) + " €";

  actualizarMensajeVacio();
  form.reset();parseFloat
  campoIsbn.focus();
});

// Estado inicial de la tabla
actualizarMensajeVacio();


// ============================================================
//  EJERCICIO 2 – Exportar tabla a array de objetos
// ============================================================

const btnExportar = document.getElementById("btnExportar");
const salidaArray = document.getElementById("salidaArray");

/**
 * Lee la tabla de libros y devuelve un array de objetos con sus datos.
 * @returns {Array<{isbn: string, titulo: string, autor: string, editorial: string, precio: string}>}
 */
function tablaAArray() {
  const filas = cuerpoTabla.querySelectorAll("tr");
  const libros = [];

  filas.forEach(function (fila) {
    const celdas = fila.querySelectorAll("td");
    if (celdas.length === 5) {
      libros.push({
        isbn:      celdas[0].textContent,
        titulo:    celdas[1].textContent,
        autor:     celdas[2].textContent,
        editorial: celdas[3].textContent,
        precio:    celdas[4].textContent,
      });
    }
  });

  return libros;
}

btnExportar.addEventListener("click", function () {
  const libros = tablaAArray();

  if (libros.length === 0) {
    salidaArray.textContent = "// La tabla está vacía. Añade libros primero.";
    return;
  }

  // Mostrar el array como JSON formateado
  salidaArray.textContent = JSON.stringify(libros, null, 2);
});
