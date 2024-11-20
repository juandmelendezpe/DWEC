function cargarSelectores() {

  //selecionamos los elementos li dentro de ul
  console.log("\n--Seleccionamos los elementos li dentro de ul----");
  let listadoLi = document.querySelectorAll("ul li");

  listadoLi.forEach((element) => {
    console.log(element.textContent);
  })

  //seleccionamos el primer elemento li dentro de la lista
  console.log("\n---Seleccionamos el primer elemento li dentro de la lista---");
  let primerLi = document.querySelectorAll("li:first-of-type");
  primerLi.forEach((element) => {
    console.log(element.textContent);
  })
  // selecciona de cada lista, si es verdura 
    console.log("\n---Selecciona de cada lista, si es verdura---");
    let primerVerduras = document.querySelectorAll("li.verdura:first-of-type");
    primerVerduras.forEach((element) => {
      console.log(element.textContent);
    })
    //seleccionamos el atributo data-src
    console.log("\n---Seleccionamos el atributo data-src---");
    let dataSrc = document.querySelectorAll("li[data-src]");
    dataSrc.forEach((element) => {
      console.log(element.textContent);
    })
    //seleccionamos el atributo data-src valor-dos
    console.log("\n---Seleccionamos el atributo data-src : valor 2");
    let dataSrcValordos = document.querySelectorAll('li[data-src="Valor-dos"]');
    dataSrcValordos.forEach((element) => {
      console.log(element.textContent);
    })
}
  window.onload = function () {
    document.getElementById("cargarSelectores").addEventListener("click", cargarSelectores);
  };
