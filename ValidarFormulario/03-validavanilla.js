window.addEventListener("load" , function () {
    // Capturamos los elementos del forumulario

    const forumulario = this.document.querySelector("#formulario")
    const usuario = this.document.querySelector("#user")
    const age = this.document.querySelector("#age")
    const passwd = this.document.querySelector("#passwd")
    const newpasswd = this.document.querySelector("#newpasswd")
    const fechanac = this.document.querySelector("#fechaNac")
    const condiciones = this.document.querySelector("#condiciones")


    // Funcion de validacion del formulario asociada al boton submit

    forumulario.addEventListener("submit", evento => {
        // Prevenir el comportamiento por defecto 

        evento.preventDefault()
        evento.stopPropagation()

        // La variable valido comienza con el valor true, en el caso de que exista un campo erróneo se pone falso

        let valido = true

        if(!validaUser(usuario)){
            valido = false  
        }

        if(!validaAge(age)){
            valido = false
        }

        if(!validarPass(passwd)){
            valido = false
        }

        if(!validaPass2(newpasswd)){
            valido = false
        }

        if(!validaFecha(fechanac)){
            valido = false
        }

        if(!validaCheck(condiciones)){
            valido = false
        }

        // Si no hemos encontrado ningún error formamos el envio del formulario

        if(valido){
            forumulario.submit()
        }


        // -------------------------------- FUNCIONES VALIDACION -------------------------------------

        // Validamos el usuario, validamos el input no el valor del input

        function validaUser(elem){
            if(!elem.value){
                elem.parentNode.querySelector("p").textContent = ""
                elem.parentNode.classList.add("error")
                return false
            }else{
                elem.parentNode.querySelector("p").textContent = ""
                elem.parentNode.classList.remove("error")
                return true
            }
        }

        // Validar el passwd

        function validarPass(elem){
            if(elem.value.length < 7){
                marcaError(elem , "La contraseña debe tener al menos 7 caracteres")
                return false
            }else{
                marcaValido(elem)
                return true
            }
        }
          
        // Lo mio

        /*function validaPass2(newpasswd , oldpass) {
            if (newpasswd != oldpass) {
                newpasswd.parentNode.querySelector(".error-feedback").textContent = "Las contraseñas deben de coincidir"
                return false
            }else{
                newpasswd.parentNode.querySelector(".error-feedback").textContent = ""
                return true
            }
            
        }*/

        // Lo del profe

        function validaPass2(newpasswd, oldpass){
            if (newpasswd === oldpass) {
                newpasswd.parentNode.querySelector(".error-feedback").textContent = ""
                return true
            }else{
                newpasswd.parentNode.querySelector(".error-feedback").textContent = "Las contraseñas deben de coincidir"
                return false
            }
        }

        // Validar Fecha

        function validaFecha(elem){
            if(elem.value != null){
                elem.parentNode.querySelector(".error-feedback").textContent = ""
                return true
            }else{
                elem.parentNode.querySelector(".error-feedback").textContent = ""
                return false
            }
        }

        // Validar Condiciones

        function validaCheck(elem){
            if(elem.checked){
                elem.parentNode.querySelector(".error-feedback").textContent = ""
                return true
            }else{
                elem.parentNode.querySelector(".error-feedback").textContent = "Tiene que marcar la casilla"
                return false
            }
        }

        // Valida Edad

        function validaAge(elem){
            if(elem.value <= 0 || elem.value > 110){
                elem.parentNode.querySelector(".error-feedback").textContent = "Tu edad tiene que ser real"
                return false
            }else{
                elem.parentNode.querySelector(".error-feedback").textContent = ""
                return true
            }
        }

        // ---------------------------------- FUNCIONES DE UTILIDAD -------------------------------------

        function marcaError(elem , mensaje){
            elem.parentNode.querySelector(".error-feedback").textContent = mensaje
            elem.parentNode.classList.add("error")
        }

        function marcaValido(elem){
            elem.parentNode.querySelector(".error-feedback").textContent = ""
            elem.parentNode.classList.add("remove")
        }

    })

    forumulario.addEventListener("reset" , evento => {

        this.window.location.href = "resultado.html"

        const nombre = this.document.querySelector("#nombre2")
        const age = this.document.querySelector("#age2")
        const passwd = this.document.querySelector("#passwd2")
        const newpasswd = this.document.querySelector("#newpasswd2")
        const date = this.document.querySelector("#date2")
        const check = this.document.querySelector("#check2")

        


    })

})