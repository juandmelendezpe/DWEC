function rellenarCubo(lado) {
    // Crear un conjunto para almacenar los valores únicos
    const valoresUnicos = new Set();

    // Función para generar un valor aleatorio único
    function generarValorUnico() {
        let valor;
        do {
            valor = Math.floor(Math.random() * 9) + 1;
        } while (valoresUnicos.has(valor));
        valoresUnicos.add(valor);
        return valor;
    }
}
window.onload = function() {
    document.getElementById("botonRellenar").addEventListener("click", function() {
        const lado = document.getElementById("lado").value;
        rellenarCubo(lado);
    });
}
