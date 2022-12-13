const heading = document.querySelector("h1");

heading.style.color = "white";
heading.style.backgroundColor = "blue";
heading.style.padding = "2rem";

console.log(heading.style.cssText);
console.log(window.getComputedStyle(heading));

heading.style.cssText = `background-color: orange; padding: 2rem; text-transform: uppercase;`;

heading.setAttribute("style", "color: red");

heading.className = "ruby";

heading.classList.add("ruby"); //añade
heading.classList.toogle("ruby"); //quita y pone, dependiendo