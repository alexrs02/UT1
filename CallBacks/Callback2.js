function Saludar(nombre){
    alert("Hola eres " +nomber+ " ?");
}

function ObtenerNombre(){
    const nombre = pormp("Introduce un nombre")
    return nombre
}

const nombre = ObtenerNombre()
Saludar(nombre)

function ObtenerNombre(fn){
    const nombre = prompt("Introduce el nombre")
    fn(nombre)
}

ObtenerNombre(Saludar)
ObtenerNombre(function(nombre){
    alert("Hola" +nombre)
})

ObtenerNombre(nombre =>{
    console.log("Hola" +nombre)
})