class Persona {
    // metodo constructor
    constructor(nombre, apellidos, anio){
        this.nombre = nombre
        this.apellidos = apellidos
        this.anio = anio
    }

    get anio(){
        return this.anio
    }


}

// creacion de un objeto por instancias

const p1 = new Persona('Alba','Garcia',2002)

console.log(p1)
console.log(p1.anio)