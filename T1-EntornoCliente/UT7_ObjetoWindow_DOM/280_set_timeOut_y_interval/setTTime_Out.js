function ejecutarSetTimeOut() {
    setTimeout(()=>("Hola setTimeOut"), 2000);
    alert("Adios");
}
function funcionDespues() {
    console.log("Hola");
    console.log("Adios");
}
function ejecutarTodoDespues() {
    setTimeout(()=>funcionDespues(),2000);
}

function ejecuarSetInterval() {
    var cont =0;
    var temp2 = setInterval(
        function(){
        console.log("Hola"+ cont);
        cont++;
        if(cont>=10){
            clearInterval(temp2);
        }
    }, 1000);
    console.log("Adios y cuando sale");
}
window.onload = function() {
    document.getElementById("setTimeOut").addEventListener("click",ejecutarSetTimeOut);
    document.getElementById("setTimeOutTodo").addEventListener("click",ejecutarTodoDespues);
    //document.getElementById("setInterval").addEventListener("click",ejecuarSetInterval);
    
}