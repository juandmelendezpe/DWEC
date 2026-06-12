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

// ─── Validar un campo individual ──────────────────────────────────────────────
function validarCampo(id) {
    const input = document.getElementById(id);
    const valor = input.value.trim();

    if (valor === "" || !REGEX[id].test(valor)) {
        // Incorrecto: fondo rojo, no se guarda
        input.classList.add("error");
        input.classList.remove("ok");
        return false;
    }

    // Correcto: guardar valor y limpiar estilos de error
    validados[id] = valor;
    input.classList.remove("error");
    input.classList.add("ok");
    return true;
}

// ─── Ocultar campos correctos y mostrar datos en #datos ──────────────────────
function actualizarVista() {
    const todosCorrectos = Object.values(validados).every(v => v !== null); // ¿Todos los campos están validados?

    Object.keys(validados).forEach(id => {
        const campo = document.getElementById("campo-" + id);

        if (validados[id] !== null) {
            // Campo ya validado: ocultarlo
            campo.style.display = "none";
        } else {
            campo.style.display = "";
        }
    });

    const contenedor = document.getElementById("datos");
    contenedor.innerHTML = "";

    // Función auxiliar para crear una fila: "Etiqueta: " (negro) + valor (azul, clicable)
    function crearFila(id) {
        const p = document.createElement("p");
        p.className = "fila-dato";

        // Etiqueta en negro, no clicable
        const etiqueta = document.createElement("span");
        etiqueta.className = "etiqueta-dato";
        etiqueta.textContent = `${ETIQUETAS[id]}: `;

        // Valor en azul, clicable para re-editar
        const valor = document.createElement("span");
        valor.className = "dato-validado";
        valor.textContent = validados[id];
        valor.dataset.campo = id; // Asociar el ID del campo al elemento

        valor.addEventListener("click", function () {
            const campoId = this.dataset.campo;
            validados[campoId] = null;
            const campo = document.getElementById("campo-" + campoId);
            campo.style.display = "";
            const input = document.getElementById(campoId);
            input.classList.remove("ok", "error");
            actualizarVista();
        });

        p.appendChild(etiqueta);
        p.appendChild(valor);
        return p;
    }

    if (todosCorrectos) {
        Object.keys(validados).forEach(id => {
            contenedor.appendChild(crearFila(id));
        });
    } else {
        // Mostrar solo los ya validados (parcial) mientras el formulario sigue visible
        Object.keys(validados).forEach(id => {
            if (validados[id] !== null) {
                contenedor.appendChild(crearFila(id));
            }
        });
    }
}

// ─── Submit del formulario ────────────────────────────────────────────────────
document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();

    // Validar solo los campos que aún no están confirmados
    Object.keys(validados).forEach(id => {
        if (validados[id] === null) {
            validarCampo(id);
        }
    });

    actualizarVista();
});
