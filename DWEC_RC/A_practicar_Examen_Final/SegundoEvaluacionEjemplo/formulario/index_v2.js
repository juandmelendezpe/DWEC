     // ─── Expresiones regulares ────────────────────────────────────────────────────
   const REGEX = {
        nombre:    /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/,
        dni:       /^[0-9]{8}-[A-Z]$/,
        localidad: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/,
        telefono:  /^[69][0-9]{8}$/,
        fnac:      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/
    };
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
//--- ahora creamos una función para validar los campos del formulario con expresiones regulares
function validarCampos() {
    const nombre = document.getElementById("nombre").value.trim();
    const dni = document.getElementById("dni").value.trim();
    const localidad = document.getElementById("localidad").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const fnac = document.getElementById("fnac").value.trim();
    if (!REGEX.nombre.test(nombre)) {
        alert("El nombre no es válido. Solo se permiten letras y espacios.");
        let campoNombre = document.getElementById("nombre");
        campoNombre.classList.add("error");
        campoNombre.classList.remove("ok");
         return false;
     }
    if (!REGEX.dni.test(dni)) {
        alert("El DNI no es válido. Debe tener el formato 12345678-A.");
        let campoDNI = document.getElementById("dni");
        campoDNI.classList.add("error");
        campoDNI.classList.remove("ok");
        return false;
    }
    if (!REGEX.localidad.test(localidad)) {
        alert("La localidad no es válida. Solo se permiten letras y espacios.");
        let campoLocalidad = document.getElementById("localidad");
        campoLocalidad.classList.add("error");
        campoLocalidad.classList.remove("ok");
        return false;
    }
    if (!REGEX.telefono.test(telefono)) {
        alert("El teléfono no es válido. Debe comenzar con 6 o 9 y tener 9 dígitos.");
        let campoTelefono = document.getElementById("telefono");
        campoTelefono.classList.add("error");
        campoTelefono.classList.remove("ok");
        return false;
    }
    if (!REGEX.fnac.test(fnac)) {
        alert("La fecha de nacimiento no es válida. Debe tener el formato dd/mm/yyyy.");
        let campoFnac = document.getElementById("fnac");
        campoFnac.classList.add("error");
        campoFnac.classList.remove("ok");
        return false;
    } 
    return true;
}
// funcion para recoger los datos validados y mostrar los datos en el contenedor #datos
function mostrarDatos() {
    const nombre = document.getElementById("nombre").value.trim();
    const dni = document.getElementById("dni").value.trim();
    const localidad = document.getElementById("localidad").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const fnac = document.getElementById("fnac").value.trim();
    const nuevoRegistro = new DatosRegistros(nombre, dni, localidad, telefono, fnac); // creamos un nuevo objeto de la clase DatosRegistros con los datos del formulario
    registros.push(nuevoRegistro);
    console.log("Registro guardado:", nuevoRegistro);
    const contenedor = document.getElementById("datos"); // obtenemos el contenedor #datos
    Object.keys(nuevoRegistro).forEach(key => {
        const p = document.createElement("p");
        const s = document.createElement("span");
        p.textContent = `${key}: `;
        s.textContent = nuevoRegistro[key];
        s.style.color = "blue";
        p.appendChild(s);
        contenedor.appendChild(p);
        document.getElementById("formulario").reset();
    });
}

//--- ahora creamos una función para manejar el evento submit del formulario
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();
    if (validarCampos()) {
        mostrarDatos();
    }
    
});







