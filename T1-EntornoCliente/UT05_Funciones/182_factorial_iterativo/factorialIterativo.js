let cadena = "";
function calcularFactorial(){
    let valorCalcular = prompt("Introduce un número para calcular su factorial");//prompt es una ventana emergente que pide un valor
    let valorCalculado = factorialIterativo(valorCalcular);//llamamos a la funcion factorialIterativo
    alert("El factorial de " + valorCalcular + " es " + valorCalculado );//alert es una ventana emergente que muestra un mensaje
    alert("La secuencia de llamadas iterativas es: \n" + cadena);
    
}

//funcion para calcular el factorial de un numero
function factorialIterativo(n){
    let resultado = 1;
    for(let i = 1; i <= n; i++){
        cadena = cadena + i + "\n";
        resultado = resultado * i;
    }
    return resultado;
}
//callback = funcion que se pasa como parametro a otra funcion
window.onload = function(){
    document.getElementById("factorialiterativo").
    addEventListener("click", calcularFactorial);
}
// Compare this snippet from T1-EntornoCliente/UT05_Funciones/181_factorial_recursivo/factorialRecursivo.html: