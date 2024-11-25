function appendToDisplay(value) {
    document.getElementById('display').value += value; // Se añade el valor al final del contenido del display
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display'); // Se obtiene el elemento con id 'display'
    try {
        display.value = eval(display.value); // Se evalua el contenido del display y se muestra el resultado
    } catch {
        display.value = 'Error';
    }
}
