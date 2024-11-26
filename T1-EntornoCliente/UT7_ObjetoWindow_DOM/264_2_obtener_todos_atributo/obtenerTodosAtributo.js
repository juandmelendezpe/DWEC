function obtenerTodosAtributo() {
    let listaAtributo = document.querySelector("edad").attributes;

    for (const atributo of listaAtributo) {
        console.log(`Atributo: ${atributo.name} --` + `valor:${atributo.value}`);
    }
}

window.onload = function() {
    document.getElementById("obtenerTodosAtributo").addEventListener("click",obtenerTodosAtributo)
}