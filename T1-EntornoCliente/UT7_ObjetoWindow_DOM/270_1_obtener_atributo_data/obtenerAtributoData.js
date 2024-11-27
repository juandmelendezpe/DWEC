function recuperarAtributoData(){
    let p1 = document.getElementById("p1");
    console.log(p1.dataset.libro);
    console.log(p1.dataset.autorPrincipal);
    console.log(p1.dataset.tipo);
    p1.dataset.tipo = "novela";
}

window.onload = function(){
    document.getElementById("recuperarAtributoData").addEventListener("click",recuperarAtributoData);
}