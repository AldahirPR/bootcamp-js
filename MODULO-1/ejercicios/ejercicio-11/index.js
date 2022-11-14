/* 
 Crea una función que reciba un array de personas y devuelva un array con las personas mayores de edad.
 Dime cual es la persona más joven del array.
 Dime cual es la persona más mayor del array.
*/


const personas = [

    { nombre: 'Juan', edad: 18 },
  
    { nombre: 'María', edad: 16 },
  
    { nombre: 'Pedro', edad: 20 },
  
    { nombre: 'Pablo', edad: 15 },
  
    { nombre: 'Laura', edad: 19 },

  ];

function mayorDeEdad (personas){
    for(let i = 0; i < personas.length; i++){
        if(personas[i].edad >= 18){
            console.log(personas[i].nombre, personas[i].edad);
        }
    }

}

mayorDeEdad(personas);

console.log("El más viejo tiene: " + Math.max.apply(Math, personas.map(function(persona) { return persona.edad; })));
console.log("El más jóven tiene: " + Math.min.apply(Math, personas.map(function(persona) { return persona.edad; })));

