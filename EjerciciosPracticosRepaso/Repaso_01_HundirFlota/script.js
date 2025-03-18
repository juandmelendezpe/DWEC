let barcos = ["barco0", "barco1","barco2","barco3"];
let agua = "agua";
let estrella = "estrella";
let estrellaBrilla = "estrellaBrilla";
let puntos = 3;

function devolverNumero(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}
function cargarBarcos(){
    let barcosUsados = new Set();
    let completado = 0;
    let estrellasColocadas = 0;
    while(completado <=11){
        let numPosicion = devolverNumero(0,3);
        let posicionImagen = "imagen" + numPosicion;
        let nombreImagenBarco = "./imagenes/"+barcos[numPosicion]+".png";
        let nombreImagenAgua = "./imagenes/"+agua+".png";
        let nombreImagenEstrella = "./imagenes/"+estrella+".png";

        if(!barcosUsados.has(nombreImagenBarco)){
            document.getElementById(posicionImagen).setAttribute("src", nombreImagenBarco);
            barcosUsados.add(barcos[numPosicion]);
            completado++;
            
          
        /* if(document.getElementById(posicionImagen).getAttribute("src")==""){
                document.getElementById(posicionImagen).setAttribute("src",nombreImagenEstrella);
                estrellasColocadas++; 
            }
                */
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
function ocultarBarcos(){
   let ocultar = document.getElementsByClassName("imagen");
    ocultar.classList.add("oculto");
}



function ocultarPolicia() {
    let policia = document.getElementById("policia");
    alert("el policia se ocultara y el valor id es: " + policia.id);
    //policia.classList.add("oculto");
    policia.setAttribute("src","./imagenes/ocultar.png")
    //ocultarBarcos();

}
window.onload = function() {
    cargarBarcos();
    document.getElementById("policia").addEventListener("click",ocultarPolicia);

}