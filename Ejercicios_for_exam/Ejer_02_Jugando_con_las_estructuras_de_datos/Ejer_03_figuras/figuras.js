
let forma = "";
let rellenoForma = "";
let altoForma = 0;
let anchoForma = 0;

function figura(id) {
    //alert("Has hecho click en la figura --> " + id.target.id);
    let figuras = document.getElementsByClassName("figura");
    for (figura of figuras){
        figura.classList.remove("figuraSeleccionada");
    }
    document.getElementById(id.target.id).classList.add("figuraSeleccionada");
    forma = id.target.id;
    comprobarSeleccionados();
}
function relleno(id) {
    //alert("Has hecho click en el relleno");
    let rellenos = document.getElementsByClassName("relleno");
    for (relleno of rellenos){
        relleno.classList.remove("rellenoSeleccionado");
    }
    document.getElementById(id.target.id).classList.add("rellenoSeleccionado");
    rellenoForma = id.target.id;
    comprobarSeleccionados();
}
function alto(id) {
    //alert("Has hecho click en el número alto " + id.target.id);
    let altos = document.getElementsByClassName("alto");
    for (alto of altos){
        alto.classList.remove("altoSeleccionado");
    }
    document.getElementById(id.target.id).classList.add("altoSeleccionado");
    altoForma = id.target.id;
    let expresion = /\d+/;
    let resultado = expresion.exec(altoForma);
    altoForma = resultado[0];
    comprobarSeleccionados();
}
function ancho(id) {
    //alert("Has hecho click en el número ancho" + id.target.id);
    let anchos = document.getElementsByClassName("ancho");
    for (ancho of anchos){
        ancho.classList.remove("anchoSeleccionado");
    }
    document.getElementById(id.target.id).classList.add("anchoSeleccionado");
    anchoForma = id.target.id;
    let expresionAncho = /\d+/;
    let resultadoAncho = expresionAncho.exec(anchoForma);
    anchoForma = resultadoAncho[0];
    comprobarSeleccionados();
}
function comprobarSeleccionados(){
    //alert("Forma: " + forma + " Relleno: " + rellenoForma + " Alto: " + altoForma + " Ancho: " + anchoForma);
    inicializar();
    if((forma == "rectangulo") && (rellenoForma != "") && (altoForma != 0) && (anchoForma != 0)){
        //alert("RECTÁNGULO --> " + forma);
        cuadrado(altoForma,anchoForma);
        return true;
    }else if (forma == "cuadrado" && rellenoForma != "" && altoForma != 0){
        //alert("CUADRADO --> " + forma);        
        cuadrado(altoForma,altoForma);
        return true;
    } else if (forma == "triangulo" && rellenoForma != "" && altoForma != 0){
        //alert("TRIÁNGULO -->" + forma);
        triangulo();
        return true;
    }else{
        // alert("Faltan datos por seleccionar");
        return false;
    }
}
function inicializar(){
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++){
            let posicion = "celda" + i + j
            document.getElementById(posicion).textContent = i+""+j;
            document.getElementById(posicion).classList.remove("textoGrande");
            document.getElementById(posicion).classList.remove("bordeSuperior");
            document.getElementById(posicion).classList.remove("bordeInferior");
            document.getElementById(posicion).classList.remove("bordeIzquierdo");
            document.getElementById(posicion).classList.remove("bordeDerecho");
            document.getElementById(posicion).classList.remove("bordeTriangulo");
        }            
    }        
}
function cuadrado(alto,ancho){
    if(rellenoForma == "asteriscos"){                        
        for (let i = 0; i < alto; i++) {
            for (let j = 0; j < ancho; j++) {                
                let posicion = "celda" + i + j
                document.getElementById(posicion).textContent = "∗";
                document.getElementById(posicion).classList.add("textoGrande");
            }            
        }        
    }else{                
        for (let i = 0; i < alto; i++) {          
            for (let j = 0; j < ancho; j++) {                
                let posicion = "celda" + i + j
                //document.getElementById(posicion).textContent = "nada";
                if(i == 0){                    
                    document.getElementById(posicion).classList.add("bordeSuperior");
                }
                if(i == alto-1){
                    document.getElementById(posicion).classList.add("bordeInferior");
                }
                if(j == 0){
                    document.getElementById(posicion).classList.add("bordeIzquierdo");
                }
                if(j == ancho-1){
                    document.getElementById(posicion).classList.add("bordeDerecho");
                }
            }            
        }        
    }
}
function triangulo(){
    if(rellenoForma == "asteriscos"){
        // alert("Construir con asteríscos");
        for(let i = 0; i < altoForma; i++){
            for(let j = 0; j <= i; j++){
                let posicion = "celda" + i + j;
                document.getElementById(posicion).textContent = "∗";
                document.getElementById(posicion).classList.add("textoGrande");
            }
        }        
    }else{
        for(let i = 0; i < altoForma; i++){
            for(let j = 0; j <= i; j++){
                let posicion = "celda" + i + j;
                if(i == j){                    
                    document.getElementById(posicion).classList.add("bordeTriangulo");
                }
                if(i == altoForma-1){
                    document.getElementById(posicion).classList.add("bordeInferior");
                }
                if(j == 0){
                    document.getElementById(posicion).classList.add("bordeIzquierdo");
                }                
                document.getElementById(posicion).textContent = "∗";
                //document.getElementById(posicion).classList.add("textoGrande");

            }
        }        
    }
}
window.onload = function() {
    // Asigna eventos recorriendo la colección de elementos
    // que tienen la clase "figura" --- FOR TRADICIONAL ---
    let figuras = document.getElementsByClassName("figura");
    for (let i=0; i < figuras.length; i++){
        figuras[i].addEventListener("click", figura);
    }
    // Asigna eventos recorriendo la colección de elementos
    // usando un bucle for...of --- FOR...OF ---
    let rellenos = document.getElementsByClassName("relleno");
    for (let elemento of rellenos){
        elemento.addEventListener("click", relleno);
    }
    // Asigna eventos por delegación de eventos
    let divsAlto = document.getElementById("alto");
    divsAlto.addEventListener("click", alto);
    let divsAncho = document.getElementById("ancho");
    divsAncho.addEventListener("click", ancho);       
    
}