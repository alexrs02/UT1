var coche = {}


// Objeto literal

var usuario = {
    nombre: 'Felipe',
    edad: 43,
    saludo: function () {
        console.log(`Hola soy ${this.nombre}`)
    },
};

console.log(usuario.saludo)

// Objeto desconstruido

function persona(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
    this.saludo = function () {
        console.log(`Hola soy ${this.nombre}`)
    }
}

var profesor = new persona('Maria', 25)

var persona1 = new Object({
    nombre: 'Polo',
    edad: 25,
    saludar: function () {
        console.log(`Hola soy ${this.nombre}`)
    }
})

const myCar = new Object()
myCar.make = "Ford"
myCar.model = "Puma"
myCar.year = 2020


class Persona2 {
    constructor(nombre, apellidos, year) {
        this._nombre = nombre
        this._apellidos = apellidos
        this._year = year
    }

    get year(){
        return this._year
    }

    set year(newyear){
        this._year = newyear
    }

}

// Objeto Date

var fecha = new Date() // Toma la fecha del sistema

var YEAR = fecha.getFullYear()
var MES = fecha.getMonth()
var DAY = fecha.getDay()


// Objeto MATH

var pi = Math.pi
console.log(Math.round(4.5))
console.log(Math.round(3,2))
console.log(Math.ceil(4,3))
console.log(Math.ceil(-4,3))
console.log(Math.floor(4.2))
console.log(Math.min(4,5,1,6))

var aleatorio = Math.random() // Numero aleatorio entre 0 y 1

function generarNumero(numMax){
    return Math.round((Math.random()*numMax))
}

console.log(generarNumero(100))


// Objeto Array, Map, Set

const a1 = new Array("Rojo","Amarillo","Negro")
const a2 = new Array(4)

const a3 = Array.from('Sebastian Rubio')
const set = new Set(['foo','bar','bar','foo'])
console.log(Array.from(set))

const map = new Map([[1,2],[2,4],[4,8]])
Array.from(map)

const mapper = new Map([['1','a'],['2','b']])
const a6 = Array.from(mapper.values())
const a7 = Array.from(mapper.keys())

console.log(a6)
console.log(a7)

let a8 = Array.from([1,2,3], x=>x+x)
let a9 = Array.from({length:5},(v,i)=>i)
console.log(a9)

console.log(Array.isArray(a9))

const lenguajes = new Array('CSS','Javascript','HTML','hph');
const frameworks = new Array('React','Vue','Angular.js');

console.log(lenguajes);
lenguajes.reverse(); //Invertir lo
console.log(lenguajes)
lenguajes.sort() // Ordena el array de mayor a menor
console.log(lenguajes)

const tecnologias = lenguajes.concat(frameworks)
console.log(lenguajes)
console.log(tecnologias)

tecnologias.push('webpack')





