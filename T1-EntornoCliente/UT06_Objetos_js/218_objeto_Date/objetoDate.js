function objetofecha() {
    let hoy = new Date();
    console.log("new Date() -> " + hoy);
    let fecha = new Date(2022, 11, 25, 12, 18, 10, 20);
    console.log("new Date(2022, 11, 25, 12, 18, 10, 20) -> " + fecha);

    let fecha2 = new Date("2002,5,17");
    console.log("new Date('2002,5,17') -> " + fecha2);
    console.log("fecha2.getDate() -> " + fecha2.getDate());
    console.log("fecha2.getUtcDate() -> " + fecha2.getUTCDate());
}
    
window.onload = function() {
    document.getElementById("objetoFecha").addEventListener("click", objetofecha);
}