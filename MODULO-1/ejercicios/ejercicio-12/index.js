/* 
    Recuerdas el ejercicio de los pokemons? 
    Ahora vamos a crear una función que reciba un array de pokemons y muestre por consola el nombre de cada pokemon.
    También vamos a crear una función que reciba un array de pokemons
    y muestre por consola el nombre de cada pokemon que sea de tipo fuego.
*/

const pokemons = [
    {nombre: "Pikachu", tipo: "eléctrico"},
    {nombre: "Ditto", tipo: "normal"},
    {nombre: "Flareon", tipo: "fuego"},
    {nombre: "Vaporeon", tipo: "agua"},
    {nombre: "Charizard", tipo: "fuego"},
];

function pokimons(pokemons){
    for(let i = 0; i < pokemons.length; i++){
        console.log(pokemons[i].nombre);
    }
}

pokimons(pokemons);

function soloFuego(pokemons){
    for(let j = 0; j < pokemons.length; j++){
        if(pokemons[j].tipo === "fuego"){
            console.log(pokemons[j].nombre + " es de tipo fuego");
        }
    }
}

soloFuego(pokemons);

