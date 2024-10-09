let cadena = "";
function calcularFactorial(){
    let valorCalcular = prompt("Introduce un número para calcular su factorial");//prompt es una ventana emergente que pide un valor
    let valorCalculado = factorialRecursivo(valorCalcular);//llamamos a la funcion factorialRecursivo
    alert("El factorial de " + valorCalcular + " es " + valorCalculado );//alert es una ventana emergente que muestra un mensaje
    alert("La secuencia de llamadas recursivas es: \n" + cadena);
    
}
//funcion para calcular el factorial de un numero
function factorialRecursivo(n){
    if(n <= 1){
      cadena = cadena + n + "\n"; 
      return 1;
    }else{
      cadena = cadena + n + "\n";
      return n * factorialRecursivo(n-1);
    } 
}
//callback = funcion que se pasa como parametro a otra funcion
window.onload = function(){
    document.getElementById("factorialRecursivo").
    addEventListener("click", calcularFactorial);
}