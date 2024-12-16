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
        console.log(`ID: ${this.id}\nNombre: ${this.nombre}\nApellidos: 
            ${this.apellidos}\nFecha de Nacimiento: ${this.fechaNacimiento}\nLocalidad:
            ${this.Localidad}\nCodigo Postal: ${this.CodigoPostal}\nProvincia:
             ${this.provincia}\nCCAA: ${this.CCAA}\nDNI: ${this.dni}`);
    }
    
    
}