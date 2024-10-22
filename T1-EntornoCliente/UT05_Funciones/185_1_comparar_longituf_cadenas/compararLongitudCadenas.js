function compararCadenas(){
    let cadena1 = prompt("Introduce la primera cadena");
    let cadena2 = prompt("Introduce la segunda cadena");
    let resultado = ordenPersonal(cadena1,cadena2);

    if(resultado==0){
        alert("Las cadenas son iguales --> "+ resultado);
    }else if(resultado<0){
            alert("La primera cadena es más corta que la segunda --> "+ resultado);
        }
        else{
            alert("La primera cadena es más larga que la segunda --> "+ resultado);
        }
    }
function ordenPersonal(a,b){
    return a.length-b.length;
}    
window.onload = function(){
    document.getElementById("comparar").addEventListener("click",compararCadenas);
}
