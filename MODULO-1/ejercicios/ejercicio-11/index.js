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

function masJoven(personas) {
    let masJoven = personas[0];
    for (let i = 1; i < personas.length; i++) {
      if (personas[i].edad < masJoven.edad) {
        masJoven = personas[i];
      }
    }
    return masJoven;
  }
  
  console.log(masJoven(personas));

  function masViejo(personas) {
    let masViejo = personas[0];
    for (let i = 1; i < personas.length; i++) {
      if (personas[i].edad > masViejo.edad) {
        masViejo = personas[i];
      }
    }
    return masViejo;
  }
  
  console.log(masViejo(personas));


