const users = [
    {
      name: 'John Doe',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
      img: 'https://randomuser.me/api/portraits/men/38.jpg'
    },
    {
      name: 'Jane Doe',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
      img: 'https://randomuser.me/api/portraits/women/74.jpg'
    },
    {
      name: 'John Smith',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
      img: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Jane Smith',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
      img: 'https://randomuser.me/api/portraits/women/92.jpg'
    },
  ];

//   Crea una card para cada usuario.
//   Como atributo alt de la imagen, quiero que se le añada el nombre del usuario.
//   Puedes usar los estilos que están en el template o crear tus propios estilos. Además organiza el código CSS como creas conveniente.


users.forEach(user => {
    const fragment = document.createDocumentFragment();
    const template = document.querySelector("#template");

    let img = template.content.querySelector('img');
    let name = template.content.querySelector('h2');
    let desc = template.content.querySelector('p');

    img.setAttribute('src', user.img);
    img.setAttribute('alt', user.name);

    name.textContent = user.name;
    desc.textContent = user.description;
    const clone = template.cloneNode(true);

    fragment.append(clone.content);

    document.body.append(fragment);
});



