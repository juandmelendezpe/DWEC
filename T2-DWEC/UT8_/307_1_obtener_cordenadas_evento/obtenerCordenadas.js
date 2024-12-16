function obtenerCordenadasEvento() {
   let p = "hola"; 
   document.addEventListener("mousemove",function(evento){
    console.log(`screenX: ${evento.screenX} screenY: ${evento.screenY}\n+
        clientX: ${evento.clientX} clientY: ${evento.clientY}\n+
        pageX: ${evento.pageX} pageY: ${evento.pageY}\n`);

    });

}
window.onload = function() {
    document.getElementById("obtenerCordenadasEvento").addEventListener("click",obtenerCordenadasEvento)
}