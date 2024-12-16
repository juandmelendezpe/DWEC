function ponerEnEstricto() {
    "use strict";
    var x = 3.14;
    var y = 3;
    var z = x * y;
    console.log(z);
}
function ponerNoEstricto() {
     x = 3.14;
     y = 3;
     z = x * y;
    console.log(z);
}
window.onload = function() {
    document.getElementById("ponerEnEstricto").addEventListener("click",ponerEnEstricto);
    document.getElementById("ponerNoEstricto").addEventListener("click",ponerNoEstricto);

}