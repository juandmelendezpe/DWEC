let barcos =["barco1","barco2","barco3","barco4","estrella"];
let estrellas = ["estrellaBrilla","estrella"]
let agua = ["agua"]
let secuencia=[];
let vidas =3;
let puntuacion = 0;

function devolverNumero(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}
function cargarImagenes(){
   completado = 0;
   //figurasUsadas = new Set();
    while(completado<6){
        let numeroPosicion = devolverNumero(0,5);
        let posicionSecuncia = "imagen" + completado;
        let nombreImagen = "./imagenes/" + barcos[numeroPosicion] + ".png";
         document.getElementById(posicionSecuncia).setAttribute("src",nombreImagen);
        if(figurasUsadas.has(barcos[numeroPosicion])){
            figurasUsadas.add(barcos[numeroPosicion]);
           completado++;   
        }
    }
}
  //
  function mostrarTrasparente(idSecuncia) {
    document.getElementById(idSecuncia).classList.add("trasparente");
}

  function ocultarFigura(idFigura,idSecuencia){
    let contador = 0;
    let tiempo = setInterval(
        function(){            
            if(contador >= 4){
                clearInterval(tiempo);
                mostrarTrasparente(idSecuencia);
                mostrarTrasparente(idFigura);                
            }else{
                document.getElementById(idFigura).classList.toggle("ocultar");                
                contador++;
            }
        },750);
       
    }

    function compararFiguras(elemento){    
        let padre = document.getElementById("posicion");
        let hijo = padre.childNodes[1];


       /* if( (terminado < 7) && (vidas > 0) ){

            let idTablero = elemento.target.id;
            let figuraTablero = document.getElementById(idTablero).getAttribute("src");
            let idSecuencia = "letras" + terminado;
            let figuraSecuencia = document.getElementById(idSecuencia).getAttribute("src");
            if(figuraTablero == figuraSecuencia){            
                ocultarFigura(idTablero,idSecuencia);            
                terminado++;
                puntuacion++;
            }else{            
                vidas--;
                barraVidas(vidas);
                puntuacion--;
                if(vidas == 0){             
                    setTimeout(()=>{alert("Partida terminada")},1000);
                }            
            }        
            if(terminado == 6){
                setTimeout(()=>{fijarRecord()},5000);
            }
        }
            */
    }
window.onload = function() {
    cargarImagenes();
    for(let i=0 ; i<6 ; i++){
        let idTablero = "juego" + i;
        document.getElementById(idTablero).addEventListener("click",compararFiguras);
    }

    

}

