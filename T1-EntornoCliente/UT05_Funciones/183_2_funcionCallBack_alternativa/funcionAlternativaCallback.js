function llamadaConLog(){
    escribe("Hola","log");
}
function llamadaConError(){
    escribe("Adios","error");
}
function llamadaConAlert(){
    escribe("Buenas","alert");
}
function llamadaParametroNo(){
    escribe("Nada","cualquiera");
}

function escribe(dato,opcion){
if (opcion=="log"){
    console.log(dato);
    
}else if (opcion=="error"){
    console.error(dato);
}
else if (opcion=="alert"){
    alert(dato);
}
else{
    console.log("Opción no válida");
}

}
window.onload = function(){
    document.getElementById("llamarLog").addEventListener("click", llamadaConLog);
    document.getElementById("llamarError").addEventListener("click", llamadaConError);
    document.getElementById("llamarAlert").addEventListener("click", llamadaConAlert);
    document.getElementById("llamarNo").addEventListener("click", llamadaParametroNo);


}