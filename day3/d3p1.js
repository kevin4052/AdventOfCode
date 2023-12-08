const fs = require("fs");
const { get } = require("http");
const file = "../inputs/d3p1.txt";
const data = fs.readFileSync(file, 'utf8').split("\n").map(x => x.split(""));

const directions = [
  [-1, -1], [-1, 0], [-1, 1],
  [0, -1], [0, 1],
  [1, -1], [1, 0], [1, 1]
]

function isCharNumber(input) {
  return !NaN(parseInt(input));
}

function isCharDot(input) {
  return input === '.';
}

function getChar(i, j, [y, x]) {
  return data[y + i][x + j];
}

let sum = 0;

for (let y = 0; y < data.length; y++) {
  const row = data[y];
  let isNumber = false;
  let currentNumber = '';
  let checkForSymbol = true;

  for (let x = 0; x < row.length; x++) {
    const currentChar = get(y, x, [0, 0]);
    isNumber = isCharNumber(currentChar);

    if (!isNumber && !checkForSymbol) {
      sum += parseInt(currentNumber);
      currentNumber = '';
      checkForSymbol = true;
    }

    // check if current number is a partnumber
    if (isNumber && checkForSymbol) {
      const isPartNumber = directions.reduce((acc, [dy, dx]) => {
        const char = getChar(y, x, [dy, dx]);

        return acc || !isCharNumber(char) && !isCharDot(char) && char !== undefined
      }, false);

      if (isPartNumber) {
        currentNumber += currentChar;
        checkForSymbol = false;
      }
    }

    if (isCharDot(currentChar)) {
      sum += parseInt(currentNumber);
      currentNumber = '';
    }

  }
}

console.log(sum);
