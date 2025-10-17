// 2.1
const divVacio = document.createElement("div");
document.body.appendChild(divVacio);

// 2.2
const divp = document.createElement("div");
const p = document.createElement("p");
divp.appendChild(p);
document.body.appendChild(divp);

// 2.3
const div6p = document.createElement("div");
for (let i = 0; i < 6; i++) {
  const p = document.createElement("p");
  div6p.appendChild(p);
}
document.body.appendChild(div6p);

// 2.4
const divDinamico = document.createElement("div");
divDinamico.textContent = "Soy dinámico!";
document.body.appendChild(divDinamico);

// 2.5
const h2insert = document.querySelector("h2.fn-insert-here");
h2insert.textContent = "Wubba Lubba dub dub";

// 2.6
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const ul = document.createElement("ul");
for (const app of apps) {
  const li = document.createElement("li");
  li.textContent = app;
  ul.appendChild(li);
}
document.body.appendChild(ul);

// 2.7
const garbage = document.querySelectorAll(".fn-remove-me");
for (const trash of garbage) {
  trash.remove();
}

// 2.8
const doubleDiv = document.querySelectorAll("body > div");
const pBetween = document.createElement("p");
pBetween.textContent = "Voy en medio!";
doubleDiv[0].insertAdjacentElement("afterend", pBetween);

// 2.9
const Insiders = document.querySelectorAll("div.fn-insert-here");
for (const insider of Insiders) {
  const p = document.createElement("p");
  p.textContent = "Voy dentro!";
  insider.appendChild(p);
}
