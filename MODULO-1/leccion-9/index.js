//Métodos de array
//forEach

const personajes = [
    { id: 1, nombre: 'Jaime', familia: 'Lannister', edad: 34},
    { id: 2, nombre: 'Arya', familia: 'Stark', edad: 11},
    { id: 3, nombre: 'Oberyn', familia: 'Martell', edad: 25},
    { id: 4, nombre: 'Sansa', familia: 'Stark', edad: 44},
    { id: 5, nombre: 'Jon', familia: 'Snow', edad: 21},
];

// personajes.forEach((personaje) => console.log(personaje.nombre));

let miembrosFamilia = {};

personajes.forEach((personaje) => {
    if(miembrosFamilia[personaje.familia]){
        miembrosFamilia[personaje.familia]++;
    } else {
        miembrosFamilia[personaje.familia] = 1;
    }
});

console.log(miembrosFamilia);

//Filter (crea un nuevo array por defecto)

const lannisters = personajes.filter(function (personaje){
    return personaje.familia === 'Lannister';
});

const lannistersFlecha = personajes.filter((personaje) => personaje.familia === 'Lannister');

console.log(lannisters);
console.log(lannistersFlecha);

const numbers = [1,2,3,1,2,3,4,5,6];

const estaRepetido = (value, index, arr) => {
    return arr.indexOf(value) === index;
}

const nums = numbers.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
});

const nums2 = numbers.filter(estaRepetido);

console.log(nums);
console.log(nums2);

//Find, sólo retorna el primer valor verdadero

const buscarArya = ({ nombre }) => nombre === 'Arya';

const arya = personajes.find(buscarArya);
console.log(arya);

//Buscar Lannister

const buscarLannister = ({familia}) => familia === 'Lannister';

const esLannister = personajes.find(buscarLannister);
console.log(esLannister);

//Map, devuelve un nuevo array

const nombresPersonajes = personajes.map(({nombre, edad}) => ({nombre, edad}));
console.log(nombresPersonajes);

const numeros = [1,2,3,4,5,6];

const doble = (numero) =>{
    return  numero * 2;
}

const numerosDobles = numeros.map(doble);
console.log(numerosDobles);


//Reduce

const numeros2 = [1,1,1];

const total = numeros2.reduce(suma, 0);

function suma (acumulador, valorActual){
    return acumulador + valorActual;
}

console.log(total);

const compararEdad = (acumulador, {edad}) => {
    if(acumulador > edad) return acumulador;
    return edad
}

const edadMayor = personajes.reduce(compararEdad);
console.log(edadMayor);