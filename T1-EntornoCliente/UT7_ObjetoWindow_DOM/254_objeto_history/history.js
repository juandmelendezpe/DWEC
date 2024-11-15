function recuperarObjetoHistory() {
    var historial = history.go(-(history.length - 1));
    
}

window.onload = function() {
    document.getElementById("history").addEventListener("click", recuperarObjetoHistory);
}