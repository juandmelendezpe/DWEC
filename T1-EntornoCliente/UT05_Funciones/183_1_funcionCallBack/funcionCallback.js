function llamadaConLog(){
    escribe("Hola",console.log);
}
function llamadaConError(){
    escribe("Adios",console.error);
}
function llamadaConAlert(){
    escribe("Buenas",Alert);
}

function escribe(dato,funcion){
    funcion(dato);

}
window.onload = function(){
    document.getElementById("llamarLog").addEventListener("click", llamadaConLog);
    document.getElementById("llamarError").addEventListener("click", llamadaConError);
    document.getElementById("llamarAlert").addEventListener("click", llamadaConAlert);

}