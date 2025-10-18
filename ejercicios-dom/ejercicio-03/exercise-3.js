// 3.1
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const ul = document.createElement("ul");
countries.forEach((country) => {
  const li = document.createElement("li");
  li.textContent = country;
  ul.appendChild(li);
});

document.body.appendChild(ul);

// 3.2
document.querySelector(".fn-remove-me").remove();

// 3.3
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const printHere = document.querySelector('[data-function="printHere"]');

const ul2 = document.createElement("ul");
cars.forEach((car) => {
  const li = document.createElement("li");
  li.textContent = car;
  ul2.appendChild(li);
});

printHere.appendChild(ul2);

// 3.4
const countries2 = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const cards = [];

countries2.forEach(({ title, imgUrl }) => {
  const card = document.createElement("div");
  card.innerHTML = `
    <h4>${title}</h4>
    <img src="${imgUrl}" alt="${title}"/>
    `;

  document.body.appendChild(card);
  cards.push(card);
});

// 3.5
const btnDeleteLast = document.createElement("button");
btnDeleteLast.textContent = "Eliminar último div";

document.body.appendChild(btnDeleteLast);

btnDeleteLast.addEventListener("click", () => cards.pop().remove());

// 3.6
cards.forEach((card) => {
  const btn = document.createElement("button");
  btn.textContent = "Eliminar este div";

  card.appendChild(btn);

  btn.addEventListener("click", () =>
    cards.splice(cards.indexOf(card), 1)[0].remove()
  );
});
