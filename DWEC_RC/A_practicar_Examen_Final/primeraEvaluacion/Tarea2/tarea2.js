// ═══════════════════════════════════════════════════════════════════════════════
//  GESTIÓN DE BIBLIOTECA
// ═══════════════════════════════════════════════════════════════════════════════

// ─── Modelo de datos ──────────────────────────────────────────────────────────

/**
 * Crea y devuelve un objeto biblioteca inicializado.
 * @param {string} nombre
 * @returns {{ nombre: string, libros: Array, socios: Array, prestamos: Array }}
 */
function crearBiblioteca(nombre) {
    return {
        nombre:    nombre,
        libros:    [],
        socios:    [],
        prestamos: []
    };
}

// ─── Libros ───────────────────────────────────────────────────────────────────

/**
 * Agrega un libro si el ISBN no existe ya.
 * @returns {boolean} true si se agregó, false si el ISBN ya existía.
 */
function agregarLibro(biblioteca, isbn, titulo, autor, paginas) {
    const existe = biblioteca.libros.some(l => l.isbn === isbn);
    if (existe) return false;
    biblioteca.libros.push({ isbn, titulo, autor, paginas: Number(paginas) });
    return true;
}

/**
 * Elimina el libro con el ISBN indicado.
 * @returns {boolean} true si se eliminó, false si no existía.
 */
function eliminarLibro(biblioteca, isbn) {
    const idx = biblioteca.libros.findIndex(l => l.isbn === isbn);
    if (idx === -1) return false;
    biblioteca.libros.splice(idx, 1);
    return true;
}

// ─── Socios ───────────────────────────────────────────────────────────────────

/**
 * Agrega un socio si el número de socio no existe ya.
 * @returns {boolean} true si se agregó, false si el número ya existía.
 */
function agregarSocio(biblioteca, numSocio, nombre) {
    const existe = biblioteca.socios.some(s => s.numSocio === numSocio);
    if (existe) return false;
    biblioteca.socios.push({ numSocio, nombre });
    return true;
}

/**
 * Elimina el socio con el número indicado.
 * @returns {boolean} true si se eliminó, false si no existía.
 */
function eliminarSocio(biblioteca, numSocio) {
    const idx = biblioteca.socios.findIndex(s => s.numSocio === numSocio);
    if (idx === -1) return false;
    biblioteca.socios.splice(idx, 1);
    return true;
}

// ─── Préstamos ────────────────────────────────────────────────────────────────

/**
 * Registra un préstamo si el libro y el socio existen.
 * @returns {boolean} true si se registró, false si libro o socio no existen.
 */
function prestarLibro(biblioteca, isbn, numSocio, fechaPrestamo) {
    const libroExiste  = biblioteca.libros.some(l => l.isbn === isbn);
    const socioExiste  = biblioteca.socios.some(s => s.numSocio === numSocio);
    if (!libroExiste || !socioExiste) return false;

    biblioteca.prestamos.push({
        isbn,
        numSocio,
        fechaPrestamo,
        fechaDevolucion: null,
        prestado: true
    });
    return true;
}

/**
 * Marca como devuelto el préstamo activo del libro con el ISBN indicado.
 * @returns {boolean} true si se encontró y actualizó, false si no había préstamo activo.
 */
function devolverLibro(biblioteca, isbn, fechaDevolucion) {
    const prestamo = biblioteca.prestamos.find(p => p.isbn === isbn && p.prestado === true);
    if (!prestamo) return false;
    prestamo.prestado        = false;
    prestamo.fechaDevolucion = fechaDevolucion;
    return true;
}

// ─── Estadísticas ─────────────────────────────────────────────────────────────

/**
 * Devuelve un objeto con las estadísticas de la biblioteca.
 */
function obtenerEstadisticas(biblioteca) {
    return {
        totalLibros:      biblioteca.libros.length,
        totalSocios:      biblioteca.socios.length,
        totalPrestamos:   biblioteca.prestamos.length,
        librosPrestados:  biblioteca.prestamos.filter(p => p.prestado).length
    };
}

// ═══════════════════════════════════════════════════════════════════════════════
//  INTERFAZ DE USUARIO (DOM)
// ═══════════════════════════════════════════════════════════════════════════════

// ─── Estado global ────────────────────────────────────────────────────────────
let biblioteca = null;   // se inicializa al crear la biblioteca

// ─── Referencias al DOM ───────────────────────────────────────────────────────
const seccionCrear    = document.getElementById("seccion-crear");
const seccionApp      = document.getElementById("seccion-app");
const nombreBiblioteca = document.getElementById("nombre-biblioteca");

// Botones del menú
const btnAgregarLibro    = document.getElementById("btn-agregar-libro");
const btnAgregarSocio    = document.getElementById("btn-agregar-socio");
const btnPrestarLibro    = document.getElementById("btn-prestar-libro");
const btnDevolverLibro   = document.getElementById("btn-devolver-libro");
const btnEliminarLibro   = document.getElementById("btn-eliminar-libro");
const btnEliminarSocio   = document.getElementById("btn-eliminar-socio");
const btnVerLibros       = document.getElementById("btn-ver-libros");
const btnVerSocios       = document.getElementById("btn-ver-socios");
const btnVerPrestamos    = document.getElementById("btn-ver-prestamos");
const btnVerEstadisticas = document.getElementById("btn-ver-estadisticas");

// Área de resultado
const areaResultado = document.getElementById("area-resultado");

// ─── Utilidades de UI ─────────────────────────────────────────────────────────

/** Muestra un mensaje en el área de resultado. */
function mostrarResultado(html) {
    areaResultado.innerHTML = html;
}

/** Genera una tabla HTML a partir de un array de objetos. */
function generarTabla(datos, columnas) {
    if (datos.length === 0) return "<p class='aviso'>No hay registros.</p>";

    const cabecera = columnas.map(c => `<th>${c.label}</th>`).join("");
    const filas = datos.map(item => {
        const celdas = columnas.map(c => {
            const val = item[c.key];
            return `<td>${val === null ? "—" : val}</td>`;
        }).join("");
        return `<tr>${celdas}</tr>`;
    }).join("");

    return `<table><thead><tr>${cabecera}</tr></thead><tbody>${filas}</tbody></table>`;
}

/** Obtiene hoy en formato dd/mm/aaaa. */
function hoyFormateado() {
    const hoy = new Date();
    const d = String(hoy.getDate()).padStart(2, "0");
    const m = String(hoy.getMonth() + 1).padStart(2, "0");
    const a = hoy.getFullYear();
    return `${d}/${m}/${a}`;
}

// ─── Crear biblioteca ─────────────────────────────────────────────────────────
document.getElementById("form-crear").addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("input-nombre-bib").value.trim();
    if (!nombre) return;

    biblioteca = crearBiblioteca(nombre);
    nombreBiblioteca.textContent = nombre;
    seccionCrear.style.display = "none";
    seccionApp.style.display   = "block";
    mostrarResultado(`<p class='ok'>Biblioteca "<strong>${nombre}</strong>" creada correctamente.</p>`);
});

// ─── Agregar libro ────────────────────────────────────────────────────────────
btnAgregarLibro.addEventListener("click", function () {
    const isbn    = prompt("ISBN del libro:");
    if (!isbn || isbn.trim() === "") return;
    const titulo  = prompt("Título:");
    if (!titulo || titulo.trim() === "") return;
    const autor   = prompt("Autor:");
    if (!autor || autor.trim() === "") return;
    const paginas = prompt("Número de páginas:");
    if (!paginas || isNaN(paginas) || Number(paginas) <= 0) {
        mostrarResultado("<p class='error'>Número de páginas inválido.</p>");
        return;
    }

    const ok = agregarLibro(biblioteca, isbn.trim(), titulo.trim(), autor.trim(), paginas);
    if (ok) {
        mostrarResultado(`<p class='ok'>Libro "<strong>${titulo.trim()}</strong>" (ISBN: ${isbn.trim()}) agregado.</p>`);
    } else {
        mostrarResultado(`<p class='error'>Ya existe un libro con ISBN <strong>${isbn.trim()}</strong>.</p>`);
    }
});

// ─── Agregar socio ────────────────────────────────────────────────────────────
btnAgregarSocio.addEventListener("click", function () {
    const numSocio = prompt("Número de socio:");
    if (!numSocio || numSocio.trim() === "") return;
    const nombre   = prompt("Nombre del socio:");
    if (!nombre || nombre.trim() === "") return;

    const ok = agregarSocio(biblioteca, numSocio.trim(), nombre.trim());
    if (ok) {
        mostrarResultado(`<p class='ok'>Socio "<strong>${nombre.trim()}</strong>" (nº ${numSocio.trim()}) agregado.</p>`);
    } else {
        mostrarResultado(`<p class='error'>Ya existe un socio con número <strong>${numSocio.trim()}</strong>.</p>`);
    }
});

// ─── Prestar libro ────────────────────────────────────────────────────────────
btnPrestarLibro.addEventListener("click", function () {
    const isbn     = prompt("ISBN del libro a prestar:");
    if (!isbn || isbn.trim() === "") return;
    const numSocio = prompt("Número de socio:");
    if (!numSocio || numSocio.trim() === "") return;

    const ok = prestarLibro(biblioteca, isbn.trim(), numSocio.trim(), hoyFormateado());
    if (ok) {
        mostrarResultado(`<p class='ok'>Préstamo registrado: ISBN <strong>${isbn.trim()}</strong> → socio <strong>${numSocio.trim()}</strong>.</p>`);
    } else {
        mostrarResultado(`<p class='error'>No se pudo registrar el préstamo. Comprueba que el ISBN y el número de socio existen.</p>`);
    }
});

// ─── Devolver libro ───────────────────────────────────────────────────────────
btnDevolverLibro.addEventListener("click", function () {
    const isbn = prompt("ISBN del libro a devolver:");
    if (!isbn || isbn.trim() === "") return;

    const ok = devolverLibro(biblioteca, isbn.trim(), hoyFormateado());
    if (ok) {
        mostrarResultado(`<p class='ok'>Libro con ISBN <strong>${isbn.trim()}</strong> devuelto correctamente.</p>`);
    } else {
        mostrarResultado(`<p class='error'>No se encontró un préstamo activo para el ISBN <strong>${isbn.trim()}</strong>.</p>`);
    }
});

// ─── Eliminar libro ───────────────────────────────────────────────────────────
btnEliminarLibro.addEventListener("click", function () {
    const isbn = prompt("ISBN del libro a eliminar:");
    if (!isbn || isbn.trim() === "") return;

    const ok = eliminarLibro(biblioteca, isbn.trim());
    if (ok) {
        mostrarResultado(`<p class='ok'>Libro con ISBN <strong>${isbn.trim()}</strong> eliminado.</p>`);
    } else {
        mostrarResultado(`<p class='error'>No existe ningún libro con ISBN <strong>${isbn.trim()}</strong>.</p>`);
    }
});

// ─── Eliminar socio ───────────────────────────────────────────────────────────
btnEliminarSocio.addEventListener("click", function () {
    const numSocio = prompt("Número de socio a eliminar:");
    if (!numSocio || numSocio.trim() === "") return;

    const ok = eliminarSocio(biblioteca, numSocio.trim());
    if (ok) {
        mostrarResultado(`<p class='ok'>Socio nº <strong>${numSocio.trim()}</strong> eliminado.</p>`);
    } else {
        mostrarResultado(`<p class='error'>No existe ningún socio con número <strong>${numSocio.trim()}</strong>.</p>`);
    }
});

// ─── Ver listados ─────────────────────────────────────────────────────────────
btnVerLibros.addEventListener("click", function () {
    const tabla = generarTabla(biblioteca.libros, [
        { key: "isbn",    label: "ISBN"    },
        { key: "titulo",  label: "Título"  },
        { key: "autor",   label: "Autor"   },
        { key: "paginas", label: "Páginas" }
    ]);
    mostrarResultado(`<h3>Listado de libros</h3>${tabla}`);
});

btnVerSocios.addEventListener("click", function () {
    const tabla = generarTabla(biblioteca.socios, [
        { key: "numSocio", label: "Nº Socio" },
        { key: "nombre",   label: "Nombre"   }
    ]);
    mostrarResultado(`<h3>Listado de socios</h3>${tabla}`);
});

btnVerPrestamos.addEventListener("click", function () {
    const tabla = generarTabla(biblioteca.prestamos, [
        { key: "isbn",            label: "ISBN"             },
        { key: "numSocio",        label: "Nº Socio"         },
        { key: "fechaPrestamo",   label: "Fecha préstamo"   },
        { key: "fechaDevolucion", label: "Fecha devolución" },
        { key: "prestado",        label: "Prestado"         }
    ]);
    mostrarResultado(`<h3>Listado de préstamos</h3>${tabla}`);
});

// ─── Ver estadísticas ─────────────────────────────────────────────────────────
btnVerEstadisticas.addEventListener("click", function () {
    const stats = obtenerEstadisticas(biblioteca);
    mostrarResultado(`
        <h3>Estadísticas de "${biblioteca.nombre}"</h3>
        <ul>
            <li>Total de libros: <strong>${stats.totalLibros}</strong></li>
            <li>Total de socios: <strong>${stats.totalSocios}</strong></li>
            <li>Total de préstamos realizados: <strong>${stats.totalPrestamos}</strong></li>
            <li>Libros prestados actualmente: <strong>${stats.librosPrestados}</strong></li>
        </ul>
    `);
});
