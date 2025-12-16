function resultadoTablaMultiplicar7() {
    let numero = document.getElementById("numero").value;
    let resultado = "";
    if (numero == 7) {
        for (let i = 0; i <= 10; i++) {
            resultado += `<p>${numero} x ${i} = ${numero * i}</p>`;
        }
        document.getElementById("resultado").innerHTML = resultado;
    } else {
        alert("Por favor ingrese el número 7");
    }
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("procesar").addEventListener("click", resultadoTablaMultiplicar7);
});
