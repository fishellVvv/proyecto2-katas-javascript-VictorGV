// 2.1
const pointsList = [32, 54, 21, 64, 75, 43];

const copyPointList = [...pointsList];
console.log("2.1 ->", copyPointList);

// 2.2
const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };

const copyToy = { ...toy };
console.log("2.2 ->", copyToy);

// 2.3
{
  // bloque para no chocar con el otro 'pointList'
  const pointsList = [32, 54, 21, 64, 75, 43];
  const pointsLis2 = [54, 87, 99, 65, 32];

  const unifiedPointList = [...pointsList, ...pointsLis2];
  console.log("2.3 ->", unifiedPointList);
}

// 2.4
{
  // bloque para no chocar con el otro 'toy'
  const toy = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
  const toyUpdate = {
    lights: "rgb",
    power: ["Volar like a dragon", "MoonWalk"],
  };

  const updatedToy = { ...toy, ...toyUpdate };
  console.log("2.4 ->", updatedToy);
}

// 2.5
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const copyColors = [...colors.slice(0, 2), ...colors.slice(3)];
console.log("2.5 ->", copyColors);
