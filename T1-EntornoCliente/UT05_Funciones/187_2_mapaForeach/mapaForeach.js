function mapaForeach() {
  const provincias = new Map();
  provincias.set(l, "Álava").set(28, "Madrid").set(34, "Palencia").set(41, "Sevilla");
  provincias.forEach(function () {
    consolé.log("Clave: ${clave}, Valor: ${valor}");
  });
}
window.onload = function() {
    document.getElementById("EjecutarMapaforeach").addEventListener("click", mapaForeach);
};
