const mensaje = "hello hello"

function nueva(){
    console.log("hola mundo")
    console.log(mensaje)
}

nueva()

Suma(2,4)

function Suma(a,b){
    var total = a+b
    console.log(total)
}

Suma(2,3)
//console.log(total)

function otraNueva(name = "coge el valor por defecto"){
    console.log(name)
}

otraNueva("Toma el valor")
otraNueva()

function devuelvaHola(texto="Hola"){
    return texto + " Mundo"
}

console.log(devuelvaHola())
console.log(devuelvaHola('Hello'))

function devuelve(name="Pedro"){
    return `Hola ${name}`
}

console.log(devuelve())


// Funcion anonima

var mynum = function(num=7){
    var multi = num * 2
    return multi
}

console.log(mynum())
console.log(mynum(10))


// Arrow function
// Tiene la particularidad de que pueden acceder a un objeto que llama this

const number1 = () => 'hello'

const number2 = (numero = 10) => numero + 2

const number3 = (num) => num * 2

console.log(number1())
console.log(number2())
console.log(number3(2))



