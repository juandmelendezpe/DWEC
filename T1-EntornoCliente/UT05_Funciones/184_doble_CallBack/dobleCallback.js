function llamadaDobleCallBack(){
    escribir(12,double);
}
function escribir(x,accion){
    console.log(accion(x));
}
function llamadaDobleCallAnonima(){
    escribir(10,function(x){
        return x*2;
    });
}

function llamadaDobleCallFlecha(){
    escribir(12, x => x*2);
}
function double(x){
    return x*2;
}


window.onload = function(){
    document.getElementById("dobleCallBack").addEventListener("click", llamadaDobleCallBack);
    document.getElementById("dobleCallBackAnonima").addEventListener("click", llamadaDobleCallAnonima);
    document.getElementById("dobleCallBackFlecha").addEventListener("click", llamadaDobleCallFlecha);
    
   
}