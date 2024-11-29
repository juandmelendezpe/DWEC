function cargarColecciones() {
    let principal = document.getElementById("principal");
    let listauno = document.getElementsByClassName("especial");
    let listados = document.querySelectorAll(".especial");
    console.log("getElementsByClassName: ", listauno.length);
    console.log("querySelectorAll: ", listados.length);

    principal.removeChild(listauno[0]);
    console.log("-------------------------------");
    console.log("getElementsByClassName: ", listauno.length);
    console.log("querySelectorAll: ", listados.length);
    

}

window.onload = function() {
    document.getElementById("cargarColecciones").addEventListener("click",cargarColecciones);
}