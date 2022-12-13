const board = document.querySelector(".board");

const div = document.createElement("div");
// div.innerHTML = `<script>alert('hola')</script>`;  no muy recomendado usar innerhtml

const span = document.querySelector("#mainSpan");
console.log(span.innerText); //Jala el texto, innerhtml jala todo el elemento, textContent muestra todo el texto del html (hasta el display: none)
//No corren etiquetas script