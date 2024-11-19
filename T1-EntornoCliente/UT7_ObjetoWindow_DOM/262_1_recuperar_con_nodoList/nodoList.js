function recuperarporEtiqueta() {
    let principal =document.getElementById("principal");
    let listaParrafo = principal.getElementsByTagName("p");

    console.log("----------------------");

    let listaArray = [...listaParrafo];
    listaArray.forEach((elemento) => {
        console.log(elemento.textContent);
    });
    

}
    
window.onload = function() {
    document.getElementById("principal").addEventListener("click",recuperarporEtiqueta);
}