let nombre = "Juan Melendez";
let edad = 28;
let mayorDeEdad = true;
console.log(`hola: ${nombre}, tienes ${edad} años. ¿Eres mayor de edad? ${mayorDeEdad}`);
console.log("Nombre: " + nombre + ", Edad: " + edad + ", Mayor de edad: " + mayorDeEdad);
console.log("-----------------------------");
let sexo = 'M';
console.log(`su sexo es:${sexo ? `varon` : `mujer`}`);
console.log("-----------------------------");

function calcularAreaRectangulo(base, altura) {
    return base * altura;
}