let barcos = ["barco1", "barco2","barco3","barco4"];
let agua = "agua";
let estrella = "estrella";
let estrellaBrilla = "estrellaBrilla";

function devolverNumero(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}
function cargarBarcos(){
    let barcosUsados = new Set();
    let completado = 0;
    while(completado <=11){
        let numPosicion = devolverNumero(1,3);
        let posicionImagen = "imagen" + completado;
        let nombreImagenBarco = "./imagenes/"+barcos[numPosicion]+".png";
        //let nombreImagenAgua = "./imagenes/"+agua+".png";
        //let nombreImagenEstrella = "./imagenes/"+estrella+".png";

        if(!barcosUsados.has(nombreImagenBarco)){
            document.getElementById(posicionImagen).setAttribute("src", nombreImagenBarco);
            barcosUsados.add(barcos[numPosicion]);
            completado++;
        }

    }
}
function cargarAgua() {
    let recuperacionFiguras = document.getElementsByClassName("imagen"); // Recuperamos las figuras de la clase imagen
    for (let i = 0; i < recuperacionFiguras.length; i++) {
        let nombreImagenAgua = "./imagenes/" + agua + ".png";
        recuperacionFiguras[i].setAttribute("src", nombreImagenAgua); // Cambiamos la imagen por agua
    }
}



function ocultarPolicia() {
    let policia = document.getElementById("policia");
    alert("el policia se ocultara y el valor id es: " + policia.id);
    policia.classList.add("oculto");
    cargarAgua();

}
window.onload = function() {
    cargarBarcos();
    document.getElementById("policia").addEventListener("click",ocultarPolicia);

}