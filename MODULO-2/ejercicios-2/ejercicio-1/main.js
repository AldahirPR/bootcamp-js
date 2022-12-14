// Teniendo en cuenta el siguiente HTML

// <div class="app">
//     <p>Soy un párrafo</p>
//     <p>Soy otro párrafo</p>
// </div>

//  Crea una imagen con el atributo src con el valor https://via.placeholder.com/150 y el atributo alt con el valor Imagen de ejemplo.

const img = document.createElement('img');
img.src = 'https://via.placeholder.com/150';
img.alt = 'Imagen de ejemplo'
//  Inserta la imagen dentro del div con la clase app.

const app = document.querySelector(".app");

app.append(img);
//  ¿Podrías insertar la imagen antes del primer párrafo? Toca investigar 🦩

app.prepend(img);
//  ¿Podrías insertar la imagen entre los dos párrafos?

var div = document.createElement("div");
div.appendChild(img);
var p = document.getElementById("lastP");
p.parentNode.insertBefore(div,p);