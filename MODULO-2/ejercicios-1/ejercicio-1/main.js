// Teniendo en cuenta el siguiente HTML

// <p>Este es el primer párrafo</p>
// <p class="parrafo">Este es el segundo párrafo</p>
// <p>Este es el tercer párrafo</p>

//  Muestra en la consola el texto de cada uno de los párrafos.
const parrafos =  document.querySelectorAll("p");

parrafos.forEach(parrafo => {
    console.log(parrafo.textContent);
});
//  Muestra en la consola el texto de cada uno de los párrafos que tengan la clase parrafo.
const parrafo = document.querySelectorAll(".parrafo");
parrafo.forEach(parra => {
    console.log(parra.textContent);
});
//  Modifica el texto de cada uno de los párrafos que tengan la clase parrafo por "Hola Mundo".
parrafo.forEach(parra => {
    parra.textContent = "Hola Mundo";
});
//  Cambia el color de fondo de cada uno de los párrafos que tengan la clase parrafo por red.
parrafo.forEach(parra => {
    parra.style.cssText = `background-color: red;`;
})
//  Añade un span con el texto "Infiltrado" al final de cada uno de los párrafos que tengan la clase parrafo
parrafo.forEach(parra => {
    parra.innerHTML = parra.textContent + `<span> Infiltrado</span>`
});