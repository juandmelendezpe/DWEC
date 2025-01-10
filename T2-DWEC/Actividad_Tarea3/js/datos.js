// Definición de variables
const NombresHombres = ["Juan", "Pedro", "Luis", "Carlos", "Miguel"];
const NombresMujeres = ["Ana", "María", "Laura", "Carmen", "Isabel"];
const apellidosUno = ["García", "Martínez", "López", "Sánchez", "Pérez"];
const apellidosDos = ["Rodríguez", "González", "Fernández", "Ruiz", "Díaz"];
const Localidades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Zaragoza"];
const codigosPostales = ["28001", "08001", "46001", "41001", "50001"];
const provincias = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Zaragoza"];
const CCAA = ["Comunidad de Madrid", "Cataluña", "Comunidad Valenciana", "Andalucía", "Aragón"];
const dni = ["12345678A", "23456789B", "34567890C", "45678901D", "56789012E"];
const fechasNacimiento = ["1990-01-01", "1992-02-02", "1994-03-03", "1996-04-04", "1998-05-05"];

// Función CrearDatos
function CrearDatos(numPersonas) {
    let personas = [];
    for (let i = 0; i < numPersonas; i++) {
        personas.push(Crearpersona());
    }
    return personas;
}

// Función Crearpersona
function Crearpersona() {
    let persona = new persona();
    persona.setNombre(NombresHombres[Math.floor(Math.random() * NombresHombres.length)]);
    persona.setApellidos(apellidosUno[Math.floor(Math.random() * apellidosUno.length)] + " " + apellidosDos[Math.floor(Math.random() * apellidosDos.length)]);
    persona.setFechaNacimiento(fechasNacimiento[Math.floor(Math.random() * fechasNacimiento.length)]);
    persona.setLocalidad(Localidades[Math.floor(Math.random() * Localidades.length)]);
    persona.setCodigoPostal(codigosPostales[Math.floor(Math.random() * codigosPostales.length)]);
    persona.setProvincia(provincias[Math.floor(Math.random() * provincias.length)]);
    persona.setCCAA(CCAA[Math.floor(Math.random() * CCAA.length)]);
    persona.setDni(dni[Math.floor(Math.random() * dni.length)]);
    return persona;
}

// Función imprimirDatos
function imprimirDatos(persona) {
    document.getElementById("datos").innerHTML = `
    <input type="text" value="${persona.getNombre()}" readonly>
    <input type="text" value="${persona.getApellidos()}" readonly>
    <input type="text" value="${persona.getFechaNacimiento()}" readonly>
    <input type="text" value="${persona.getLocalidad()}" readonly>
    <input type="text" value="${persona.getCodigoPostal()}" readonly>
    <input type="text" value="${persona.getProvincia()}" readonly>
    <input type="text" value="${persona.getCCAA()}" readonly>
    <input type="text" value="${persona.getDni()}" readonly>
    `;
}

// Evento window.onload
window.onload = function() {
    document.getElementById("btnPro").addEventListener("click", function() {
        let personas = CrearDatos(5);
        imprimirDatos(personas[0]); // Imprime los datos de la primera persona como ejemplo
    });
}