

const arreglo = [1, 2, 3, 4];

let arreglo2 =  [...arreglo, 5]; 

let arreglo3 = arreglo2.map(function (numero) { 
    return numero * 2;
    // return "Hola " devolvería 5 veces " hola "
 
})


//console.log(arreglo);
//console.log(arreglo2);
console.log(arreglo3);