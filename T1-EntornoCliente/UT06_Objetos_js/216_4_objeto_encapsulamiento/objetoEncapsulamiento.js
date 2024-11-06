function objetoEncapsulamiento() {
    class Persona{
        name;
        constructor(name){
            this.name = name;
        }
        introduceSelt(){
            console.log(`Hola, soy ${this.name}`);
        }
    }

    class Student extends Persona{
        #year; // Encapsulamiento de la propiedad year con # para que no se pueda acceder desde fuera de la clase Student
        constructor(name, year){
            super(name);
            this.#year = year;
        }
        introduceSelt(){

            console.log(`Hola, soy ${this.name} y soy estudiante de ${this.#year}`);

        }
        cartStudentArchery(){
            console.log(this.#year > 1 );
        }
    }
    const student1 = new Student("Juan", 3);
    student1.introduceSelt();
    student1.cartStudentArchery();
    }
window.onload = function() {
    document.getElementById("objetoEncapsulamiento").addEventListener("click", objetoEncapsulamiento);
}