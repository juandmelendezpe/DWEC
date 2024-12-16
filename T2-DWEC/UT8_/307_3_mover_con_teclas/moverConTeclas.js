
function moverCara(teclaPulsada) {
    console.log(teclaPulsada);

    let tipoFlecha = teclaPulsada.key;
    let elementoCara = document.getElementById("cara");
    let top = parseInt(window.getComputedStyle(elementoCara).top);
    let left = parseInt(window.getComputedStyle(elementoCara).left);
    switch(tipoFlecha) {
        case "ArrowUp":
            elementoCara.style.top = (top - 5) + "px";
            break;
        case "ArrowDown":
            elementoCara.style.top = (top + 5) + "px";
            break;
        case "ArrowLeft":
            elementoCara.style.left = (left - 5) + "px";
            break;
        case "ArrowRight":
            elementoCara.style.left = (left + 5) + "px";
            break;
    }
}

window.onload = function() {
    window.addEventListener("keydown", moverCara);
}