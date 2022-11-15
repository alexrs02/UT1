let x = 10

/*const p = new Promise((resolve, reject) => {
    if (x == 10) {
        resolve('La variable es igual a 10')
    } else {
        reject('La variable no es igual a 10')
    }
})

p
    .then(res => {
        console.log('success: ' + res)
    })

    .catch(error => {
        console.log('success: ' + error)
    })*/




// console.log('1. proceso iniciado...')

// setTimeout(() => {
//     x = x * 3 + 2
//     console.log('2. proceso terminado...')
// }, 2000);

// console.log('3. el resultado es: ' + x)

/*const promesa = new Promise((resolve, reject) => {
    
    setTimeout(() => {
        x = x * 3 + 2
        console.log('2. proceso terminado...')
        resolve(x)
        
    }, 2000);
})

console.log('1. proceso iniciado...')

promesa.then(res => {
    console.log('3. El resultado es: ' + res)
})*/

let usuarios = [{
    id: 1,
    nombre: 'Marcos'
},
{
    id: 2,
    nombre: 'Lena'
}]

let telefonos = [{
    id: 1,
    telefono: 123456789
},
{
    id: 2,
    telefono: 987456321
}]



const obtenerUsuario = id => {
    return new Promise((resolve, reject) => {
        if (usuarios.find(usuario => usuario.id === id)) {
            resolve('El usuario existe')
            //resolve(obtenerTelefono(id))
        } else {
            reject('El usuario no existe')
        }
    })
}

const obtenerTelefono = id => {
    return new Promise((resolve, reject) => {
        if (telefonos.find(telefono => telefono.id === id)) {
            resolve('El telefono existe')
        } else {
            reject('El telefono no existe')
        }
    })
}


obtenerUsuario(2)
    .then(res => {
        console.log(res)
        obtenerTelefono(2)
            .then(mensaje => {
                console.log(mensaje)
            })
            .catch(error => {
                console.error(error)
            })
    })
    // .then(mensaje => {
    //     console.log(mensaje)
    // })
    .catch(error => {
        console.error(error)
    })

























