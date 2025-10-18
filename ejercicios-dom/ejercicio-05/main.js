const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const ul = document.createElement("ul");
for (let i = 0; i < albums.length; i++) {
  const li = document.createElement("li");
  li.innerHTML = `
  <span class="index">${i + 1}</span>
  <span class="title">${albums[i]}</span>
  `;
  ul.appendChild(li);
}

document.body.querySelector("main").appendChild(ul);
