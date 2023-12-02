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
  game = gameStr.split(":");
  gameId = game[0].split(" ")[1];
  gameData = game[1].split(";").map((pull) => {
    return pull.trim().split(",");
  });

  for (let i = 0; i < gameData.length; i++) {
    for (let j = 0; j < gameData[i].length; j++) {
      const [num, color] = gameData[i][j].trim().split(" ");
      if (maxCubes[color] < +num) {
        return 0;
      }
    }
  }

  return +gameId;
};

console.log(sumOfPossibleGames(lines));
