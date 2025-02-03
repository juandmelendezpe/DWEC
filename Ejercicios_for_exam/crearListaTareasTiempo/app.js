const tareas = [];
let tiempo = 0;
let temporizador = null;
let timerBreak = null;
let tareaActual = null;

const btnAgregar = document.querySelector("#btnAgregar");
const toTarea = document.querySelector("#newTarea");
const form = document.querySelector("form");
const nombreTarea = document.querySelector('#tiempo #nombreTarea');

renderTiempo();
renderTareas();



    form.addEventListener("submit", (e) => { //
    e.preventDefault();

    if (toTarea.value.trim() === "") { // Verifica si el input está vacío
            alert("Debe ingresar una tarea");
            return;
        }

        agregarTarea(toTarea.value);
        toTarea.value = ""; // Limpiar el campo de entrada después de agregar la tarea
        renderTareas();
});

function agregarTarea(value) {
    const newTarea = {
        id:(Math.random() * 100).toString(36).slice(3),
        titulo: value,
        completed: false,
        icons: '',
};

tareas.unshift(newTarea);
renderTareas();
}

function renderTareas(){
    const container = document.querySelector("#tareas");
    container.textContent= ''; // Limpiar el contenedor antes de renderizar

    tareas.forEach(tarea => {
        const divTarea = document.createElement('div');
        divTarea.classList.add('tarea');

        const divCompleted = document.createElement('div');
        divCompleted.classList.add('completed');

        if (tarea.completed) {
            const spanRealizado = document.createElement('span');
            spanRealizado.classList.add('realizado');
            spanRealizado.textContent = 'Realizado';
            divCompleted.appendChild(spanRealizado);
            
        } else {
            const buttonEmpesar = document.createElement('button');
            buttonEmpesar.classList.add('btn-empesar');
            buttonEmpesar.setAttribute('data-id', tarea.id);
            buttonEmpesar.textContent = 'Empesar';
            divCompleted.appendChild(buttonEmpesar);
        }

        const divTitulo = document.createElement('div');
        divTitulo.classList.add('titulo');
        divTitulo.textContent = tarea.titulo;
        const iconDiv = document.createElement('div');
        iconDiv.classList.add('iconos');
        iconDiv.innerHTML = `<div class="item my-3 d-flex">
          <div class="item-icons">
            <a href="#" class="complete-item mx-2 item-icon">
              <i class="far fa-check-circle" title="Mark Complete"></i>
            </a>
            <a href="#" class="edit-item mx-2 item-icon">
              <i class="far fa-edit" title="Edit"></i>
            </a>
            <a href="#" class="delete-item item-icon">
              <i class="far fa-times-circle" title="Delete"></i>
            </a>
          </div>
        </div>`;

        divTarea.appendChild(divCompleted);
        divTarea.appendChild(divTitulo);
        divTarea.appendChild(iconDiv);
        container.appendChild(divTarea);

        // Agregar el evento click al botón de empesar

        const buttonsEmpesar = document.querySelectorAll('.btn-empesar');
        buttonsEmpesar.forEach(button => {
        button.addEventListener('click', (e) => {
            if(!temporizador){
                const id = button.getAttribute('data-id');
                empesarTarea(id);
                button.textContent = 'en progreso';
            }
        });
    });

    });

    /*
    const html = tareas.map(tarea => {

        return `
        <div class="tarea">
            <div class="completed">
            ${tarea.completed ? `<span class="realizado">Realizado</span>` : ` <button class="btn-empesar" data-id="${tarea.id}">Empesar</button>`}</div>
            <div class="titulo">${tarea.titulo}</div>
        </div>
        `;
    });
    const container = document.querySelector("#tareas");
    container.innerHTML = html.join(''); 

    ---------------------------------------------------------

    const buttonsEmpesar = document.querySelectorAll('.btn-empesar');
    buttonsEmpesar.forEach(button => {
        button.addEventListener('click', (e) => {
            if(!temporizador){
                empesarTarea(e.target.getAttribute('data-id'));
            } else {
                alert('Ya hay una tarea en curso');
            }
            empesarTarea(e.target.getAttribute('data-id'));
        });
    });

    */

}
function empesarTarea(id){
    tiempo = 5;
    tareaId = id;

    const tareaIndex = tareas.findIndex((tarea) => tarea.id === id);
    nombreTarea.textContent = tareas[tareaIndex].titulo;

    renderTiempo();

    temporizador = setInterval(() => {
        manejadorTemporizador(id);
    }, 1000);
}
function manejadorTemporizador(id){
    tiempo--;
    renderTiempo();

    if(tiempo <= 0){
        clearInterval(temporizador);
        marcaCompleta(id);
        temporizador = null;
        renderTareas();
       descanzar();
    }
}
function descanzar(){
    tiempo = 3;
    nombreTarea.textContent = 'Descanso';
    renderTiempo();
    timerBreak = setInterval(() => {
        manejadorDescanso();
    }, 1000);
}
function manejadorDescanso(){
    tiempo--;
    renderTiempo();

    if(tiempo <= 0){
        clearInterval(timerBreak);
        tareaId = null;
        descanzar = null;
        nombreTarea.textContent = '';
       renderTareas();
    }
}

function renderTiempo(){
    const  tiempoDiv = document.querySelector('#tiempo #valor');
    const minutos = parseInt(tiempo / 60);
    const  segundos = parseInt(tiempo % 60);

    tiempoDiv.textContent = `${minutos< 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
}
function marcaCompleta(id){
    const tareaIndex = tareas.findIndex((tarea) => tarea.id === id);
    tareas[tareaIndex].completed = true;
    
}