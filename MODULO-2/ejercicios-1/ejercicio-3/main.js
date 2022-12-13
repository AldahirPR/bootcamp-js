// Crea un cuadrado de 100x100px con el color de fondo red y 
// el color de texto white con el texto Soy un cuadrado en el centro.

let cuadrado = document.createElement("div");
document.body.appendChild(cuadrado);

cuadrado.classList.toggle("center");
cuadrado.innerText = "Soy un cuadrado en el centro";

//  Cada vez que se recargue la página el cuadrado debe tener un color de fondo aleatorio
//     de entre los siguientes: red, green, blue, yellow, pink, purple, orange.

const pageAccessedByReload = (
    (window.performance && window.performance === 1) ||
      window.performance
        .getEntriesByType('navigation')
        .map((nav) => nav.type)
        .includes('reload')
  );

  function generateRandomStyle(){
    var random = Math.floor(Math.random() * 7) + 1;
    switch(random){
        //  Si el color de fondo es red, green o blue el tamaño del cuadrado debe ser de 100x100px,
        case 1:
            cuadrado.classList.toggle("red");
            return cuadrado;
        case 2:
            cuadrado.classList.toggle("green");
            return cuadrado;
        case 3:
            cuadrado.classList.toggle("blue");
            return cuadrado;
//  si es yellow, pink o purple el tamaño del cuadrado debe ser de 200x200px 
        case 4:
            cuadrado.classList.toggle("yellow");
            return cuadrado;
        case 5:
            cuadrado.classList.toggle("pink");
            return cuadrado;
        case 6:
            cuadrado.classList.toggle("purple");
            return cuadrado;
//  y si es orange el tamaño del cuadrado debe ser de 300x300px.
        case 7:
            cuadrado.classList.toggle("orange");
            return cuadrado;
    }
}

generateRandomStyle();
  
