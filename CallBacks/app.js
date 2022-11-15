function Saludar(nombre) {
    alert("Hola" + nombre)
}

function btenerNombre() {
    const nombre = prompt("Introducir un nombre")
    return nombre
}
const nombre = "Elena"

Saludar(nombre)

//Vamos a refactorizar el código 

function ObtenerNombre(fn) {
    const nombre = ("Introducir un nombre")
    fn(nombre)
}
ObtenerNombre(Saludar)

ObtenerNombre(function (nombre) {
    alert("Hola" + nombre)
})


//Con esto dejamos de programar secuencialmente y pretendemos reciclar código. Estos son callbacks sincronos






// -----------CALLBACK3(nuevo fichero):
// Mucho texto en JS indirectamente son callbacks:

const numero = [1, 2, 3, 4]
[1, 2, 3, 4].forEach(element => {
    console.log(element)
});

numero.forEach(function (numero) {
    console.log(numero)
});

function Recorre(numero) {
    console.log(numero)
}
numero.forEach(Recorre)
//va iterando de forma diercta, esto es un callback....Son callbacks sincronos que proporciona JS. Son tres formas de hacer lo mismo (según Sebas)





const numeros = [1, 2, 3, 4]
function HacerDoble(n) {
    return n * 2
}
const doble = numeros.map(HacerDoble)
const pares = numeros.filter((n) => n % 2 === 0)

//Esto es eficiencia en su máximo esplendor dice



// -----------CALLBACK4_Asincronos(nuevo fichero):

function Saludar(n) {
    console.log("Hola")
}
console.log("Inicio")
setTimeout(Saludar("Ana Fanta"), 2000)
console.log("Fin")


//------------------------------
const URL = "estoesunawebinventada.es/datos.json"

function Descargar(url) {
    console.log("Descargando.....")
    setTimeOut(function () {
        console.log("Descargado")
    }, 300)
}

function ProcesarDatos(fichero) {
    console.log("Procesando datos...")
}


//Podemos llamar a las funciones asíncronas de dos formas

Descargar(URL)
ProcesarDatos(fichero)

//Suele dar errores porque no se respeta el orden de los callbacks. Para solucionarlo, ->


function Descargar(url, fn) {
    console.log("Descargando...")
    setTimeOut(function () {
        console.log("Descargado")
        fn()
    }, 300)
}

Descargar(URL, ProcesarDatos)
Descargar(URL, function () {
    console.log("Procesando")
})

//el primer parametro es el que se ejecuta si es correcto el codigo, y el segundo en caso contrario

let miPrimeraPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Exito")
    }, 2000)

})
miPrimeraPromesa.then((value) => {
    console.log(value)
})
    .catch(() => {
        console.log("A habido un error")
    })


  //value es el valor que le pasa resolve