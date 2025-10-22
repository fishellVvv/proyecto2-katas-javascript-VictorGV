const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const input = document.querySelector(
  'input[data-function="toFilterStreamers"]'
);

const ul = document.createElement("ul");

function renderResults(list) {
  document.body.appendChild(ul);
  ul.innerHTML = "";

  for (const st of list) {
    const li = document.createElement("li");
    li.textContent = `${st.name} (${st.age}) — ${st.gameMorePlayed}`;
    ul.appendChild(li);
  }
}

const filterStreamers = (text) => {
  const search = text.trim().toLowerCase();
  if (!search) {
    renderResults(streamers);
    return;
  }

  const results = streamers.filter((st) =>
    st.name.toLowerCase().includes(search)
  );
  renderResults(results);
};

input.addEventListener("input", (ev) => {
  filterStreamers(ev.target.value);
});

filterStreamers("");
