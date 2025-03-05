let figuras = ["circuloAzul", "circuloRojo", "circuloVerde",
    "cuadradoAzul", "cuadradoRojo", "cuadradoVerde",
    "trianguloAzul", "trianguloRojo", "trianguloVerde"
];
let posicionActual = 0;
function devolverNumero(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}
function cargarSecuencia(){
    var figurasUsadas = new Set();
    completado = 0;
    while(completado < 6){
        let numPosicion = devolverNumero(0,8);
        let posicionImagen = "imagenAbajo" + completado;
        let nombreImagen = "./imagenes/"+figuras[numPosicion]+".png"; 
        if(!figurasUsadas.has(figuras[numPosicion])){
            document.getElementById(posicionImagen).setAttribute("src", nombreImagen);
            figurasUsadas.add(figuras[numPosicion]);
            completado++;
        }
    }
}
function cargarImagenesCentral(){
    completado = 0;
    while( completado < 6){
      let  numeroPosicionTablero = devolverNumero(0,5);
      let  posicionTablero ="posicion" + numeroPosicionTablero; 
      let  posicionSecuencia ="imagenAbajo"+completado;
      let  nombreImagenTablero = document.getElementById(posicionSecuencia).getAttribute("src");
        if(document.getElementById(posicionTablero).getAttribute("src")==""){
            document.getElementById(posicionTablero).setAttribute("src",nombreImagenTablero);
            completado++;
        }
    }
}
function ocultarFigura(posicion,secuencia){
    var cont = 0 ;
    var temp = setInterval(
        function(){
            if(cont >=6){
                clearInterval(temp)
                document.getElementById(secuencia).classList.add("trasparente");
                document.getElementById(posicion).classList.add("trasparente");
            }else{
                document.getElementById(posicion).classList.toggle("ocultar");
                cont++;
            }
        },750);
}
function comparaFiguras(idPosicion){
    let valorPosicion = idPosicion.target.id;//valorElemento = "posicion0"
    let posicionElemento = document.getElementById(valorPosicion).getAttribute("src");
    let valorSecuencia = "imagenAbajo"+ posicionActual;
    let posicionSecuencia = document.getElementById(valorSecuencia).getAttribute("src");
    
    if(posicionElemento == posicionSecuencia){
        alert("los elementos son iguales :" +posicionElemento + " = " + posicionSecuencia);
        ocultarFigura(valorPosicion,valorSecuencia);
        posicionActual++;
    }else{
        alert("son distintos");

    }
}
function quitarVidas(vidas){
    if(vidas==4){
        document.getElementById("vidas1").classList.add("vidas4");
        document.getElementById("vidas2").classList.add("vidas4");
        document.getElementById("vidas3").classList.add("vidas4");
        document.getElementById("vidas4").classList.add("vidas4");
    }

}
window.onload = function() {
    cargarSecuencia();
    cargarImagenesCentral();
    quitarVidas(4);
    for(i =0 ; i < 6 ; i++){
        let idposicion= "posicion"+i;
        document.getElementById(idposicion).addEventListener("click",comparaFiguras);
    }
}