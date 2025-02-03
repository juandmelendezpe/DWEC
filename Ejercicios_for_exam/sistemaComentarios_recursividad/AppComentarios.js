const commenst = [];
const inputContainer = document.createElement('div');
const input = document.createElement('input');
input.classList.add('input');
const comentarioContainer = document.querySelector('#comentarios-container');

input.addEventListener("keydown", (event) => {
    hanlerEnter(event, null);
});
comentarioContainer.appendChild(inputContainer);
inputContainer.appendChild(input);

function hanlerEnter(event, comentarioActual) {
    if(event.key === 'Enter' && event.target.value !== ''){
        const newComentario = {
            texto : event.target.value,
            likes : 0,
            respuestas : []
        }
        if(comentarioActual === null){
            commenst.unshift(newComentario);
        }else{
            comentarioActual.respuestas.unshift(newComentario);
        }
        event.target.value = '';
        comentarioContainer.innerHTML = '';
        comentarioContainer.appendChild(inputContainer);
        renderComentario(commenst,comentarioContainer);
    }
}
function renderComentario(arr, principal){
    arr.forEach(element => {
        const comentarioContainer = document.createElement('div');
        comentarioContainer.classList.add('comentario-container');

        const respuestaContanier = document.createElement('div');
        respuestaContanier.classList.add('respuesta-container');

        const replayButton = document.createElement('button');
        const likeButton = document.createElement('button');

        const textContainer = document.createElement('div');
        textContainer.textContent = element.texto;

        const accionesContainer = document.createElement('div');
        accionesContainer.classList.add('acciones-container');

        replayButton.textContent = 'Responder';
        likeButton.textContent = `${element.likes > 0 ? `${element.likes} likes` : "Like"}`;

        // config listeners

        replayButton.addEventListener('click',e =>{
            const newInput = inputContainer.cloneNode(true);
            newInput.value = '';
            newInput.focus();
            newInput.addEventListener('keydown', event => {
                hanlerEnter(event, element);
            });
            comentarioContainer.insertBefore(newInput, respuestaContanier);
        })
        likeButton.addEventListener('click',e =>{
            element.likes++;
            likeButton.textContent = `${element.likes > 0 ? `${element.likes} likes` : "Like"}`;

        })


        // append

        comentarioContainer.appendChild(textContainer);
        comentarioContainer.appendChild(accionesContainer);
        accionesContainer.appendChild(replayButton);
        accionesContainer.appendChild(likeButton);

        comentarioContainer.appendChild(respuestaContanier);
         // implenetar recursividad
        if(element.respuestas.length > 0){
            renderComentario(element.respuestas, respuestaContanier);
        }
        principal.appendChild(comentarioContainer);
        
    });

}