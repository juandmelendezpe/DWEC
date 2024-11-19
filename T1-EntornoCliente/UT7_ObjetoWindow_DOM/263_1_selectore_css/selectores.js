function cargarSelectores() {
    let selectores = document.querySelectorAll(".selector")
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = ""
    for (let i = 0; i < selectores.length; i++) {
        resultado.innerHTML += selectores[i].innerHTML + "<br>"
    }
}


window.onload = function() {
    document.getElementById("cargarSelectores").addEventListener("click",cargarSelectores)
}