window.addEventListener("load", e => {

    const encabezados = document.querySelectorAll("#menu>ul>li>a")
    console.log(encabezados)

    // asignamos la funcion manejadora que será despliega
    encabezados.forEach(element => {
    element.addEventListener("click",despliega)
    })


function despliega(e){
    e.preventDefault
    const nodo = e.target
    console.log(nodo)   
    var ulmenu = nodo.parentNode.getElementsByTagName("ul")[0]

    if(ulmenu.style.display == "block"){
        ulmenu.style.display = "none"
    }else{
        ulmenu.style.display = "block"
    }
}


});

window.addEventListener("load", e => {

    const encabezados = document.querySelectorAll("#menu>ul>li>a")
    console.log(encabezados)

    // asignamos la funcion manejadora que será despliega
    encabezados.forEach(element => {
    element.addEventListener("click",despliega)
    })


    function despliega(e){
        e.preventDefault()
        const nodo = e.target
        var lipadre = nodo.parentNode

        if(lipadre.classList.contains("mostrar")){
            lipadre.classList.remove("mostrar")
        }else{
            mostrados = lipadre.parentNode.getElementsByTagName("mostrar")
            for (var i = 0; i< mostrados.length; i++){
                mostrados[i].classList.add("mostrar")
            }
        }
    }

});