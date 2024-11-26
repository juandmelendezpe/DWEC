function ModificarAtributo() {
    let primeroLi = document.querySelector("li:first-of-type");
    primeroLi[0].setAttribute("class", "rojo");
}
window.onload = function() {
    document.getElementById("ModificarAtributo").addEventListener("click",ModificarAtributo);
}