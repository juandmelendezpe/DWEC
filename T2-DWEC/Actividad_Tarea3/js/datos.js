const NombresHombres = ["Antonio", "José", "Manuel", "Francisco", "David", "Juan", "José Antonio", "Javier", 
    "Francisco Javier", "José Luis", "Daniel", "Jesús", "Carlos", "Alejandro", "Miguel", "José Manuel", "Raúl", 
    "Ángel", "Miguel Ángel", "José María", "Fernando", "Luis", "Sergio", "Pablo", "Alberto", "Juan Carlos", 
    "Jorge", "Alberto", "Rafael", "Pedro", "Enrique", "Rubén", "Víctor", "Adrián", "Óscar", "Andrés", 
    "Juan José", "Diego", "Ricardo", "Iván", "Eduardo", "Mario", "Félix", "Gonzalo", "Guillermo", "Salvador",
     "Tomás", "Hugo", "Roberto", "Emilio", "Marcos", "Alfredo", "Santiago", "Arturo", "César", "Ismael",
      "Federico", "Jaime", "Agustín", "Abel", "Alfonso", "Álvaro", "Amador", "Aníbal", "Anselmo", "Antolín",
       "Antonio José", "Antonio Manuel", "Antonio María", "Antonio Miguel", "Antonio Ramón", "Antonio Vicente"];

const NombresMujeres = ["María Carmen", "María", "Carmen", "Ana María", "María Pilar", "Laura", "María Dolores",
    "María Teresa", "Ana", "María Angeles", "Isabel", "Cristina", "Marta", "Francisca", "Antonia", "Dolores",
    "María Isabel", "María Josefa", "María Luisa", "Lucía", "María Elena", "María Concepción", "Sara", "Elena",
    "Raquel", "Rosa María", "María Rosa", "Pilar", "Patricia", "María Fernanda", "María Belén", "María Soledad",
    "María Nieves", "María Mar", "María Asunción", "María Jesús", "María Ángeles", "María Rosario", "María Luz",
    "María Antonia", "María Consuelo", "María Encarnación", "María Victoria", "María Candelas", "María Milagros",
    "María Montserrat", "María del Carmen", "María del Mar", "María del Pilar", "María del Rosario", "María de los Ángeles",
    "María de los Desamparados", "María de la Cruz", "María de la O", "María de la Paz", "María de la Soledad", "María de las Mercedes",
    "María de los Milagros", "María de los Remedios", "María de los Ángeles", "María de los Dolores", "María de los Milagros", "María de los Reyes"];

const apellidosUno = ["García", "Fernández", "González", "Rodríguez", "López", "Martínez", "Sánchez", "Pérez", "Gómez", "Martín"];
const apellidosDos = ["García", "Fernández", "González", "Rodríguez", "López", "Martínez", "Sánchez", "Pérez", "Gómez", "Martín",
    "Jiménez", "Ruiz", "Hernández", "Díaz", "Moreno", "Álvarez", "Muñoz", "Romero", "Alonso", "Gutiérrez"];

const Localidades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Zaragoza", "Málaga", "Murcia", "Palma de Mallorca", "Las Palmas de Gran Canaria", "Bilbao"];
const codigosPostales = ["28001", "08001", "46001", "41001", "50001", "29001", "30001", "07001", "35001", "48001"];
const provincias = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Zaragoza", "Málaga", "Murcia", "Islas Baleares", "Las Palmas", "Vizcaya"];
const CCAA = ["Comunidad de Madrid", "Cataluña", "Comunidad Valenciana", "Andalucía", "Aragón", "Andalucía", "Región de Murcia", "Islas Baleares", "Canarias", "País Vasco"];
const dni = ["12345678A", "87654321B", "12348765C", "56781234D", "87651234E", "34567812F", "23456781G", "78123456H", 
            "34567812I", "56781234J", "87654321K", "12345678L", "87654321M", "12345678N", "87654321O", "12345678P", "87654321Q", "12345678R", "87654321S", "12345678T"];
const fechaNacimiento = ["01/01/1990", "02/02/1990", "03/03/1990", "04/04/1990", "05/05/1990", "06/06/1990", "07/07/1990", "08/08/1990", "09/09/1990", "10/10/1990", "11/11/1990", "12/12/1990"];

function CrearDatos(numPersonas){
    const personas = [];
  //  const numPersonas = 50;
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
    CCAA = CCAA[Math.floor(Math.random() * CCAA.length)];
    dni = dni[Math.floor(Math.random() * dni.length)];
    fechaNacimiento = fechaNacimiento[Math.floor(Math.random() * fechaNacimiento.length)];
    personas.push(new persona(id, nombre, apellidos, fechaNacimiento, Localidad, CodigoPostal, provincia, CCAA, dni));
    id++;
}
console.log(personas);
return personas;
}

window.onload = function(){
    let numPersonas = document.getElementById("cantItems").value;
    document.getElementById("btnPro").addEventListener("click", CrearDatos(numPersonas));

}