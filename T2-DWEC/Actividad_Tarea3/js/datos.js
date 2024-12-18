// Definición de variables
const NombresHombres = ["Juan", "Pedro", "Luis", "Carlos", "Miguel"];
const NombresMujeres = ["Ana", "María", "Laura", "Carmen", "Isabel"];
const apellidosUno = ["García", "Martínez", "López", "Sánchez", "Pérez"];
const apellidosDos = ["Rodríguez", "González", "Fernández", "Ruiz", "Díaz"];
const Localidades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Zaragoza"];
const codigosPostales = ["28001", "08001", "46001", "41001", "50001"];
const provincias = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Zaragoza"];
//const CCAA = ["Comunidad de Madrid", "Cataluña", "Comunidad Valenciana", "Andalucía", "Aragón"];
//const dni = ["12345678A", "23456789B", "34567890C", "45678901D", "56789012E"];
const fechasNacimiento = ["1990-01-01", "1992-02-02", "1994-03-03", "1996-04-04", "1998-05-05"];

// Función CrearDatos
function CrearDatos(numPersonas) {
    let personas = [];
   // let numPersonas = 5;
    let id = 1;

    for (let i = 0; i < numPersonas; i++) {
        let nombre;
        let apellidos;
        let Localidad;
        let CodigoPostal;
        let provincia;
        let CCAA;
        let dni;
        let fechaNacimiento;

        if (i % 2 === 0) {
            nombre = NombresHombres[Math.floor(Math.random() * NombresHombres.length)];
        } else {
            nombre = NombresMujeres[Math.floor(Math.random() * NombresMujeres.length)];
        }
        apellidos = `${apellidosUno[Math.floor(Math.random() * apellidosUno.length)]} ${apellidosDos[Math.floor(Math.random() * apellidosDos.length)]}`;
        Localidad = Localidades[Math.floor(Math.random() * Localidades.length)];
        CodigoPostal = codigosPostales[Math.floor(Math.random() * codigosPostales.length)];
        provincia = provincias[Math.floor(Math.random() * provincias.length)];
        //CCAA = CCAA[Math.floor(Math.random() * CCAA.length)];
        //dni = dni[Math.floor(Math.random() * dni.length)];
        fechaNacimiento = fechasNacimiento[Math.floor(Math.random() * fechasNacimiento.length)];
        personas.push(new persona(id, nombre, apellidos, fechaNacimiento, Localidad, CodigoPostal, provincia));
        id++;
    }
    console.log(personas);

    }
    let numPersonas =  document.getElementById("numPersonas").value;

    window.onload = function() {
    document.getElementById("btnPro").addEventListener("click",CrearDatos(numPersonas));
}


