function recuperarClase() {
    var verdura = document.getElementsByClassName("verdura");
    let listadoVerduras = [...verdura];

    listadoVerduras.forEach(element => {
        console.log(element.textContent);
    });

}
window.onload = function() {
    document.getElementById("cargarClase").addEventListener("click",recuperarClase)
}