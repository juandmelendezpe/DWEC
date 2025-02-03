let eventos = [];
let arr = []; // creamos un array vacio para guardar los eventos
let nombreEvento = document.querySelector("#nombreEvento");
let fechaEvento = document.querySelector("#fechaEvento");
let buttonAdd = document.querySelector("#buttonAdd");

const ContainerEventos = document.querySelector("#ContainerEventos");


/// almacenar los eventos en el local storage
const json = cargar();
try{
    arr = JSON.parse(json);
}catch(error){
    arr = [];
}
eventos = arr ? [...arr] : [];

renderEventos();  

// 

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    AddEventos();
});

function AddEventos() {
    if (nombreEvento.value === '' || fechaEvento.value === '') {
        alert('Debes llenar todos los campos');
        return;
    }
    if (diferrenciasFechas(fechaEvento.value) < 0) {
        alert('La fecha no puede ser menor a la actual');
        return;
    }
    const nuevoEvento ={
        id:(Math.random()*100).toString(36).slice(3),
        nombre: nombreEvento.value,
        fecha: fechaEvento.value
    };
    eventos.unshift(nuevoEvento);
    guardar(JSON.stringify(eventos));
    nombreEvento.value = " ";
    renderEventos();
}

function diferrenciasFechas(d){
    const fechaEvento = new Date(d);
    const fechaActual = new Date();
    const diferecia = fechaEvento.getTime() - fechaActual.getTime();
    const dias = Math.ceil(diferecia / (1000 * 3600 * 24));
    return dias ;
}

function renderEventos() {
   ContainerEventos.textContent = '';
   
    eventos.forEach(evento => {
        const div_evento = document.createElement('div');
        div_evento.classList.add('evento');

        const div_dias = document.createElement('div');
        div_dias.classList.add('dias');

        const span_dias_numero = document.createElement('span');
        span_dias_numero.classList.add('dias-numero');
        span_dias_numero.textContent = diferrenciasFechas(evento.fecha);

        const span_dias_texto = document.createElement('span');
        span_dias_texto.classList.add('dias-texto');
        span_dias_texto.textContent = 'Días';

        const div_eventos_name = document.createElement('div');
        div_eventos_name.classList.add('eventos-name');
        div_eventos_name.textContent = evento.nombre;

        const div_eventos_fecha = document.createElement('div');
        div_eventos_fecha.classList.add('eventos-fecha');
        div_eventos_fecha.textContent = evento.fecha;

        const div_acciones = document.createElement('div');
        div_acciones.classList.add('acciones');
        div_acciones.setAttribute('data-id', evento.id);

        const button_delete = document.createElement('button');
        button_delete.classList.add('button-delete');
        button_delete.textContent = 'Eliminar';
        button_delete.addEventListener('click', () => {
            eventos = eventos.filter(e => e.id !== evento.id);
            guardar(JSON.stringify(eventos));
            renderEventos();
        });

        div_acciones.appendChild(button_delete);
        div_dias.appendChild(span_dias_numero);
        div_dias.appendChild(span_dias_texto);
        div_evento.appendChild(div_dias);
        div_evento.appendChild(div_eventos_name);
        div_evento.appendChild(div_eventos_fecha);
        div_evento.appendChild(div_acciones);
        ContainerEventos.appendChild(div_evento);
    });
    //
    
   /*
    const eventosHTML = eventos.map(evento => {
        return `
            <div class="evento">
               <div class="dias">
               <span class="dias-numero">${diferrenciasFechas(evento.fecha)}</span>
               <span class="dias-texto">Dias</span>
               </div>
                <div class="eventos-name">${evento.nombre}</div>
                <div class="eventos-fecha">${evento.fecha}</div>
                <div class="acciones" data-id="${evento.id}">
                    <button class="button-delete">Eliminar</button>
                    </div>
            </div>
        `;
    });
    ContainerEventos.innerHTML = eventosHTML.join('');
    document.querySelectorAll('.button-delete').forEach(button => {
        button.addEventListener('click', () => {
            eventos = eventos.filter(evento => evento.id !== button.parentElement.getAttribute('data-id'));
            renderEventos();
        });
    });
    */
}

function guardar(data){
    localStorage.setItem('items',data);
}
function cargar(){
    return localStorage.getItem('items');
}