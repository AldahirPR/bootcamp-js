const board =  document.querySelector(".board");

const items = ["Item 1", "Item 2"];

const fragment = document.createDocumentFragment();

const templateTest = document.querySelector("#templateTest");

const pItems = templateTest.content.querySelectorAll("p");

pItems.forEach((p, index) => {
    p.textContent = items[index];
});

const clone = templateTest.cloneNode(true);

fragment.append(clone.content);

board.append(fragment);