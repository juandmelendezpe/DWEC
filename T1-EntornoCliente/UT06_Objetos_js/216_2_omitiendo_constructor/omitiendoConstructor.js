function omitiendoConstructor() {
    class Animal{
        sleep(){
            console.log("zzz");
        }
    }
    const spot = new Animal();
    spot.sleep();
    console.log(spot instanceof Animal);
    console.log(spot.constructor === Animal);
    console.log(spot.constructor.name);
}


window.onload = function() {
    document.getElementById("omitiendoConstructor").addEventListener("click",omitiendoConstructor);
}