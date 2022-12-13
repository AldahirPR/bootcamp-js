// Teniendo en cuenta el siguiente array de objetos

const users = [
  { name: 'María', isPremium: false },
  { name: 'Lucía', isPremium: true },
  { name: 'Susana', isPremium: true },
  { name: 'Rocío', isPremium: false },
  { name: 'Inmaculada', isPremium: false }
];

//  Crea una lista no ordenada con el nombre de cada usuario.
let ul =  document.createElement("ul");
document.body.appendChild(ul); //se agrega
users.forEach(user => {
    let li = document.createElement("li");
    if(user.isPremium === true){
        li.classList.toggle("isPremium"); //  Resalta con el background-color gold a los usuarios premium.
        li.setAttribute('title', 'Usuario Premium'); //  Añade también el atributo title con el valor Usuario premium a los usuarios premium.
    }
    li.innerHTML = user.name;
    ul.appendChild(li);
});

