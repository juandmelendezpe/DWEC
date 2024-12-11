
function escribeContenido(evento) {
    console.log("contenido: " + evento.target.textContent + "id : " + evento.target.id);
}
function realizarAccion(evento) {
    let accionaRealizar = evento.target.id;
    if(accionaRealizar == "aniade"){
        console.log("aniade");
        }else if(accionaRealizar == "modificar"){
        console.log("modifica");    
    }else if(accionaRealizar == "eliminar"){
        console.log("eliminar");
    }
}

window.onload = function() {
    //document.getElementById("pasarTarget").addEventListener("click",escribeContenido);
   let parrafos = document.querySelectorAll("p");
   for (let parrafo of parrafos) {
       parrafo.addEventListener("click",escribeContenido);
   }
   let botones = document.querySelectorAll(".botones");
    for (let boton of botones) {
         boton.addEventListener("click",realizarAccion);
    }
}