function ValorAtributo() {
    var lis = document.querySelectorAll("li");
    for (const li of lis) {
        console.log(li.getAttribute("class"));
    }
    console.log("--------------------");
    lis.forEach(element => {
        console.log(element.getAttribute("class"));
    })
        
}
window.onload = function() {
    document.getElementById("ValorAtributo").addEventListener("click",ValorAtributo)
}