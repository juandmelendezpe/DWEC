
function promesaIntervalo() {
    console.log("------->antes de la promesa");
    var promesa = new Promise(function(resolver,rechazar){
        let n = 0;
        let intervalo = setInterval(function(){ 
            n++;
            console.log("Han pasado "+n+" segundos");
            if(n == 10){
                resolver("Fin del intervalo han pasado 10 segundos");
                clearInterval(intervalo);
            }
        },1000);
    }
    );
    promesa.then(function(mensaje){
        console.log(mensaje);
    });
    console.log("------->después de la promesa");
}


window.onload = function() {
    document.getElementById("promesaInter").addEventListener("click",promesaIntervalo);
}