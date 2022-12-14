const board = document.querySelector(".board");

// const container = `
// <div><p>Item 1</p><p>Item 2</p></div>
// `;

// board.innerHTML = container;

const container = document.createElement('div');

const fragment = document.createDocumentFragment();
const items = ["Item 1 ", "Item 2"];

items.forEach(item => {
    const pElement = document.createElement("p");
    pElement.textContent = item;
    // container.append(pElement);
    fragment.append(pElement);
});

// item1.textContent = "Item 1";
// item2.textContent = "Item 2";

// container.append(item1, item2);

board.append(fragment);