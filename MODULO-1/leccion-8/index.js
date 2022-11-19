// for in
const persona = {
    nombre: 'Pepe',
    edad: 23,
    ciudad: 'Madrid'
  }
  
  for (const propiedad in persona) {
    console.log(propiedad) // nombre, edad, ciudad
    console.log(persona[propiedad]) // Pepe, 23, Madrid
  }

  //for of
  const frutas = ['manzana', 'pera', 'naranja']

for (const fruta of frutas) {
  console.log(fruta) // manzana, pera, naranja
}