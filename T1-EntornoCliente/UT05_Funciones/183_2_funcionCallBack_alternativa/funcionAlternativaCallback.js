function llamadaConLog(){
    escribe("Hola","log");//llamada a la función escribe con los parámetros "Hola" y "log"
}
function llamadaConError(){
    escribe("Adios","error"); // llamada a la función escribe con los parámetros "Adios" y "error"
}
function llamadaConAlert(){
    escribe("Buenas","alert"); // llamada a la función escribe con los parámetros "Buenas" y "alert"
}
function llamadaParametroNo(){
    escribe("Nada","cualquiera"); // llamada a la función escribe con los parámetros "Nada" y "cualquiera"
}

function escribe(dato,opcion){
if (opcion=="log"){
    console.log(dato);//muestra el dato en la consola
    
}else if (opcion=="error"){
    console.error(dato); //muestra el dato en la consola como error
}
else if (opcion=="alert"){
    alert(dato); //muestra el dato en una ventana de alerta
}
else{
    console.log("Opción no válida"); //muestra un mensaje en la consola si la opción no es válida
}

}
window.onload = function(){
    document.getElementById("llamarLog").addEventListener("click", llamadaConLog); //se añade un evento al hacer click en el botón con id llamarLog
    document.getElementById("llamarError").addEventListener("click", llamadaConError); //se añade un evento al hacer click en el botón con id llamarError
    document.getElementById("llamarAlert").addEventListener("click", llamadaConAlert); // se añade un evento al hacer click en el botón con id llamarAlert
    document.getElementById("llamarNo").addEventListener("click", llamadaParametroNo); // se añade un evento al hacer click en el botón con id llamarNo


}