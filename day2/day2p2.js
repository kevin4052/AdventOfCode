const fs = require("fs");
const file = "../inputs/day2p1.txt";
const lines = fs.readFileSync(file).toString().split("\n");

const maxCubes = {
  red: 12,
  green: 13,
  blue: 14,
};

const sumOfPossibleGames = (lines) => {
  let gameSum = 0;

  for (let i = 0; i < lines.length; i++) {
    gameSum += isGamePossible(lines[i]);
  }

  return gameSum;
};

const isGamePossible = (gameStr) => {
  let blue = 0;
  let green = 0;
  let red = 0;
  game = gameStr.split(":");
  gameId = game[0].split(" ")[1];
  gameData = game[1].split(";").map((pull) => {
    return pull.trim().split(",");
  });

  for (let i = 0; i < gameData.length; i++) {
    for (let j = 0; j < gameData[i].length; j++) {
      const [num, color] = gameData[i][j].trim().split(" ");

      if (color === "blue" && blue < +num) {
        blue = +num;
      }

      if (color === "green" && green < +num) {
        green = +num;
      }

      if (color === "red" && red < +num) {
        red = +num;
      }
    }
  }

  console.log(blue, green, red);

  return blue * green * red;
};

console.log(sumOfPossibleGames(lines));
