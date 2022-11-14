/* Con arrowFunctions */
/* Ejercicio 1 */

const doble = (x) => {
    return x * 2;
}

console.log("Doble: " + doble(5));

/* Ejercicio 2 */

const cuadrado = (y) => {
    return Math.pow(y, 2);
}

console.log("Potencia: " + cuadrado(2));

/* Ejercicio 3 */

const areaRectangulo = (base, altura) => {
    return base * altura;
}

console.log("Área: " + areaRectangulo(2,8));

/* Ejercicio 4 */

const parImpar = (z) => {
    if(z % 2 === 0){
        return z + " es par";
    } else {
        return z + " es impar";
    }
}

console.log(parImpar(16));
console.log(parImpar(51));

/* Ejercicio 5 */

const personas = [

    { nombre: 'Juan', edad: 18 },
  
    { nombre: 'María', edad: 16 },
  
    { nombre: 'Pedro', edad: 20 },
  
    { nombre: 'Pablo', edad: 15 },
  
    { nombre: 'Laura', edad: 19 },
  
];

const mayoresDeEdad = (personas) =>{
    for(let i = 0; i < personas.length; i++){
        if(personas[i].edad >= 18){
            console.log(personas[i].nombre + " " + personas[i].edad);
        }
    }
}

mayoresDeEdad(personas);

console.log(Math.max(...personas.map(persona => persona.edad)));
console.log(Math.min(...personas.map(persona => persona.edad)));

/* Ejercicio 6 */

const pokemons = [
    {nombre: "Pikachu", tipo: "eléctrico"},
    {nombre: "Ditto", tipo: "normal"},
    {nombre: "Flareon", tipo: "fuego"},
    {nombre: "Vaporeon", tipo: "agua"},
    {nombre: "Charizard", tipo: "fuego"},
];

const pokimons = (pokemons) => {
    var oneLine = "";
    for(let j = 0; j < pokemons.length; j++){
        oneLine += pokemons[j].nombre + ", "
    }
    console.log(oneLine);
}

pokimons(pokemons);

const soloFuego = (pokemons) => {
    for(let k = 0; k < pokemons.length; k++){
        if(pokemons[k].tipo === "fuego"){
            console.log(pokemons[k].nombre + " es de tipo fuego");
        }
    }
}

soloFuego(pokemons);