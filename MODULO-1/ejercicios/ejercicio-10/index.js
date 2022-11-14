/* Crea una función que reciba un número y muestre por consola si es par o impar */

function parImpar (numero){
    if(numero % 2 == 0){
        console.log(numero + " es par");
    } else {
        console.log(numero + " es impar");
    }
}
let numero = prompt("Ingrese un número entero: ");

parImpar(numero);