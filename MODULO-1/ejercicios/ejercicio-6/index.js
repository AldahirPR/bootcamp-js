let pokemons = [
    {nombre: 'Pikachu', tipo: 'Eléctrico'},
    {nombre: 'Ditto', tipo: 'Normal'},
    {nombre: 'Flareon', tipo: 'Fuego'}
];

for(let i = 0; i < pokemons.length; i++){
    if(pokemons[i].tipo === 'Fuego'){
        console.log('¡Es un pokémon de fuego!');
    }
}

