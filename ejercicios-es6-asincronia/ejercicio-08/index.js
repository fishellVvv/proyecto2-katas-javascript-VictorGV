let data = [];

const getCharacters = async () => {
  try {
    const res = await fetch(`https://thronesapi.com/api/v2/Characters`);
    data = await res.json();
  } catch (er) {
    console.error(er);
  }
};

const printList = () => {
  const characterList = document.querySelector("#character-list");

  for (const character of data) {
    const option = document.createElement("option");
    option.textContent = character.fullName;
    option.value = String(character.id);
    characterList.appendChild(option);
  }

  const img = document.querySelector(".character-image");
  img.src = data[0].imageUrl;
  img.alt = data[0].fullName;

  characterList.addEventListener("change", async (ev) => {
    const id = Number.parseInt(ev.target.value);

    img.src = data[id].imageUrl;
    img.alt = data[id].fullName;
  });
};

document.addEventListener("DOMContentLoaded", async () => {
  await getCharacters();
  printList();
});
