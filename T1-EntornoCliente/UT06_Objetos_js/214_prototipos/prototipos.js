 // Definición de la clase Puntoclass Punto 
 {    constructor(cordX, coordY) {       
     // Asigna las coordenadas iniciales a las propiedades x e y  
           this.x = cordX;        this.y = coordY;        
           // Define un metodo para mostrar las coordenadas del punto 
                  this.mostrarCoordenadas = () => `(${this.x}, ${this.y})`;    }}
                  // Función para mostrar el prototipo del objetofunction prototipo() {    
                    // Crea una nueva instancia de Punto con coordenadas (10, 20)    let a = new Punto(10, 20);    
                    // Muestra el prototipo del objeto a    
                    console.log(a.__proto__);    
                    // Imprime una línea de separación 
                       console.log("****************");    
                       // Muestra el prototipo del objeto a usando Object.getPrototypeOf    
                       console.log(Object.getPrototypeOf(a));}
                       // Función para añadir propiedades al prototipofunction agnadirPrototipo() {    
                        // Aquí debería ser new Punto(10, 20) en lugar de new prototipo(10, 20)    
                        let a = new Punto(10, 20);    
                        // Añade un método sumarXY al prototipo de Punto    
                        Punto.prototype.sumarXY = function () {        return this.x + this.y;    };    
                        // Añade una propiedad z al prototipo de Punto   
                         Punto.prototype.z = 0;    
                        // Muestra el prototipo de Punto    
                        console.log(Punto.prototype);    
                        // Muestra el prototipo del objeto a    
                        console.log(a.__proto__);
                    }
                        // Función para mostrar dos objetos y sus prototiposfunction 
                        mostrarDosObjetos() {    
                        // Crea dos instancias de Punto con diferentes coordenadas    
                        let a = new Punto(10, 20);    let b = new Punto(-3, 6);    
                        // Añade métodos y propiedades al prototipo de Punto    
                        Punto.prototype.sumarXY = function () {        return this.x + this.y;    };    
                        Punto.prototype.z = 0;    Punto.prototype.g = 46;    
                        // Muestra en consola los resultados de llamar a sumarXY y los valores de z y g para los objetos a y b    
                        console.log(a.sumarXY());    console.log(b.sumarXY());    console.log(a.z);    console.log(b.z);    console.log(a.g);}// Función para modificar las propiedades del prototipofunction modificarPropiedadesDePrototipo() {    
                        // Crea dos instancias de Punto    
                        let a = new Punto(10, 20);    
                        let b = new Punto(-3, 6);    
                        // Añade un metodo y una propiedad al prototipo de Punto    
                        Punto.prototype.sumarXY = function () {        return this.x + this.y;    };    
                        Punto.prototype.z = 0;    
                        // Modifica la propiedad z del objeto a y del prototipo de b    a.z = 7; 
                        // Z es una propiedad solo de a    b.__proto__.z = 13;    
                        // Muestra en consola los resultados de llamar a sumarXY y los valores de z para los objetos a y b, y del prototipo de b   
                         console.log(a.sumarXY());    
                         console.log(b.sumarXY());    
                         console.log("Valor de la propiedad    a.z ---> " + a.z);   
                         console.log("Valor de prototipo     a.__proto__.z ----> " + a.__proto__.z);    
                         // Como no existe una propiedad llamada z en b, es el prototipo    
                         console.log("Valor de la propiedad    b.z ---> " + b.z);   
                          console.log("Valor de prototipo       b.__proto__.z ----> " + b.__proto__.z);}
                          // Configuración de eventos al cargar la páginawindow.onload = function () {    
                          // Añade manejadores de eventos a los botones para que llamen a las funciones correspondientes cuando se hagan clic    
                          document.getElementById("prototipo").addEventListener("click", prototipo);   
                           document.getElementById("agnadirPrototipo").addEventListener("click", agnadirPrototipo);    
                           document.getElementById("mostrarDosObjetos").addEventListener("click", mostrarDosObjetos);    
                           document.getElementById("modificarPropiedadesDePrototipo").addEventListener("click", modificarPropiedadesDePrototipo);};