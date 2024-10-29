function crearObjetoEntreComillas() {
    let libro = {
        titulo: "Manual de UFOlogía","n-serie":"187C2",
        autores: ["Pedro Martínez", "Ana León"], // Esta propiedad es un array
        editorial: { // La editorial es otro objeto
            nombre: "Inexistente S.A.",
            pais: "España"
        },
        arrayUno: ['uno', 'dos'],
        arrayDos: ['hola', 'hola'],
        map: new Map([
            [1, "Jose"],
            [2, "Maria"],
            [3, "Elena"]
        ]),
        set: new Set([1, 2, 3, 4, 5, 6, 7])
    };
    console.log(libro.titulo);
    console.log(libro.editorial.nombre);
    console.log(libro.arrayUno);
    console.log(libro.arrayDos);
}
window.onload = function() {
    document.getElementById("objetoComillas").addEventListener("click", crearObjetoEntreComillas);
}




