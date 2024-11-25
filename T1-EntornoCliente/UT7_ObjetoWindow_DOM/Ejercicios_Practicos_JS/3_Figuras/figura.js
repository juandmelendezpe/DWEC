document.getElementById('figura').addEventListener('change', function () { // Evento change para el select
    
    const figura = document.getElementById('figura').value;
    if (figura === 'rectangulo') {
        document.getElementById('dimensionesRectangulo').style.display = 'block';
        document.getElementById('inputsDimensiones').style.display = 'none';
    } else {
        document.getElementById('dimensionesRectangulo').style.display = 'none';
        document.getElementById('inputsDimensiones').style.display = 'block';
    }
});

function generarFigura() {
    const figura = document.getElementById('figura').value;
    const relleno = document.getElementById('relleno').value;
    const lado = parseInt(document.getElementById('lado').value);
    const ancho = parseInt(document.getElementById('ancho').value);
    const alto = parseInt(document.getElementById('alto').value);
    let salida = '';

    switch (figura) {
        case 'cuadrado':
            salida = generarCuadrado(lado, relleno);
            break;
        case 'rectangulo':
            salida = generarRectangulo(ancho, alto, relleno);
            break;
        case 'triangulo':
            salida = generarTriangulo(lado, relleno);
            break;
    }

    document.getElementById('salida').textContent = salida;
}

function generarCuadrado(lado, relleno) {
    let resultado = '';
    for (let i = 0; i < lado; i++) {
        for (let j = 0; j < lado; j++) {
            if (relleno === 'asteriscos') {
                resultado += '*';
            } else {
                if (i === 0 || i === lado - 1 || j === 0 || j === lado - 1) {
                    resultado += '*';
                } else {
                    resultado += ' ';
                }
            }
        }
        resultado += '\n';
    }
    return resultado;
}

function generarRectangulo(ancho, alto, relleno) {
    let resultado = '';
    for (let i = 0; i < alto; i++) {
        for (let j = 0; j < ancho; j++) {
            if (relleno === 'asteriscos') {
                resultado += '*';
            } else {
                if (i === 0 || i === alto - 1 || j === 0 || j === ancho - 1) {
                    resultado += '*';
                } else {
                    resultado += ' ';
                }
            }
        }
        resultado += '\n';
    }
    return resultado;
}

function generarTriangulo(lado, relleno) {
    let resultado = '';
    for (let i = 0; i < lado; i++) {
        for (let j = 0; j <= i; j++) {
            if (relleno === 'asteriscos') {
                resultado += '*';
            } else {
                if (i === lado - 1 || j === 0 || j === i) {
                    resultado += '*';
                } else {
                    resultado += ' ';
                }
            }
        }
        resultado += '\n';
    }
    return resultado;
}
