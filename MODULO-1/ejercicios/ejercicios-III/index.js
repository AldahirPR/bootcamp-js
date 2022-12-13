/*Ejercicio 1:  
Crea una función que reciba un array de strings y devuelva un array con las strings que empiecen por "a" o "A"
*/

const arregloStrings = ['Alto', 'algo', 'mota', 'carro', 'anormal', 'Antes'];

const comparador = arregloStrings.filter(function (elemento){
    if(elemento.charAt(0) === 'A' || elemento.charAt(0) === 'a') return elemento;
});

console.log(comparador);


//Ejercicio 2
/*
Escribe un programa que permita a alguien adivinar un PIN de 4 dígitos exactamente 3 veces. 
Si el usuario adivina el número correctamente, imprime "¡Eso fue correcto!" 
De lo contrario, imprimirá "Lo siento, eso estaba mal." 
El programa se detiene después del 4º intento o si lo adivinaron correctamente.

 Haz el mismo ejercicio pero ahora el usuario tiene intentos infinitos hasta que acierte el PIN o escriba salir.
*/

const pinInicial = 1234;

// for(let i = 2; i >= 0; i--){
//     const pin = prompt('Introduce el PIN: ');
//     if(parseInt(pin) === pinInicial){
//         console.log('Eso fue correcto!');
//         break;
//     } else {
//         console.log('Incorrecto. Turnos restantes: ' + i);
//         if(i === 0) console.log('Perdiste, el pin era: ' + pinInicial);
//     }
// }

/* Intentos infinitos */

// for(let j = 1; j > 0; j++){
//     const pin = prompt('Introduce el PIN (escribe salir para terminar el juego): ');
//     if(pin === 'salir') break;
//     if(parseInt(pin) === pinInicial){
//         console.log('Eso es correcto!');
//         break;
//     } else{
//         console.log('Incorrecto, inténtalo de nuevo');
//     }
// }

//Ejercicio 3
/* 
Crea una función que permita comprobar si un string es un palíndromo.
Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.

Ahora haz la misma comprobación pero con un array de strings. 
*/

let palindromo = 'anita lava la tína';
palindromo = palindromo.normalize('NFD').replace(/\s+/g, ''); //quita los espacios en frases de más de una palabra
palindromo = palindromo.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); //quita los acentos
palindromo = palindromo.toLowerCase(); //transformamos a minúsculas la frase o palabra
let lastChar = palindromo.length;

const esPalindromo = (palindromo) =>{
    for(let i = 0; i < palindromo.length; i++){
        const valorA = palindromo.charAt(i); //encontramos el primer caracter de la frase o palabra
        const valorB = palindromo.charAt(lastChar - 1); //encontramos el último caracter de la frase o palabra
        if(valorA === valorB){
            lastChar -= 1;
            if(lastChar === 0){
                console.log('Es palindromo: ' + palindromo);
            }
        } else {
            console.log('No es palindromo');
            break;
        }
    }
}

esPalindromo(palindromo);

/* Lo mismo pero con un array de strings */

const arreglo = ['sobreverbos', 'hola', 'anita lava la tina', 'prueba', 'sometemos', 'Alí tomó tila'];

for(let i = 0; i < arreglo.length; i++){
    let currentElement = arreglo[i];
    currentElement = currentElement.normalize('NFD').replace(/\s+/g, ''); //quita los espacios en frases de más de una palabra
    currentElement = currentElement.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); //quita los acentos
    currentElement = currentElement.toLowerCase(); //transformamos a minúsculas la frase o palabra
    let lastChar = currentElement.length;

    function isPalindromo (currentElement){
        for(let i = 0; i < currentElement.length; i++){
            const valorA = currentElement.charAt(i); //encontramos el primer caracter de la frase o palabra
            const valorB = currentElement.charAt(lastChar - 1); //encontramos el último caracter de la frase o palabra
            if(valorA === valorB){
                lastChar -= 1;
                if(lastChar === 0){
                    console.log('Es palindromo: ' + currentElement);
                }
            } else {
                console.log('No es palindromo: ' + currentElement);
                break;
            }
        }
    }

    isPalindromo(currentElement);
}
//Ejercicio 4
/* Crea una función que reciba un array de nombres que le han dado like a una foto, e indica por consola quien ha dado like. */
const nombres0 = [];
const nombres1 = ['Juan'];
const nombres2 = ['Juan', 'María'];
const nombres3 = ['Juan', 'María', 'Pedro'];
const nombresN = ['Juan', 'María', 'Pedro', 'Pablo', 'Laura', 'Roberto', 'Karla'];

const likes = (nombres0, nombres1, nombres2, nombres3, nombresN) => {
    if(nombres0.length === 0){
        console.log('Nadie ha dado like')
    }
    if(nombres1.length === 1) console.log(nombres1[0] + " ha dado like");
    if(nombres2.length === 2) console.log(nombres2[0] + " y " + nombres2[1] + " han dado like");
    if(nombres3.length === 3) console.log(nombres3[0] + ", " + nombres3[1] + " y " + nombres3[2] + " han dado like");

    if(nombresN.length > 3){
        let restantes = nombresN.length - 2;
        console.log(nombresN[0] + ", " + nombresN[1] + " y " + restantes + " personas más han dado like");
    }
};

likes(nombres0, nombres1, nombres2, nombres3, nombresN);
//Ejercicio 5

/*
Crea una función que devuelva un array con los nombres de las personas que viven en Madrid.

 Crea una función que devuelva un array con los nombres de las personas que tengan más de 25 años.

 Crea una función que devuelva un array con los nombres de las personas 
 que tengan más de 25 años y que vivan en Madrid.

 Encuentra la primera persona que le guste programar.

 Haz la suma de todas las edades de las personas.

 Crea un nuevo array solo con la ciudad de cada persona y su primer hobby.
    La estructura del array debe ser:

    [
  {
    city: 'Madrid',
    hobby: 'fútbol',
  },
  {
    city: 'Barcelona',
    hobby: 'pintar',
  },
  // ...
]
*/


const users = [
    {
      name: 'Juan',
      age: 25,
      city: 'Madrid',
      hobbies: ['fútbol', 'poker', 'programar'],
    },
    {
      name: 'María',
      age: 30,
      city: 'Barcelona',
      hobbies: ['pintar', 'leer', 'programar'],
    },
    {
      name: 'Pedro',
      age: 20,
      city: 'Madrid',
      hobbies: ['fútbol', 'programar'],
    },
    {
      name: 'Laura',
      age: 35,
      city: 'Barcelona',
      hobbies: ['pintar', 'leer', 'programar'],
    },
    {
      name: 'Pablo',
      age: 27,
      city: 'Madrid',
      hobbies: ['fútbol', 'poker', 'programar'],
    },
];

const esDeMadrid = users.map(({name, city}) => {
    if({city} === 'Madrid') return name;
});
console.log(esDeMadrid);

  
//Ejercicio 6