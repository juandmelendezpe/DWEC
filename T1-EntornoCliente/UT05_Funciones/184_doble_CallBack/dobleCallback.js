function llamadaConLog(){
    escribe("Hola","log");
}
function llamadaConError(){
    escribe("Adios","error");
}
function llamadaConAlert(){
    escribe("Buenas","Alert");
}
function llamadaParametroNo(){
    escribe("Nada","cualquiera");
}

function escribe(x,accion){
console.log(accion(x));


}
window.onload = function(){
    document.getElementById("dobleCallBack").addEventListener("click", llamadaDobleCallBack);
    document.getElementById("dobleCallBackAnonima").addEventListener("click", llamadaDobleCallBackAnonima);
    document.getElementById("dobleCallBackFlecha").addEventListener("click", llamadaDobleCallBackFlecha);


}