const mostrarTabla = () => {
    const numero = Number(document.getElementById('numero').value);
    if(numero >= 0 && numero <= 10){
        let tabla = document.getElementById('tabla');
        let tablaMultiplicar = `<h2>Tabla de multiplicar del numero ${numero}</h2>`;
        tablaMultiplicar += '<ul>';
        for(let i = 0; i <= 10; i++){
            tablaMultiplicar += `<li>${numero} x ${i} = ${numero * i}</li>`;
        }
        tablaMultiplicar += '</ul>';
        tabla.innerHTML = tablaMultiplicar;
    } else {
        alert("Por favor ingrese un numero entre 0 y 10");
        document.getElementById('numero').value = '';
    }
    }
