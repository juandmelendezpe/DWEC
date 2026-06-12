window.onload = function() {
    var form = document.getElementById('formulario');
    var nombre = document.getElementById('nombre');
    var apellidos = document.getElementById('apellidos');
    
    // Al cargar la página, mostrar intentos desde la cookie
    mostrarIntentos();

    // Eventos para convertir a mayúsculas al perder el foco (blur)
    nombre.addEventListener('blur', function() {
        this.value = this.value.toUpperCase();
    });
    
    apellidos.addEventListener('blur', function() {
        this.value = this.value.toUpperCase();
    });

    // Evento de envío de formulario
    form.addEventListener('submit', function(e) {
        // 1. Incrementar intentos en la cookie y mostrarlo por pantalla (innerHTML)
        incrementarIntentos();
        mostrarIntentos();

        // 2. Limpiar los errores anteriores
        document.getElementById('errores').innerHTML = '';

        // 3. Validar el formulario
        if (!validarFormulario()) {
            e.preventDefault(); // cancelamos el envío si hay errores de validación
        } else {
            // 4. Si la validación es correcta, pedimos confirmación final
            if (!confirm("¿Desea enviar el formulario?")) {
                e.preventDefault(); // cancelamos si el usuario elige 'Cancelar'
            }
        }
    });
};

/**
 * Incrementa el número de intentos guardado en la cookie 'intentos'
 */
function incrementarIntentos() {
    var intentos = getCookie("intentos");
    if (intentos === "") {
        intentos = 0;
    }
    intentos = parseInt(intentos) + 1;
    setCookie("intentos", intentos, 365);
}

/**
 * Obtiene el número de intentos de la cookie y lo muestra en el div correspondiente
 */
function mostrarIntentos() {
    var intentos = getCookie("intentos");
    if (intentos === "") {
        intentos = 0;
    }
    document.getElementById('intentos').innerHTML = "Intento de Envíos del formulario: " + intentos;
}

/**
 * Crea o actualiza una cookie
 */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/**
 * Lee el valor de una cookie por su nombre
 */
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

/**
 * Función principal de validación de todos los campos
 */
function validarFormulario() {
    var valid = true;
    var errores = document.getElementById('errores');
    var form = document.getElementById('formulario');

    // Función auxiliar para añadir mensaje de error y hacer foco en el primer elemento erróneo
    function setError(mensaje, elemento) {
        errores.innerHTML += mensaje + "<br>";
        if (valid) {
            elemento.focus();
            valid = false;
        }
    }

    // 1. Validar NOMBRE y APELLIDOS
    if (form.nombre.value.trim() === "") {
        setError("Error: El campo NOMBRE no puede estar vacío.", form.nombre);
    }
    if (form.apellidos.value.trim() === "") {
        setError("Error: El campo APELLIDOS no puede estar vacío.", form.apellidos);
    }

    // 2. Validar EDAD (solo números y en rango de 0 a 105)
    var edad = form.edad.value;
    if (edad === "" || isNaN(edad) || parseInt(edad) < 0 || parseInt(edad) > 105) {
        setError("Error: La EDAD debe ser un número comprendido entre 0 y 105.", form.edad);
    }

    // 3. Validar NIF (8 números, un guión y una letra)
    /*
       EXPLICACIÓN DE LA EXPRESIÓN REGULAR DEL NIF:
       ^        : Indica el inicio estricto de la cadena.
       \d{8}    : Coincide exactamente con 8 dígitos numéricos (0-9).
       -        : Coincide con el carácter literal guión '-'.
       [A-Za-z] : Coincide exactamente con 1 letra del alfabeto (mayúscula o minúscula).
       $        : Indica el final estricto de la cadena.
    */
    var nifRegex = /^\d{8}-[A-Za-z]$/;
    if (!nifRegex.test(form.nif.value)) {
        setError("Error: El NIF debe tener 8 números, un guión y una letra (Ej: 12345678-A).", form.nif);
    }

    // 4. Validar E-MAIL
    /*
       EXPLICACIÓN DE LA EXPRESIÓN REGULAR DEL E-MAIL:
       ^            : Inicio de la cadena.
       [\w-\.]+     : Uno o más caracteres alfanuméricos, guiones bajos, medios o puntos antes del @.
       @            : Símbolo arroba literal.
       ([\w-]+\.)+  : Uno o más bloques formados por alfanuméricos/guiones seguidos de un punto (Ej: gmail. o mail.yahoo.).
       [\w-]{2,4}   : Dominio de nivel superior entre 2 y 4 caracteres (Ej: com, es, org, info).
       $            : Final de la cadena.
    */
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(form.email.value)) {
        setError("Error: El E-MAIL introducido no tiene un formato válido.", form.email);
    }

    // 5. Validar PROVINCIAS
    if (form.provincia.value === "0" || form.provincia.selectedIndex === 0) {
        setError("Error: Debe seleccionar una PROVINCIA de la lista.", form.provincia);
    }

    // 6. Validar FECHA (dd/mm/aaaa o dd-mm-aaaa)
    /*
       EXPLICACIÓN DE LA EXPRESIÓN REGULAR DE FECHA:
       ^      : Inicio de la cadena.
       \d{2}  : Exactamente 2 dígitos para representar el día.
       [/-]   : Una clase de caracteres que permite como separador la barra '/' o el guión '-'.
       \d{2}  : Exactamente 2 dígitos para representar el mes.
       [/-]   : De nuevo, un separador que sea '/' o '-'.
       \d{4}  : Exactamente 4 dígitos numéricos para representar el año.
       $      : Final de la cadena.
    */
    var fechaRegex = /^\d{2}[/-]\d{2}[/-]\d{4}$/;
    if (!fechaRegex.test(form.fecha.value)) {
        setError("Error: La FECHA debe tener el formato dd/mm/aaaa o dd-mm-aaaa.", form.fecha);
    }

    // 7. Validar TELEFONO (9 dígitos obligatorios)
    /*
       EXPLICACIÓN DE LA EXPRESIÓN REGULAR DE TELÉFONO:
       ^      : Inicio de la cadena.
       \d{9}  : Exactamente 9 dígitos numéricos consecutivos.
       $      : Final de la cadena.
    */
    var telefonoRegex = /^\d{9}$/;
    if (!telefonoRegex.test(form.telefono.value)) {
        setError("Error: El TELÉFONO debe contener exactamente 9 dígitos numéricos sin espacios.", form.telefono);
    }

    // 8. Validar HORA (hh:mm)
    /*
       EXPLICACIÓN DE LA EXPRESIÓN REGULAR DE HORA:
       ^      : Inicio de la cadena.
       \d{2}  : Exactamente 2 dígitos para la hora.
       :      : Carácter literal dos puntos ':'.
       \d{2}  : Exactamente 2 dígitos para los minutos.
       $      : Final de la cadena.
    */
    var horaRegex = /^\d{2}:\d{2}$/;
    if (!horaRegex.test(form.hora.value)) {
        setError("Error: La HORA debe tener el formato hh:mm.", form.hora);
    }

    return valid;
}