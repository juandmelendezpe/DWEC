function desplazarIzquierda() {
    let numero1 = parseInt(document.getElementById('numero1').value);
    let numero2 = parseInt(document.getElementById('numero2').value);
    let num3 = parseInt(document.getElementById('num3').value);
    let num4 = parseInt(document.getElementById('num4').value);

    let resultado = '';
    if( numero1 == 40 && numero2 == 4 ){
        let exponente = Math.log2(numero2);
        let desplazamiento = numero1 << exponente;
        let exp = Math.log2(num4);
        let des = num3 << exp;
        resultado = "<p>El exponente de 2 que da " + numero2 + " es: <strong>" + exponente + "</strong></p>";
        resultado += "<p>" + numero1 + " << " + exponente + " = <strong>" + desplazamiento + "</strong></p>";
        resultado += "<p>El exponente de 2 que da " + num4 + " es: <strong>" + exp + "</strong></p>";
        resultado += "<p>" + num3 + " << " + exp + " = <strong>" + des + "</strong></p>";
        document.getElementById('resultado').innerHTML = resultado;
    }
    else{
        alert('Por favor ingrese los números 40 y 4 | 10 y 16'  );
    }
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('procesar').addEventListener('click', desplazarIzquierda);
});
