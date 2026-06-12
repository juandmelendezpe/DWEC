"use strict";

// ============================================================
//  EJERCICIO 1 – Versión 2 (Más Básica con arrays y funciones)
// ============================================================

const MATERIAS = ["Matematicas", "Lengua", "Ingles"];
let alumnos = []; // Usaremos un simple array de objetos para guardar los alumnos

// ---- Alta ----
function altaAlumno(dni, nombre, apellidos, fechaNacimiento) {
  // Comprobar si ya existe usando un bucle tradicional
  for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].dni === dni) {
      console.error("Ya existe un alumno con DNI " + dni);
      return;
    }
  }

  // Crear el alumno como un objeto plano
  let nuevoAlumno = {
    dni: dni,
    nombre: nombre,
    apellidos: apellidos,
    fechaNacimiento: fechaNacimiento,
    matriculas: {} // Objeto para guardar materia y nota
  };

  alumnos.push(nuevoAlumno);
  console.log("Alta: " + nombre + " " + apellidos + " (" + dni + ")");
}

// ---- Baja ----
function bajaAlumno(dni) {
  for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].dni === dni) {
      // splice elimina el elemento del array en el índice i
      let eliminado = alumnos.splice(i, 1)[0];
      console.log("Baja: " + eliminado.nombre + " " + eliminado.apellidos + " (" + dni + ")");
      return;
    }
  }
  console.error("No se encontró ningún alumno con DNI " + dni);
}

// ---- Modificar: matricular ----
function matricularAlumno(dni, materia) {
  // Validar materia
  let materiaExiste = false;
  for (let i = 0; i < MATERIAS.length; i++) {
    if (MATERIAS[i] === materia) materiaExiste = true;
  }
  if (!materiaExiste) {
    console.error("La materia no existe.");
    return;
  }

  // Buscar al alumno y matricular
  for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].dni === dni) {
      if (alumnos[i].matriculas[materia] !== undefined) {
        console.warn("El alumno ya está matriculado en " + materia);
        return;
      }
      alumnos[i].matriculas[materia] = null; // null indica que no tiene nota todavía
      console.log(alumnos[i].nombre + " matriculado en " + materia);
      return;
    }
  }
  console.error("DNI " + dni + " no encontrado.");
}

// ---- Modificar: calificar ----
function calificarAlumno(dni, materia, nota) {
  for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].dni === dni) {
      if (alumnos[i].matriculas[materia] === undefined) {
        console.error("No está matriculado en " + materia);
        return;
      }
      if (nota < 0 || nota > 10) {
        console.error("La nota debe estar entre 0 y 10.");
        return;
      }
      alumnos[i].matriculas[materia] = nota;
      console.log(alumnos[i].nombre + " -> " + materia + ": " + nota);
      return;
    }
  }
  console.error("DNI " + dni + " no encontrado.");
}

// ---- Mostrar Listado ----
function listar() {
  console.log("\n---------- LISTADO DE CLASE ----------");
  if (alumnos.length === 0) {
    console.log("(sin alumnos)");
  } else {
    for (let i = 0; i < alumnos.length; i++) {
      let a = alumnos[i];
      let textoMaterias = "";
         
      for (let m in a.matriculas) {
        let nota = a.matriculas[m];
        textoMaterias += m + ": " + (nota !== null ? nota : "sin nota") + " | ";
      }
      
      if (textoMaterias === "") {
        textoMaterias = "sin materias";
      }

      console.log("[" + a.dni + "] " + a.nombre + " " + a.apellidos + " (" + a.fechaNacimiento + ") -> " + textoMaterias);
    }
  }
  console.log("--------------------------------------\n");
}

// ---- Estadísticas ----
function estadisticas() {
  console.log("\n========== ESTADÍSTICAS ==========");

  for (let m = 0; m < MATERIAS.length; m++) {
    let materia = MATERIAS[m];
    let sumaNotas = 0;
    let cantidadNotas = 0;
    let aprobados = 0;
    let matriculados = 0;

    for (let i = 0; i < alumnos.length; i++) {
      let a = alumnos[i];
      if (a.matriculas[materia] !== undefined) {
        matriculados++;
        let nota = a.matriculas[materia];
        if (nota !== null) {
          cantidadNotas++;
          sumaNotas += nota;
          if (nota >= 5) {
            aprobados++;
          }
        }
      }
    }

    if (cantidadNotas === 0) {
      console.log(materia + ": sin notas registradas (" + matriculados + " matriculados)");
    } else {
      let media = sumaNotas / cantidadNotas;
      let pctAprobados = (aprobados / cantidadNotas) * 100;
      console.log(materia + " | Media: " + media.toFixed(2) + " | Aprobados: " + pctAprobados.toFixed(1) + "% (" + aprobados + "/" + cantidadNotas + ")");
    }
  }

  // Comprobar alumnos que han aprobado todo
  let aprobadosTodo = 0;
  for (let i = 0; i < alumnos.length; i++) {
    let a = alumnos[i];
    let numMaterias = 0;
    let numAprobadas = 0;
    
    for (let mat in a.matriculas) {
      numMaterias++;
      if (a.matriculas[mat] !== null && a.matriculas[mat] >= 5) {
        numAprobadas++;
      }
    }
    
    if (numMaterias > 0 && numMaterias === numAprobadas) {
      aprobadosTodo++;
    }
  }

  console.log("\nAlumnos que han aprobado todo: " + aprobadosTodo + " / " + alumnos.length);
  console.log("===================================\n");
}

// ============================================================
//  DEMO – Prueba del sistema
// ============================================================

// Dar de alta alumnos
altaAlumno("12345678A", "Ana",    "García López",    "01/03/2005");
altaAlumno("87654321B", "Carlos", "Martínez Ruiz",   "15/07/2004");
altaAlumno("11223344C", "Lucía",  "Fernández Pérez", "22/11/2005");
altaAlumno("44332211D", "Pedro",  "Sánchez Gómez",   "08/01/2004");

// Matricular en materias
matricularAlumno("12345678A", "Matematicas");
matricularAlumno("12345678A", "Lengua");
matricularAlumno("12345678A", "Ingles");

matricularAlumno("87654321B", "Matematicas");
matricularAlumno("87654321B", "Ingles");

matricularAlumno("11223344C", "Lengua");
matricularAlumno("11223344C", "Ingles");

matricularAlumno("44332211D", "Matematicas");
matricularAlumno("44332211D", "Lengua");
matricularAlumno("44332211D", "Ingles");

// Calificar
calificarAlumno("12345678A", "Matematicas", 8);
calificarAlumno("12345678A", "Lengua",       7);
calificarAlumno("12345678A", "Ingles",       9);

calificarAlumno("87654321B", "Matematicas", 4);
calificarAlumno("87654321B", "Ingles",       6);

calificarAlumno("11223344C", "Lengua",  5);
calificarAlumno("11223344C", "Ingles",  3);

calificarAlumno("44332211D", "Matematicas", 7);
calificarAlumno("44332211D", "Lengua",       8);
calificarAlumno("44332211D", "Ingles",       6);

// Listar
listar();

// Estadísticas
estadisticas();

// Dar de baja un alumno y volver a listar
bajaAlumno("11223344C");
listar();

// Intentar alta duplicada
altaAlumno("12345678A", "Duplicado", "Test", "01/01/2000");