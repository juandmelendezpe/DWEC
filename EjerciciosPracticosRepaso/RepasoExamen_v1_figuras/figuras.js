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


function ocultarFigura(elemento){
    let valorElemento = elemento.target.id;
    //alert("has pulsado el elemento :" +valorElemento);
    var cont = 0 ;
    var temp = setInterval(
        function(){
            document.getElementById(valorElemento).classList.toggle("ocultar");
            comparaFiguras(elemento);
            cont++;
            console.log("hola" + cont);
            if(cont >=4){
                clearInterval(temp)
            }
        },750);
}
function comparaFiguras(idElemento){
    let valorElemento = idElemento.target.id;
    if(valorElemento == posicionActual){
        alert("los elementos son iguales :" +valorElemento +"=" + posicionActual);
    }else{
        alert("son distintos");
    }
}
window.onload = function() {
    cargarSecuencia();
    cargarImagenesCentral();
    for(i =0 ; 0 < 6 ; i++){
        let idposicion= "posicion"+i;
        document.getElementById(idposicion).addEventListener("click",ocultarFigura);

    }

}