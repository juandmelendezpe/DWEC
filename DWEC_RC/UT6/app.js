window.onload = function() {
    // 1. Generar el tablero 30x30 mediante el DOM
    var zonaDibujo = document.getElementById("zonadibujo");
    var tabla = document.createElement("table");
    
    // Aplicamos estilos a la tabla para que se comporte como un grid continuo
    tabla.style.borderCollapse = "collapse";
    tabla.style.margin = "0 auto";
    tabla.style.border = "1px solid black";
    
    // Variables de estado de la aplicación
    var pincelActivo = false;
    var colorActivo = "color1"; // Color por defecto (el seleccionado inicial)
    var estadoPincelTexto = document.getElementById("estado-pincel");

    // Construir filas y columnas
    for (var i = 0; i < 30; i++) {
        var fila = document.createElement("tr");
        for (var j = 0; j < 30; j++) {
            var celda = document.createElement("td");
            
            // Asignar dimensiones y clase
            celda.className = "celda-tablero";
            celda.style.width = "10px";
            celda.style.height = "10px";
            
            // Eventos del ratón para pintar en el tablero
            celda.addEventListener("mousedown", function(e) {
                e.preventDefault(); // Prevenir el arrastre nativo del navegador
                
                // Alternar el estado del pincel
                pincelActivo = !pincelActivo;
                
                if (pincelActivo) {
                    estadoPincelTexto.innerHTML = "PINCEL ACTIVADO";
                    aplicarColor(this); // Pintar la celda donde hacemos el click inicial
                } else {
                    estadoPincelTexto.innerHTML = "PINCEL DESACTIVADO";
                }
            });

            // Pintar si el pincel está activo y pasamos por encima
            celda.addEventListener("mouseenter", function() {
                if (pincelActivo) {
                    aplicarColor(this);
                }
            });
            
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    // Meter la tabla en el div correspondiente
    zonaDibujo.appendChild(tabla);

    // 2. Gestionar la paleta de colores
    var coloresPaleta = document.querySelectorAll("#paleta td");
    
    coloresPaleta.forEach(function(td) {
        td.addEventListener("click", function() {
            // Eliminar la clase 'seleccionado' de todos los colores
            coloresPaleta.forEach(function(c) {
                c.classList.remove("seleccionado");
            });
            
            // Añadir la clase 'seleccionado' al color clicado
            this.classList.add("seleccionado");
            
            // Determinar la clase de color (ej. color1, color2, etc.) que tiene el td
            for (var k = 0; k < this.classList.length; k++) {
                if (this.classList[k].startsWith("color")) {
                    colorActivo = this.classList[k];
                    break;
                }
            }
        });
    });

    /**
     * Función que aplica el color activo a una celda del DOM.
     * Al basarse en añadir la clase, cumple el requisito de seguir
     * funcionando si los colores cambian en el CSS.
     */
    function aplicarColor(celdaDOM) {
        // Remover colores anteriores de la celda. 
        // Quitamos todas las clases que empiecen por "color"
        for (var i = celdaDOM.classList.length - 1; i >= 0; i--) {
            if (celdaDOM.classList[i].startsWith("color")) {
                celdaDOM.classList.remove(celdaDOM.classList[i]);
            }
        }
        
        // Añadir la clase del color activo seleccionado en la paleta
        celdaDOM.classList.add(colorActivo);
    }
    
    // Evento de apoyo para que no interfiera el sistema de drag & drop del navegador al pintar
    document.addEventListener("dragstart", function(e) {
        e.preventDefault();
    });
};