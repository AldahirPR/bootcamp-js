const h1 = document.querySelector("h1");

console.log(h1.hasAttribute("id"));

h1.setAttribute('id', 'Nuevo valor desde JS');
console.log(h1.getAttribute("id"));

const countries = document.querySelectorAll('.country');
countries.forEach(country => {
    console.log(country.dataset.countryCode); //forzado el camelCase
});