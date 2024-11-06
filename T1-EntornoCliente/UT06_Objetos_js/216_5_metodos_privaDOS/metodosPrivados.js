function metodosPrivados() {
    class Example {
        metodoPublico() {
         this.#metodoPrivado();
        }
        #metodoPrivado() {
            console.log("Soy un método privado");
        }
    }

    const myExample = new Example();
    myExample.metodoPublico(); // "Soy un método privado"

    //myExample.#metodoPrivado(); // Error de sintaxis

    }

window.onload = function() {
    document.getElementById("metodosPrivados").addEventListener("click", metodosPrivados);
}