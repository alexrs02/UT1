function MiFuncion(fn){
    
    fn();
  }
  
  function Saluda(){
    console.log("hola")
  }
         
  MiFuncion(Saluda)
  MiFuncion(function Saludar(){
    console.log("HOLA")
  })
  MiFuncion(function(){  //otra forma
    console.log("hola")
  })
  MiFuncion(()=>{
    console.log("holaaaa")  // otra forma
  })

  //--------------------------------------//
  function Unafuncion(fn){
    const nombre="Rosa"
    fn(nombre)
  }
  function Misaluda(nombre){ // una forma
    console.log("hola"+nombre)
  }
  Unafuncion(Misaluda)  // otra forma
  Unafuncion((nombre)=>{
    console.log("hola"+nombre)
  })
  Unafuncion(nombre=>{ // aqui solo lleva un parametro por lo tanto no se pone nada
    console.log("hola"+nombre)
  })