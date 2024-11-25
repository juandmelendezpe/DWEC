function btnSpecial(i) {
  document.getElementById(i.target.id).classList.toggle("btnSpecial");
}

function cambiarClasePreguntasId() {
  var preguntasId = document.getElementsByClassName("btn");
  for (var i = 0; i < preguntasId.length; i++) {
    preguntasId[i].addEventListener("click", function (i) {
      btnSpecial(i);
    });
  }
}

function mostrarPopupRespCo() {
  document.querySelector(".popup-containerRC").style.display = "flex";
}
function mostrarPopupRespInc() {
  document.querySelector(".popup-containerRI").style.display = "flex";
}

 //Relaciones entre preguntas y respuestas 
 const preguntasid = [1, 2, 3, 4]; 
 //const respuestasid = [5, 6, 7, 8]; 
 const relaciones = { 1: 7, 2: 8, 3: 6, 4: 5 }; 
 let idPreguntaSeleccionada = null; 
 // Variable para guardar el id del primer botón presionado 
 function validarRespuestaCorrecta(event) { // funcion con parametro event
    const idRespuesta = event.target.id; 
    if (idPreguntaSeleccionada) { 
        // Si ya se ha seleccionado una pregunta, verificamos la respuesta 
        if (relaciones[idPreguntaSeleccionada] == idRespuesta){ 
            mostrarPopupRespCo(); 
            } else { 
                mostrarPopupRespInc(); 
            } 
            idPreguntaSeleccionada = null; // Reseteamos la variable 
            }else { 
            // Si no se ha seleccionado una pregunta, guardamos el id 
            if (preguntasid.includes(parseInt(idRespuesta))) { 
                idPreguntaSeleccionada = idRespuesta; 
                alert("Pregunta seleccionada: " + idPreguntaSeleccionada); 
            } else { mostrarPopupRespInc(); 

            } 
        }
     }
     // funcion validar simple 
     function validarResp(id){
      var idPreguntaSelec = null;
      var idRespuesta = id.target.id;
      const ArraysPreguntas = [1, 2, 3, 4];
      //const ArraysRespuestas = [5, 6, 7, 8];
      const ArraysRelaciones = { 1: 7, 2: 8, 3: 6, 4: 5 }; // Relaciones entre preguntas y respuestas
      if (idPreguntaSelec){
        if (ArraysRelaciones[idPreguntaSelec] == idRespuesta){  //
          mostrarPopupRespCo();
        }else{
          mostrarPopupRespInc();
        }
        idPreguntaSelec = null;
      }else{
        if (ArraysPreguntas.includes(parseInt(idRespuesta))){//parseInt convierte el string a entero 
          idPreguntaSelec = idRespuesta;
          alert("Pregunta seleccionada: " + idPreguntaSelec);
        }else{
          mostrarPopupRespInc();
        }
      }


     }
window.onload = function () {
  document.addEventListener("click", validarRespuestaCorrecta);
  cambiarClasePreguntasId();
    //validarRespuestaCorrecta();
};
