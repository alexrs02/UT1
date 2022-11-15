var persona = ['John',12,'Mexico',true]

var persona1 = new Array(3)

var persona2 = new Array('Jhon',12,'Mexico',true)

console.log(persona[0])
console.log(persona2[1])

persona[0] = 'Jose'
persona.pop() // Saca el ultimo elemento de la lista
persona.push('Programador') // Añade un elemento al final de la lista
console.log(persona)

var colores = ['Rojo','Azul','Amarillo','Naranja']

for(var i=0; i<colores.length; i++){
    console.log(colores[i])
}


/*
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

for (const iterator of object) {
    
}

while (condition) {
    
}

*/

for (num of a1){
    console.log(num);
}

a1.array.forEach(function (elemnto,indice,array){
    console.log(`${indice}: ${elemento}`)
});

// Una cadena tambien se puede recorrer como un array de caracteres:

const cadena = "Hola mundo";

for (car of cadena){
    console.log(car);
}

