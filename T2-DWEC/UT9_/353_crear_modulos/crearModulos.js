const Pi_cuadardo = Math.PI * Math.PI;

function areaCirculo(radio) {
    return Math.PI * radio * radio;
}
function areaCuadrado(lado) {
    return lado * lado;
}
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
function areaRectangulo(base, altura) {
    return base * altura;
}
export {
    Pi_cuadardo,
    areaCirculo,
    areaCuadrado,
}