function objetoherencia() {
    class Persona {
        name;
        constructor(name) {
            this.name = name;
        }
        introduceSelt(){
            console.log(`Hola, soy ${this.name}`);

        }
    }
    const juan = new Persona("Juan");
    juan.introduceSelt();

// **************************************************************
    class profesor extends Persona {
     teaches;
        constructor(name, teaches) {
            super(name);
            this.teaches = teaches;
        }
        introduceSelt(){
            console.log(`Hola, soy ${this.name} y sere tu profesor de : ${this.teaches}`);
        };
        grade (){
        const nota = Math.floor(Math.random()*(10-1)+1);
        console.log(`Tu nota es ${nota}`);
    }
}
    const profesor1 = new profesor("Juan", "Matematicas");
    profesor1.introduceSelt();
    profesor1.grade();
// **************************************************************
    class estudiante extends Persona {
        constructor(name) {
            super(name);
        }
        introduceSelt(){
            console.log(`Hola, soy ${this.name} y soy estudiante`);
        }
    }
    const estudiante1 = new estudiante("Ana");
    estudiante1.introduceSelt();
}


window.onload = function() {
    document.getElementById("objetoHerencia").addEventListener("click",objetoherencia);
}