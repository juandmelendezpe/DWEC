function recuperarporEtiqueta() {
    let principal =document.getElementById("principal");
    let interior = principal.getElementsByTagName("p");
    console.log("Número de párrafos: " + interior.length);

}
    
window.onload = function() {
    document.getElementById("principal").addEventListener("click",recuperarporEtiqueta);
}