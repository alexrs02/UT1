let special=document.getElementById("special")
console.log(special)

special.style.color="red"

let lista_elementos = document.querySelectorAll("li")
console.log(lista_elementos)

let nodoclase = document.querySelector("#selector_class")

/*
for (let i=0; i<lista_elementos.length; i++){
    lista_elementos[i].style.fontSize="2rem"
}

for (const item of lista_elementos){
    item.style.fontSize="3rem"
}

*/

lista_elementos.forEach(item=>{
    item.style.fontSize="3rem"
})

// https://www.w3schools.com/jsreF/tryit.asp?filename=tryjsref_node_childnodes
// 
// Escribir text += algo es igual que text = text + algo