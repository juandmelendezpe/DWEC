function cargarMapa(componente){
 let promesa = new Promise((resolver,rechazar)=>{
   alert("Cargando mapa...");
   let cargar = true;
   if(cargar){
    componente.setAttribute("src", "./img/mapaSinColorear.png");
    console.log("___Mapa cargado___");
    resolver("RESOLVER: mapa cargado");
   }else{
    console.log("___Error al cargar el mapa___");
    rechazar("RECHAZAR: error al cargar el mapa");
   }
 });
 return promesa;
}
function colorear(componente){
  let promesa = new Promise((resolver,rechazar)=>{
   alert("Coloreando mapa...");
   let color = true;
   if(color){
    componente.setAttribute("src", "./img/mapaColor.png");
   console.log("___Mapa coloreado___");
   resolver("RESOLVER: mapa coloreado");
   }else{
    console.log("___Error al colorear el mapa___");
    rechazar("RECHAZAR: error al colorear el mapa");
   }
  });
  return promesa;
}
function animar(componente){
    let promesa = new Promise((resolver,rechazar)=>{
       alert("Animando mapa...");
       let animar = true;
       if(animar){
       componente.classList.add("animaComponente");
       console.log("___Mapa animado___");
       resolver("RESOLVER: mapa animado");
       }else{
       console.log("___Error al animar el mapa___");
       rechazar("RECHAZAR: error al animar el mapa");
       }
    });
    return promesa;
}
window.onload = function(){
    let boton = document.getElementById("boton");
    boton.addEventListener("click", function(ev){
    ev.preventDefault();
   let componente = document.getElementById("mapa");

   cargarMapa(componente)
       .then((mensaje)=>{
        colorear(componente);
        console.log(mensaje);
    })
       .then((mensaje)=>{
        animar(componente);
        console.log(mensaje);
    })
       .catch(error=>console.log(error));
});
}