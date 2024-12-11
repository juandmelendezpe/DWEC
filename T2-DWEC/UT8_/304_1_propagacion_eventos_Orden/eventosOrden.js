
window.onload = function() {
    let div = document.querySelector("div");
    let p = document.querySelector("p");
    let boton = document.querySelector("button");

    console.log("Face burbuja, usecapture true");
    div.addEventListener("click",()=>console.log("cliv en div"),true); 
    p.addEventListener("click",()=>console.log("cliv en p"),true);
    boton.addEventListener("click",()=>console.log("cliv en boton"),true);
    
}