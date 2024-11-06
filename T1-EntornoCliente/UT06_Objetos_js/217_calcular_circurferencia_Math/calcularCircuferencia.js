class Circulo{
    constructor(radio){
        this.radio = radio;
        this.calcularCircunferencia = () => { 2 * Math.PI * this.radio };
    }
    
}
function CirculoDos(radio){
    this.radio = radio;
    this.calcularCircuferencia = () => { 2 * Math.PI * this.radio };
}
function calcularCircunferencia(){
    let valor  = window.prompt("Introduce el radio del circulo");
    let resultado= new Circulo(valor);
    console.log(resultado.calcularCircunferencia());
}


window.onload = function() {
    document.getElementById("calcularCircuferencia").addEventListener("click", calcularCircunferencia);
}