const img = document.querySelector(".random-image");
const randomNumber = Math.ceil(Math.random() * 151);

const getPokemon = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    pokemon = await res.json();
  } catch (er) {
    console.error(er);
  }
};

const printPokemon = (pokemon) => {
  img.src = pokemon.sprites.other.dream_world.front_default;
  img.alt = pokemon.name;
};

document.addEventListener("DOMContentLoaded", async () => {
  await getPokemon(randomNumber);
  printPokemon(pokemon);
});
