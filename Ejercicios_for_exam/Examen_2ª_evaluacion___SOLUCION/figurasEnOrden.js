
figuras = ["circuloAzul","circuloRojo","circuloVerde",
           "cuadradoAzul","cuadradoRojo","cuadradoVerde",
           "trianguloAzul","trianguloRojo","trianguloVerde"];
terminado = 0;
vidas = 4;
puntuacion = 0;
records = [];

class RecordsPersonas{
    constructor(nombre, puntuacion){
        this.nombre = nombre;
        this.puntuacion = puntuacion;
    }
    mostrarDatos(){
        return this.nombre + " " + this.puntuacion;
    }
    recuperarPuntuacion(){
        return this.puntuacion;
    }
}

let personaUno = new RecordsPersonas("María",5);
let personaDos = new RecordsPersonas("Ana",3);
let personaTres = new RecordsPersonas("Jesús",1);
records.push(personaUno);
records.push(personaDos);
records.push(personaTres);

function devolverNumero(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}

function cargarSecuencia(){
    completado = 0;
    figurasUsadas = new Set();
    while(completado<6){
        let numeroPosicion = devolverNumero(0,8);
        let posicionSecuncia = "secuencia" + completado;
        let nombreImagen = "./imagenes/" + figuras[numeroPosicion] + ".png";
        if(!figurasUsadas.has(figuras[numeroPosicion])){
            document.getElementById(posicionSecuncia).setAttribute("src",nombreImagen);
            figurasUsadas.add(figuras[numeroPosicion]);
            completado++;   
        }
    }    
}

function cargarTablero(){
    completadoTablero = 0;
    while(completadoTablero<6){        
        let numeroPosicionTablero = devolverNumero(0,5);
        let posicionTablero = "juego" + numeroPosicionTablero;        
        let posicionSecuencia = "secuencia" + completadoTablero;
        let nombreImagenTablero = document.getElementById(posicionSecuencia).getAttribute("src");
        if(document.getElementById(posicionTablero).getAttribute("src")==""){
            document.getElementById(posicionTablero).setAttribute("src",nombreImagenTablero);
            completadoTablero++;
        }
    }
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
        // 750 para juego según pide enunciado
        },750);
        // 1 para pruebas
        //},1);    
    }
    
function mostrarTrasparente(idSecuncia) {
    document.getElementById(idSecuncia).classList.add("trasparente");
}
    
function fijarRecord(){
    let nombre = prompt("Ingrese su nombre:");        
    let personaJuega = new RecordsPersonas(nombre,puntuacion);
    let puntuaciones = "PUNTUACIONES JUGADORES \n";
    records.push(personaJuega);
    records.sort(function(a,b){        
        return b.recuperarPuntuacion()-a.recuperarPuntuacion();
    });
    records.forEach(element => {
        //console.log(element.mostrarDatos());
        puntuaciones += element.mostrarDatos() + "\n";
    })
    alert(puntuaciones);
    //console.log(records);
    
}

function compararFiguras(elemento){        
    if( (terminado < 7) && (vidas > 0) ){
        let idTablero = elemento.target.id;
        let figuraTablero = document.getElementById(idTablero).getAttribute("src");
        let idSecuencia = "secuencia" + terminado;
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
}

function quitarEstiloVidas(){
    document.getElementById("vidas1").classList.remove("vidas4");
    document.getElementById("vidas2").classList.remove("vidas4");
    document.getElementById("vidas3").classList.remove("vidas4");
    document.getElementById("vidas4").classList.remove("vidas4");
    document.getElementById("vidas1").classList.remove("vidas3");
    document.getElementById("vidas2").classList.remove("vidas3");
    document.getElementById("vidas3").classList.remove("vidas3");        
    document.getElementById("vidas1").classList.remove("vidas2");
    document.getElementById("vidas2").classList.remove("vidas2");
}

function barraVidas(vidas){
    //quitarEstiloVidas();
    if(vidas == 4){
        document.getElementById("vidas1").classList.add("vidas4");
        document.getElementById("vidas2").classList.add("vidas4");
        document.getElementById("vidas3").classList.add("vidas4");
        document.getElementById("vidas4").classList.add("vidas4");
    }else if(vidas == 3){
       // document.getElementById("vidas1").classList.add("vidas3");
        //document.getElementById("vidas2").classList.add("vidas3");
        document.getElementById("vidas3").classList.add("vidas3");        
        document.getElementById("vidas3").textContent = "75%";
        //document.getElementById("vidas4").textContent = "";
        document.getElementById("vidas4").classList.add("ocultar");

    }else if(vidas == 2){
       // document.getElementById("vidas1").classList.add("ocultar");
        //document.getElementById("vidas1").classList.add("vidas2");
        document.getElementById("vidas2").classList.add("vidas2");
        document.getElementById("vidas2").textContent = "50%";
       // document.getElementById("vidas3").textContent = "";
       document.getElementById("vidas3 vidas4").classList.add("ocultar");
       //document.getElementById("vidas4").classList.add("ocultar");
    }else if(vidas == 1){
        document.getElementById("vidas2 vidas3 vidas4").classList.add("ocultar");
        document.getElementById("vidas1").classList.add("vidas1");
        document.getElementById("vidas1").textContent = "25%";
        //document.getElementById("vidas2").textContent = "";
      // document.getElementById("vidas3").classList.add("ocultar");
      //  document.getElementById("vidas4").classList.add("ocultar");


    }else if(vidas == 0 ){
        document.getElementById("vidas1").classList.add("vidas0");
        document.getElementById("vidas2").classList.add("vidas0");
        document.getElementById("vidas3").classList.add("vidas0");
        document.getElementById("vidas4").classList.add("vidas0");
        document.getElementById("vidas1").textContent = "0%";
        document.getElementById("vidas2").textContent = "---";
        document.getElementById("vidas3").textContent = "---";
        document.getElementById("vidas4").textContent = "---";        
    }
}

window.onload = function() {
    cargarSecuencia();
    cargarTablero();
    barraVidas(4);
    for(let i=0 ; i<6 ; i++){
        let idTablero = "juego" + i;
        document.getElementById(idTablero).addEventListener("click",compararFiguras);
    }
}