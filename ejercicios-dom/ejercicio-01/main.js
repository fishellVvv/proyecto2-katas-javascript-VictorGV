// 1.1
const showme = document.querySelector(".showme");
console.log("1.1 ->", showme);

console.log(showme.textContent);

// 1.2
const pillado = document.querySelector("#pillado");
console.log("1.2 ->", pillado);

console.log(pillado.textContent);

// 1.3
const powerRangers = document.querySelectorAll("p");
console.log("1.3 ->", powerRangers);

for (const powerRanger of powerRangers) {
  console.log(powerRanger.textContent);
}

// 1.4
const pokemonList = document.querySelectorAll(".pokemon");
console.log("1.4 ->", pokemonList);

for (const pokemon of pokemonList) {
  console.log(pokemon.textContent);
}

// 1.5
const personajes = document.querySelectorAll('[data-function="testMe"]');
console.log("1.5 ->", personajes);

for (const personaje of personajes) {
  console.log(personaje.textContent);
}

// 1.6
const personaje3 = document.querySelectorAll('[data-function="testMe"]')[2];
console.log("1.6 ->", personaje3);

console.log(personaje3.textContent);
