import {faker} from '@faker-js/faker'


// const CANT_PRODUCTOS = 5
let productos_test = [];

let id = 1

function getNextId(){
    return id++
}

function crearAlAzar(id) {
    return {
        id,
        nombre: faker.name.firstName(),
        precio: faker.finance.amount(),
        foto: faker.image.avatar()
    }
}
let cant = 5;/*  || CANT_PRODUCTOS */
export function generarProductos(cant) {
    for(let i = 0; i < cant; i++) {
        productos_test.push(crearAlAzar(getNextId()))
    
       /*  res.json(generarProductos(cant)) */

    }
    
    productos_test = JSON.stringify(productos_test)
    // productos_test.push(objeto)
    return productos_test
    
}
export const generar = generarProductos(cant);
console.log(' |||---> --->', generar)
// crear variable de entorno

// console.log(generarProductos(cant))
                
// console.log('-------> PRODUCTOS_TEST--->', productos_test)


