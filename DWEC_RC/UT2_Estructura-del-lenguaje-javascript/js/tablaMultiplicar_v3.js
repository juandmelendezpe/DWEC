// ===== VERSIÓN 3: Con variables y funciones globales =====

// ===== VARIABLES GLOBALES =====
let numeroIngresado = 0; // Almacena el número ingresado por el usuario
let elementoInput = null; // Referencia al input de número
let elementoTabla = null; // Referencia al div que contiene la tabla
let elementoForm = null; // Referencia al formulario

// Configuración de validación
const CONFIG = {
    minimo: 0,
    maximo: 10,
    mensaje_error: 'Por favor ingrese un numero entre 0 y 10'
};

// ===== FUNCIONES GLOBALES =====

/**
 * Inicializa la aplicación: obtiene referencias del DOM y añade listeners
 */
function inicializarApp() {
    console.log('Inicializando aplicación...');
    
    // Obtener elementos del DOM
    elementoInput = document.getElementById('numero');
    elementoTabla = document.getElementById('tabla');
    elementoForm = document.querySelector('form');
    
    // Validar que todos los elementos existan
    if (!elementoInput || !elementoTabla || !elementoForm) {
        console.error('Error: No se encontraron todos los elementos necesarios en el DOM');
        return;
    }
    
    // Añadir listener al formulario
    elementoForm.addEventListener('submit', manejarSubmit);
    console.log('Aplicación inicializada correctamente');
}

/**
 * Maneja el evento submit del formulario
 * @param {Event} evento - El evento del submit
 */
function manejarSubmit(evento) {
    evento.preventDefault(); // Evitar recarga de página
    console.log('Submit detectado');
    
    // Obtener y validar el número
    if (!validarNumero()) {
        limpiarFormulario();
        return;
    }
    
    // Generar y mostrar la tabla
    generarTabla();
}

/**
 * Valida que el número ingresado esté en el rango permitido
 * @returns {boolean} - true si es válido, false en caso contrario
 */
function validarNumero() {
    numeroIngresado = Number(elementoInput.value);
    
    console.log(`Validando número: ${numeroIngresado}`);
    
    if (Number.isNaN(numeroIngresado) || numeroIngresado < CONFIG.minimo || numeroIngresado > CONFIG.maximo) {
        console.warn(`Número inválido: ${numeroIngresado}`);
        alert(CONFIG.mensaje_error);
        return false;
    }
    
    console.log(`Número válido: ${numeroIngresado}`);
    return true;
}

/**
 * Genera el HTML de la tabla de multiplicar para el número guardado
 * @returns {string} - HTML de la tabla
 */
function generarHTMLTabla() {
    console.log(`Generando tabla para: ${numeroIngresado}`);
    
    let html = `<h2>Tabla de multiplicar del número ${numeroIngresado}</h2>`;
    html += '<ul>';
    
    for (let i = 0; i <= 10; i++) {
        const resultado = numeroIngresado * i;
        html += `<li>${numeroIngresado} x ${i} = ${resultado}</li>`;
    }
    
    html += '</ul>';
    
    console.log('HTML de tabla generado');
    return html;
}

/**
 * Inserta la tabla generada en el DOM
 */
function generarTabla() {
    const htmlTabla = generarHTMLTabla();
    elementoTabla.innerHTML = htmlTabla;
    console.log('Tabla mostrada en el DOM');
}

/**
 * Limpia el formulario y la tabla en caso de error
 */
function limpiarFormulario() {
    console.log('Limpiando formulario...');
    
    if (elementoInput) {
        elementoInput.value = ''; // Limpiar input
        elementoInput.focus(); // Enfocar el input para que el usuario escriba
    }
    
    if (elementoTabla) {
        elementoTabla.innerHTML = ''; // Limpiar tabla
    }
    
    numeroIngresado = 0; // Reset de la variable global
    console.log('Formulario limpiado');
}

// ===== PUNTO DE ENTRADA =====

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', inicializarApp);
