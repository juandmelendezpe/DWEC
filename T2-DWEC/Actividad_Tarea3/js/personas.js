class persona{
    constructor(id,nombre, apellidosUno,apellidosDos,fechaNacimiento,Localidad,CodigoPostal,provincia, CCAA,dni){
        this.id = id;
        this.nombre = nombre;
        this.apellidos = `${apellidosUno} ${apellidosDos}`;
        this.fechaNacimiento = fechaNacimiento;
        this.Localidad = Localidad;
        this.CodigoPostal = CodigoPostal;
        this.provincia = provincia;
        this.CCAA = CCAA;
        this.dni = dni;
    }
    mostrar(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellidos: ${this.apellidos}`);
        console.log(`Fecha de nacimiento: ${this.fechaNacimiento}`);
        console.log(`Localidad: ${this.Localidad}`);
        console.log(`Código Postal: ${this.CodigoPostal}`);
        console.log(`Provincia: ${this.provincia}`);
        console.log(`Comunidad Autónoma: ${this.CCAA}`);
        console.log(`DNI: ${this.dni}`);
    }

    get getNombre(){
        return this.nombre;
    }
    get getApellidos(){
        return this.apellidos;
    }
    get getFechaNacimiento(){
        return this.fechaNacimiento;
    }
    get getLocalidad(){
        return this.Localidad;
    }
    get getCodigoPostal(){
        return this.CodigoPostal;
    }
    get getProvincia(){
        return this.provincia;
    }
    get getCCAA(){
        return this.CCAA;
    }
    get getDni(){
        return this.dni;
    }
    set setNombre(nombre){
        this.nombre = nombre;
    }
    set setApellidos(apellidos){
        this.apellidos = apellidos;
    }
    set setFechaNacimiento(fechaNacimiento){
        this.fechaNacimiento = fechaNacimiento;
    }
    set setLocalidad(Localidad){
        this.Localidad = Localidad;
    }
    set setCodigoPostal(CodigoPostal){
        this.CodigoPostal = CodigoPostal;
    }
    set setProvincia(provincia){
        this.provincia = provincia;
    }
    set setCCAA(CCAA){
        this.CCAA = CCAA;
    }
    set setDni(dni){
        this.dni = dni;
    }

    static validarDNI(dni){
        let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        if(dni.length != 9){
            return false;
        }
        let letra = dni.charAt(8).toUpperCase();
        let num = parseInt(dni.substring(0,8));
        if(letra == letras.charAt(num%23)){
            return true;
        }else{
            return false;
        }
    }
    static validarFecha(fecha){
        let fechaActual = new Date();
        let fechaNacimiento = new Date(fecha);
        if(fechaNacimiento > fechaActual){
            return false;
        }else{
            return true;
        }
    }
    convertirEdad(fecha){
        let fechaActual = new Date();
        let fechaNacimiento = new Date(fecha);
        let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
        if(fechaActual.getMonth() < fechaNacimiento.getMonth()){
            edad--;
        }else if(fechaActual.getMonth() == fechaNacimiento.getMonth() && fechaActual.getDate() < fechaNacimiento.getDate()){
            edad--;
        }
        return edad;
        
    }
    
    
}