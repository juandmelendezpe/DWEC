function resultadoDividir() {
    let tablaDividir = "";
    let numero = parseInt(document.getElementById('numero').value);
    if (numero == 9) {
        let i = 1;
        do {
            tablaDividir+= `<p>${numero * i } / ${numero} = ${(numero * i / numero)}</p>`;
            i++;
        } while (i <= 10);
        document.getElementById('resultado').innerHTML = tablaDividir;
    }   else {
        alert('Por favor ingrese el número 9');
    }   
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('procesar').addEventListener('click', resultadoDividir);
});