
function mapaForeach() {
  const provincias = new Map();
  provincias.set(1, "Álava").set(28, "Madrid").set(34, "Palencia").set(41, "Sevilla");
  provincias.forEach(function (clave, valor) {
    console.log(`Clave: ${clave}, Valor: ${valor}`);
  });
}
window.onload = function() {
    document.getElementById("EjecutarMapaforeach").addEventListener("click", mapaForeach);
};
