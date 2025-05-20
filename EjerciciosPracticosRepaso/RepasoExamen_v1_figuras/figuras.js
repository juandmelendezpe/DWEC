const figuras = ["circuloAzul", "circuloRojo", "circuloVerde",
    "cuadradoAzul", "cuadradoRojo", "cuadradoVerde",
    "trianguloAzul", "trianguloRojo", "trianguloVerde"
];
let posicionActual = 0;
records = [];
puntuacion = 0;
terminado = 0;
vidas = 4;

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
    var figurasUsadas = new Set();
    completado = 0;
    while(completado < 6){
        let numPosicion = devolverNumero(0,8);
        let posicionImagen = "imagenAbajo" + completado;
        let nombreImagen = "./imagenes/"+figuras[numPosicion]+".png"; 
        if(!figurasUsadas.has(figuras[numPosicion])){ // Si no se ha usado la figura
            document.getElementById(posicionImagen).setAttribute("src", nombreImagen);// Asignar la imagen
            figurasUsadas.add(figuras[numPosicion]);// Agregar la figura al conjunto
            completado++; // Incrementar el contador
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
    if( (terminado < 7) && (vidas > 0) ){
    let valorPosicion = idPosicion.target.id;//valorElemento = "posicion0"
    let posicionElemento = document.getElementById(valorPosicion).getAttribute("src");
    let valorSecuencia = "imagenAbajo"+ terminado;
    let posicionSecuencia = document.getElementById(valorSecuencia).getAttribute("src");
    
    if(posicionElemento == posicionSecuencia){
       // alert("los elementos son iguales :" +posicionElemento + " = " + posicionSecuencia + idPosicion.target.id);
        ocultarFigura(valorPosicion,valorSecuencia);
        posicionActual++;
        terminado++;
        puntuacion++;

    }else{
        alert("son distintos");
        vidas--;
        quitarVidas(vidas);
        puntuacion--;
        if(vidas==0){
            setTimeout(()=>{alert("Partida terminada")},1000);
        }
    }
    if(terminado == 6){
        setTimeout(()=>{fijarRecord()},5000);
    }
}
}
function fijarRecord(){
    let nombre = prompt("Ingrese su nombre:");        
    let personaJuega = new RecordsPersonas(nombre,puntuacion);
    let puntuaciones = "PUNTUACIONES JUGADORES \n";
    records.push(personaJuega); // Agregar el nuevo jugador a la lista
    records.sort(function(a,b){     // Ordenar la lista de jugadores por puntuación    
        return b.recuperarPuntuacion()-a.recuperarPuntuacion();
    });
    records.forEach(element => {
        //console.log(element.mostrarDatos());
        puntuaciones += element.mostrarDatos() + "\n"; // Mostrar los datos de cada jugador
    })
    alert(puntuaciones);
    console.log(records);
    
}
function quitarVidas(vidas){
    if(vidas==4){
        document.getElementById("vidas1").classList.add("vidas4");
        document.getElementById("vidas2").classList.add("vidas4");
        document.getElementById("vidas3").classList.add("vidas4");
        document.getElementById("vidas4").classList.add("vidas4");
    }else if(vidas ==3){
        document.getElementById("vidas3").classList.add("vidas3");        
        document.getElementById("vidas3").textContent = "75%";
        document.getElementById("vidas4").classList.add("ocultar");
    }else if(vidas ==2){
        document.getElementById("vidas2").classList.add("vidas2");
        document.getElementById("vidas2").textContent = "50%";
        document.getElementById("vidas3").classList.add("ocultar");
     }else if(vidas ==1){
        document.getElementById("vidas2 vidas3 vidas4").classList.add("ocultar");
        document.getElementById("vidas1").classList.add("vidas1");
        document.getElementById("vidas1").textContent = "25%";
        document.getElementById("vidas2").textContent = "";

     }else if(vidas ==0 ){
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
    cargarImagenesCentral();
    quitarVidas(4);
    for(i =0 ; i < 6 ; i++){
        let idposicion= "posicion"+i;
        document.getElementById(idposicion).addEventListener("click",comparaFiguras);
    }
}