console.log("Hola" +" mundo")

const nombre = "Roberto"
console.log("Hola " + nombre)
console.log(`Hola ${nombre}`)

console.log(nombre.length) // Longitud
console.log(nombre.includes(' ')) // Comprobar si hay una cadena 
console.log(nombre.slice(2,5)) // La cadena empieza en la posicion 0
console.log(nombre.replace('Ro','Al')) // Remplaza el cacho de cadena seleccionado

const cadena = "  hola mundo  "
console.log(cadena.trim()) // Elimina espacios al principio y al final de esta

const calle = "Travesia Mejico,1,3A "
console.log(calle.split(',')) 

var direccion = calle.split(',')
console.log(direccion[0])