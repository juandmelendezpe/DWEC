function Ordenador(marca, modelo, ram=4, discoDuro=512, pulgadas=27) {
    this.marca = marca;
    this.modelo = modelo;
    this.ram = ram;
    this.discoDuro = discoDuro;
    this.pulgadas = pulgadas;

    this.toString = function() {
        return "Marca: " + this.marca + "\n" +
        ", Modelo: " + this.modelo + "\n" +
        ", RAM: " + this.ram + "\n" +
        ", Disco Duro: " + this.discoDuro + "\n" +
        ", Pulgadas: " + this.pulgadas;
    }
}
function Portatil(marca, modelo, ram=4, discoDuro=512, pulgadas=15, bateria=4) {
    this.ordenador = new Ordenador ( marca, modelo, ram, discoDuro, pulgadas);
    this.bateria = bateria;

    this.toString = function() {
        return this.ordenador.toString() + "\n" + 
        ", Bateria: " + this.bateria;
    }
}
var ordenador1 = new Ordenador("HP", "Pavilion", 8, 1024, 27);
var ordenador2 = new Ordenador("Apple", "iMac", 16, 2048, 27);
var portatil1 = new Portatil("Apple", "MacBook Pro", 8, 512, 15, 8);
var portatil2 = new Portatil("HP", "Envy", 16, 1024, 15, 6);

console.log(ordenador1.toString());
console.log(ordenador2.toString());
console.log(portatil1.toString());
console.log(portatil2.toString());

window.onload = function() {
    document.getElementById("verDatos").addEventListener("click", Portatil); 
}