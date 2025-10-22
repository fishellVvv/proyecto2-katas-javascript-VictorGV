// 4.1
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const over18Ages = ages.filter((age) => age > 18);
console.log("4.1 ->", over18Ages);

// 4.2
const evenAges = ages.filter((age) => age % 2 === 0);
console.log("4.2 ->", evenAges);

// 4.3
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const lolStreamers = streamers.filter(
  (st) => st.gameMorePlayed === "League of Legends"
);
console.log("4.3 ->", lolStreamers);

// 4.4
const uStreamers = streamers.filter((st) => st.name.includes("u"));
console.log("4.4 ->", uStreamers);

// 4.5
const legendsStreamers = streamers
  .filter((st) => st.gameMorePlayed.includes("Legends"))
  .map((st) => ({
    ...st,
    gameMorePlayed:
      st.age > 35 ? st.gameMorePlayed.toUpperCase() : st.gameMorePlayed,
  }));
console.log("4.5 ->", legendsStreamers);
