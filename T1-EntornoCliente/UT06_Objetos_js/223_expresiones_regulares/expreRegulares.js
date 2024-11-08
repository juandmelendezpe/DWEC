function validarDni() {
    let dni = prompt("Introduce tu DNI");
    //[0-9]{8} -> permite numeros de 0- 9 y que se repitan 8 veces
    //[klxyz0-9] -> permite las letras k,l,x,y,z y los numeros del 0 al 9
    //let expresionNIF = /[klxyz0-9][0-9]{7}{A-Z}{1}/; // las barras son los delimitadores de la expresión regular
    let expresionNIF =  /^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]$/i; // permite letras mayusculas y minusculas
    console.log(expresionNIF.test(dni));

    if (expresionNIF.test(dni)) {
        console.log("DNI correcto" + dni);
        alert("DNI correcto");
    } else {
        console.log("DNI incorrecto" + dni);
        alert("DNI incorrecto");
    }
}
function existecaracter() {
    let cadena = prompt("Introduce una cadena");
    let caracter = prompt("Introduce un caracter");

    let expresion = new RegExp(caracter,"i"); // permite letras mayusculas y minusculas
    console.log(expresion);
    
    if (expresion.test(cadena)) {
        console.log("El caracter " + caracter + " existe en la cadena " + cadena);
    } else {
        console.log("El caracter " + caracter + " no existe en la cadena " + cadena);
    }
   
}

function empiezaYTermina() {
    let cadena = prompt("Introduce una cadena");
    let expresion = /^a.*z$/; // empieza por a y termina por z
    console.log(expresion);
    if (expresion.test(cadena)) {
        console.log("La cadena " + cadena + " empieza por a y termina por z");
    } else {
        console.log("La cadena " + cadena + " no empieza por a y termina por z");
    }
}

function conMayuscula() {
    let cadena = prompt("Introduce una cadena");
    let expresion = /[A-Z]/; // permite letras mayusculas y minusculas
    console.log(expresion);
    if (expresion.test(cadena)) {
        console.log("La cadena " + cadena + " contiene una letra mayuscula");
    } else {
        console.log("La cadena " + cadena + " no contiene una letra mayuscula");
    }
}



window.onload = function() {
    document.getElementById("validarDni").addEventListener("click", validarDni);
    document.getElementById("existeCaracter").addEventListener("click",existecaracter);
    document.getElementById("empiezaYTermina").addEventListener("click",empiezaYTermina);
    document.getElementById("conMayuscula").addEventListener("click",conMayuscula);
}