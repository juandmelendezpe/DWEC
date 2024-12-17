const Pi_cuadardo = Math.PI * Math.PI;

function areaCirculo(radio) {
    return radio * Pi_cuadardo;
}
function areaCuadrado(lado) {
    return lado ** 2;
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