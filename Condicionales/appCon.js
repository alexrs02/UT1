const FLIGTH = 100
const HOTEL = 60
const TOUR = 20 
const TOTAL = FLIGTH + HOTEL + TOUR
const BUDGET = 100

if(BUDGET>TOTAL){
    console.log('Te puedes ir de viaje')
}else if (BUDGET==TOTAL){
    console.log('Te puedes ir de viaje pero justo')
}else{
    console.log('No vas a ningun sitio')
}

// Operador terciario

const RESULTADO = BUDGET>=TOTAL ?console.log('Te vas de viaje') : console.log('No te vas') 