// Teniendo en cuenta el siguiente array de objetos

const animals = [
  { name: 'Lion King', isCarnivore: true, emoji: '' },
  { name: 'Plant', isCarnivore: false, emoji: '' },
  { name: 'Ant', isCarnivore: true, emoji: '' },
  { name: 'Bee', isCarnivore: true, emoji: '' },
  { name: 'Mouse', isCarnivore: true, emoji: '' }
];

//  Crea 2 listas, una para carnívoros y otra para herbívoros.
//  Intenta evitar el reflow a la hora de añadir elementos a las listas.
//  Quiero que se le añada la clase carnivore a los carnívoros y la clase herbivore a los herbívoros.
//  A los carnívoros quiero que se les añada un emoji 🍖 y a los herbívoros🌱. Al final de cada nombre.
const carnivore = document.createElement('ul');
const herbivore = document.createElement('ul');

animals.forEach(animal => {
    if(animal.isCarnivore === true){
        const li = document.createElement('li');
        animal.emoji = "🍖";
        carnivore.append(li);
        li.textContent = animal.name + animal.emoji;
    } else {
        const li = document.createElement("li");
        animal.emoji = "🌱";
        herbivore.append(li);
        li.textContent = animal.name +  animal.emoji;
    }
});
const carnivoro = document.querySelector(".carnivore");
const herbivoro = document.querySelector(".herbivore");
carnivoro.append(carnivore);
herbivoro.append(herbivore);