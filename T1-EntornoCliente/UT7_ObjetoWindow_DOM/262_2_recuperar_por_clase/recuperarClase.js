function recuperarClase() {
    //seleccionamos los elementos con la clase verdura
    console.log("----Seleccionamos los elementos con la clase verdura----");
    var verdura = document.getElementsByClassName("verdura");
    let listadoVerduras = [...verdura];

    listadoVerduras.forEach(element => {
        console.log(element.textContent);
    })

}
window.onload = function() {
    document.getElementById("cargarClase").addEventListener("click",recuperarClase)
}