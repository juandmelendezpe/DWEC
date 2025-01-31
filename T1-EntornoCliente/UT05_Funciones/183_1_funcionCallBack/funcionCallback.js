function llamadaConLog(){
    escribe("Hola",console.log); // Se pasa la función console.log como parámetro
}
function llamadaConError(){
    escribe("Adios",console.error); // Se pasa la función console.error como parámetro
}
function llamadaConAlert(){
    escribe("Buenas",alert);    // Se pasa la función alert como parámetro
}

function escribe(dato,funcion){ // Se recibe un dato y una función
    funcion(dato);

}

window.onload = function(){
    document.getElementById("llamarLog").addEventListener("click", llamadaConLog); // Se asocia el evento click a la función llamadaConLog
    document.getElementById("llamarAlert").addEventListener("click", llamadaConAlert); // Se asocia el evento click a la función llamadaConAlert
    document.getElementById("llamarError").addEventListener("click", llamadaConError); // Se asocia el evento click a la función llamadaConError

}