// creamos una clase DatosRegistros
class DatosRegistros {
    constructor(nombre, dni, localidad, telefono, fnac) {
        this.nombre = nombre;
        this.dni = dni;
        this.localidad = localidad;
        this.telefono = telefono;
        this.fnac = fnac;
    }
}

///--- ahhora creamos un array para almacenar los objetos de la clase DatosRegistros
const registros = [];
//--- ahora creamos una función para validar los campos del formulario
function validarCampos() {
    const nombre = document.getElementById("nombre").value.trim();
    const dni = document.getElementById("dni").value.trim();
    const localidad = document.getElementById("localidad").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const fnac = document.getElementById("fnac").value.trim();
    if (nombre === "" || dni === "" || localidad === "" || telefono === "" || fnac === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }
    return true;
}
//--- ahora creamos una función para manejar el evento submit del formulario
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();
    if (validarCampos()) {
        const nombre = document.getElementById("nombre").value.trim();
        const dni = document.getElementById("dni").value.trim();
        const localidad = document.getElementById("localidad").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const fnac = document.getElementById("fnac").value.trim();
        const nuevoRegistro = new DatosRegistros(nombre, dni, localidad, telefono, fnac);   
        registros.push(nuevoRegistro);
        console.log("Registro guardado:", nuevoRegistro);
        document.getElementById("formulario").reset();
    }
});
//--- ahora creamos una función para mostrar los registros almacenados en el array
function mostrarRegistros() {
    const contenedor = document.getElementById("datos");
    contenedor.innerHTML = "";
    registros.forEach(function (registro, index) {
        const p = document.createElement("p");
        p.textContent = `Registro ${index + 1}: Nombre: ${registro.nombre}, DNI: ${registro.dni}, Localidad: ${registro.localidad}, Teléfono: ${registro.telefono}, Fecha de Nacimiento: ${registro.fnac}`;
        contenedor.appendChild(p);
    });
}

//--- ahora creamos un botón para mostrar los registros almacenados en el array
const btnMostrar = document.createElement("button");
btnMostrar.textContent = "Mostrar Registros";
btnMostrar.addEventListener("click", mostrarRegistros);
document.body.appendChild(btnMostrar);






// ─── Expresiones regulares ────────────────────────────────────────────────────
const REGEX = {
    nombre:    /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/,
    dni:       /^[0-9]{8}-[A-Z]$/,
    localidad: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/,
    telefono:  /^[69][0-9]{8}$/,
    fnac:      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/
};

// ─── Estado: guarda los valores ya validados correctamente ────────────────────
const validados = {
    nombre:    null,
    dni:       null,
    localidad: null,
    telefono:  null,
    fnac:      null
};

// ─── Etiquetas legibles para mostrar en #datos ────────────────────────────────
const ETIQUETAS = {
    nombre:    "Nombre",
    dni:       "DNI",
    localidad: "Localidad",
    telefono:  "Teléfono",
    fnac:      "Fecha de Nacimiento"
};
// -------------------------1. funcion que valida los campos ----------------------------------

function actualizarVista() {
    const form = document.getElementById("formulario");
    const datosDiv = document.querySelector(".datos");
    datosDiv.innerHTML = ""; // Limpiar datos anteriores
    
    for (const campo in REGEX) { // nombre, dni, localidad, telefono, fnac
        const input = form.elements[campo]; // accede al input por su atributo name
        const valor = input.value.trim(); // eliminar espacios al inicio y final
        const regex = REGEX[campo]; // la expresión regular correspondiente a ese campo
        if (regex.test(valor)) {
            validados[campo] = valor; // guardar valor validado
        } else {
            validados[campo] = null; // marcar como no válido
        }
    }

    // Mostrar datos validados  
    for (const campo in validados) {
        if (validados[campo]) {
            const p = document.createElement("p");
            p.textContent = `${ETIQUETAS[campo]}: ${validados[campo]}`;
            datosDiv.appendChild(p);
        }
    }       
}

//----------------------2.  Funcion actualizar vista-------------------------

//********************sudmit del formulario*-------------------- */
document.getElementById("formulario").addEventListener("submit",function (event) {
    event.preventDefault();
    actualizarVista();
})






