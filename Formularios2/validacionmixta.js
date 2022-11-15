document.addEventListener("DOMContentLoaded" , function(evento){
    const usuario = document.querySelector("#uname")
    const clave = document.querySelector("#pwd")
    const form = document.querySelector("form")

    form.addEventListener('submit', validarFormulario)

   /* usuario.addEventListener("keyup" , function(e){
        if(this.value){
            this.setCustomValidity("")
        }else{
            this.setCustomValidity("Campo vacio")
        }
    })

    clave.addEventListener("keyup" , function(e){
        if(this.value.length >= 6){
            this.setCustomValidity("")
        }else{
            this.setCustomValidity("La contraseña es demasiado corta")
        }
    })*/

    function validarFormulario(evento){
        evento.preventDefault()
        evento.stopPropagation()

        let valido = true
    }

    if (!usuario.value) {
        usuario.setCustomValidity("Campo vacio")
        valido = false
    }else{
        usuario.setCustomValidity("")
    }


    if (clave.value.length <6) {
        clave.setCustomValidity("Menor 6 caracteres")
        valido = false
    }else{
        clave.setCustomValidity("")
    }

    if(valido){
        this.submit
    }else{
        usuario.setCustomValidity("")
    }
})// Fin del javaScript