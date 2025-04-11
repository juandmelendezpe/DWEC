function Punto(codeX, codeY) {
  this.x = codeX;
  this.y = codeY;
  this.mostrarCordenadas =() => `(${this.x}, ${this.y})`;
}
let punto1 = new Punto(10, 20);
let punto2 = new Punto(30, 40);

console.log(punto1.mostrarCordenadas()); // (10, 20)
console.log(punto2.mostrarCordenadas()); // (30, 40)