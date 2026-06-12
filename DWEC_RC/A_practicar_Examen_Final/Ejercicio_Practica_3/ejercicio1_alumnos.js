"use strict";

// ============================================================
//  EJERCICIO 1 – Listado de clase con alumnos, materias y notas
// ============================================================

// ---- Constantes de materias disponibles ----
const MATERIAS = ["Matematicas", "Lengua", "Ingles"];

// ============================================================
//  CLASE Alumno
// ============================================================
class Alumno {
  /**
   * @param {string} dni
   * @param {string} nombre
   * @param {string} apellidos
   * @param {string} fechaNacimiento  formato "DD/MM/AAAA"
   */
  constructor(dni, nombre, apellidos, fechaNacimiento) {
    this.dni             = dni;
    this.nombre          = nombre;
    this.apellidos       = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    // Objeto { materia: nota|null }  — null = matriculado sin nota aún
    this.matriculas      = {};
  }

  /** Nombre completo */
  get nombreCompleto() {
    return `${this.nombre} ${this.apellidos}`;
  }

  /**
   * Matricula al alumno en una materia si no lo está ya.
   * @param {string} materia
   * @returns {boolean} true si se matriculó, false si ya estaba matriculado.
   */
  matricular(materia) {
    if (!MATERIAS.includes(materia)) {
      console.error(`La materia "${materia}" no existe. Materias válidas: ${MATERIAS.join(", ")}`);
      return false;
    }
    if (this.matriculas.hasOwnProperty(materia)) {
      console.warn(`${this.nombreCompleto} ya está matriculado en ${materia}.`);
      return false;
    }
    this.matriculas[materia] = null;
    console.log(`${this.nombreCompleto} matriculado en ${materia}.`);
    return true;
  }

  /**
   * Asigna una nota a una materia en la que el alumno está matriculado.
   * @param {string} materia
   * @param {number} nota  0-10
   * @returns {boolean}
   */
  calificar(materia, nota) {
    if (!this.matriculas.hasOwnProperty(materia)) {
      console.error(`${this.nombreCompleto} no está matriculado en ${materia}.`);
      return false;
    }
    if (nota < 0 || nota > 10) {
      console.error("La nota debe estar entre 0 y 10.");
      return false;
    }
    this.matriculas[materia] = nota;
    console.log(`${this.nombreCompleto} → ${materia}: ${nota}`);
    return true;
  }

  /** Devuelve true si el alumno ha aprobado todas sus materias (nota >= 5). */
  haAprobadoTodo() {
    const notas = Object.values(this.matriculas);
    if (notas.length === 0) return false;
    return notas.every(n => n !== null && n >= 5);
  }

  toString() {
    const mat = Object.entries(this.matriculas)
      .map(([m, n]) => `${m}: ${n !== null ? n : "sin nota"}`)
      .join(" | ");
    return `[${this.dni}] ${this.nombreCompleto} (${this.fechaNacimiento}) → ${mat || "sin materias"}`;
  }
}

// ============================================================
//  CLASE ListadoClase
// ============================================================
class ListadoClase {
  constructor() {
    /** @type {Alumno[]} */
    this.alumnos = [];
  }

  // ---- Alta ----
  /**
   * Da de alta un alumno. Lanza error si el DNI ya existe.
   * @param {string} dni
   * @param {string} nombre
   * @param {string} apellidos
   * @param {string} fechaNacimiento
   * @returns {Alumno}
   */
  altaAlumno(dni, nombre, apellidos, fechaNacimiento) {
    if (this._buscarPorDni(dni)) {
      console.error(`Ya existe un alumno con DNI ${dni}.`);
      return null;
    }
    const alumno = new Alumno(dni, nombre, apellidos, fechaNacimiento);
    this.alumnos.push(alumno);
    console.log(`Alta: ${alumno.nombreCompleto} (${dni})`);
    return alumno;
  }

  // ---- Baja ----
  /**
   * Da de baja al alumno con el DNI indicado.
   * @param {string} dni
   * @returns {boolean}
   */
  bajaAlumno(dni) {
    const idx = this.alumnos.findIndex(a => a.dni === dni);
    if (idx === -1) {
      console.error(`No se encontró ningún alumno con DNI ${dni}.`);
      return false;
    }
    const [eliminado] = this.alumnos.splice(idx, 1);
    console.log(`Baja: ${eliminado.nombreCompleto} (${dni})`);
    return true;
  }

  // ---- Modificar: matricular ----
  /**
   * Matricula a un alumno en una materia.
   * @param {string} dni
   * @param {string} materia
   */
  matricularAlumno(dni, materia) {
    const alumno = this._buscarPorDni(dni);
    if (!alumno) { console.error(`DNI ${dni} no encontrado.`); return; }
    alumno.matricular(materia);
  }

  // ---- Modificar: calificar ----
  /**
   * Califica a un alumno en una materia.
   * @param {string} dni
   * @param {string} materia
   * @param {number} nota
   */
  calificarAlumno(dni, materia, nota) {
    const alumno = this._buscarPorDni(dni);
    if (!alumno) { console.error(`DNI ${dni} no encontrado.`); return; }
    alumno.calificar(materia, nota);
  }

  // ---- Estadísticas ----
  /**
   * Muestra por consola las estadísticas de cada materia y el total de aprobados.
   */
  estadisticas() {
    console.log("\n========== ESTADÍSTICAS ==========");

    MATERIAS.forEach(materia => {
      // Solo alumnos matriculados en esta materia con nota puesta
      const notasValidas = this.alumnos
        .filter(a => a.matriculas.hasOwnProperty(materia) && a.matriculas[materia] !== null)
        .map(a => a.matriculas[materia]);

      const matriculados = this.alumnos.filter(a => a.matriculas.hasOwnProperty(materia)).length;

      if (notasValidas.length === 0) {
        console.log(`${materia}: sin notas registradas (${matriculados} matriculados)`);
        return;
      }

      const media      = notasValidas.reduce((s, n) => s + n, 0) / notasValidas.length;
      const aprobados  = notasValidas.filter(n => n >= 5).length;
      const pctAprobados = ((aprobados / notasValidas.length) * 100).toFixed(1);

      console.log(
        `${materia.padEnd(14)} | Media: ${media.toFixed(2).padStart(5)} ` +
        `| Aprobados: ${pctAprobados}% (${aprobados}/${notasValidas.length})`
      );
    });

    const aprobadosTodo = this.alumnos.filter(a => a.haAprobadoTodo()).length;
    console.log(`\nAlumnos que han aprobado todo: ${aprobadosTodo} / ${this.alumnos.length}`);
    console.log("===================================\n");
  }

  /** Muestra todos los alumnos por consola. */
  listar() {
    console.log("\n---------- LISTADO DE CLASE ----------");
    if (this.alumnos.length === 0) {
      console.log("(sin alumnos)");
    } else {
      this.alumnos.forEach(a => console.log(a.toString()));
    }
    console.log("--------------------------------------\n");
  }

  // ---- Privado ----
  _buscarPorDni(dni) {
    return this.alumnos.find(a => a.dni === dni) || null;
  }
}


// ============================================================
//  DEMO – Prueba del sistema
// ============================================================

const clase = new ListadoClase();

// Dar de alta alumnos
clase.altaAlumno("12345678A", "Ana",    "García López",    "01/03/2005");
clase.altaAlumno("87654321B", "Carlos", "Martínez Ruiz",   "15/07/2004");
clase.altaAlumno("11223344C", "Lucía",  "Fernández Pérez", "22/11/2005");
clase.altaAlumno("44332211D", "Pedro",  "Sánchez Gómez",   "08/01/2004");

// Matricular en materias (no todos en las mismas)
clase.matricularAlumno("12345678A", "Matematicas");
clase.matricularAlumno("12345678A", "Lengua");
clase.matricularAlumno("12345678A", "Ingles");

clase.matricularAlumno("87654321B", "Matematicas");
clase.matricularAlumno("87654321B", "Ingles");

clase.matricularAlumno("11223344C", "Lengua");
clase.matricularAlumno("11223344C", "Ingles");

clase.matricularAlumno("44332211D", "Matematicas");
clase.matricularAlumno("44332211D", "Lengua");
clase.matricularAlumno("44332211D", "Ingles");

// Calificar
clase.calificarAlumno("12345678A", "Matematicas", 8);
clase.calificarAlumno("12345678A", "Lengua",       7);
clase.calificarAlumno("12345678A", "Ingles",       9);

clase.calificarAlumno("87654321B", "Matematicas", 4);
clase.calificarAlumno("87654321B", "Ingles",       6);

clase.calificarAlumno("11223344C", "Lengua",  5);
clase.calificarAlumno("11223344C", "Ingles",  3);

clase.calificarAlumno("44332211D", "Matematicas", 7);
clase.calificarAlumno("44332211D", "Lengua",       8);
clase.calificarAlumno("44332211D", "Ingles",       6);

// Listar
clase.listar();

// Estadísticas
clase.estadisticas();

// Dar de baja un alumno y volver a listar
clase.bajaAlumno("11223344C");
clase.listar();

// Intentar alta duplicada
clase.altaAlumno("12345678A", "Duplicado", "Test", "01/01/2000");
