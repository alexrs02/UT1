// Variable definida de forma global

var mensaje="Variable de tipo String"
console.log(mensaje)
var tel='603643736'
console.log(tel)

// Variables según ecmascript6

let nombre="Polo"
console.log(nombre)

// Constantes

const apellido="Ruiz"
console.log(apellido)

// Puedo definir una variable despues de haberla utilizado

console.log(noDefinida)
var noDefinida="222"

// Con let no se permite utilizar una variable antes de definirla 

// Si la variable se crea dentro de un bloque fuera de el no será visible

if(true){
    const varLocal="variable local"
}

// console.log(varLocal)  --error

function sayHello(){
    const varLocal="Una variable nueva"
    console.log(varLocal)
}





