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
  return !isNaN(parseInt(input));
}

function isCharDot(input) {
  return input === '.';
}

function getChar(i, j, [y, x]) {
  if (data[y + i] === undefined) {
    return undefined;
  }
  return data[y + i][x + j];
}

let sum = 0;

for (let y = 0; y < data.length; y++) {
  const row = data[y];
  let isNumber = false;
  let currentNumber = '';
  let checkForSymbol = true;

  for (let x = 0; x < row.length; x++) {
    const currentChar = getChar(y, x, [0, 0]);
    isNumber = isCharNumber(currentChar);
    
    if (isNumber) {
      currentNumber += currentChar;
    }
    
    // check if current number is a partnumber
    if (isNumber && checkForSymbol) {
      const isPartNumber = directions.reduce((acc, [dy, dx]) => {
        const char = getChar(y, x, [dy, dx]);
        return acc || !isCharNumber(char) && !isCharDot(char) && char !== undefined
      }, false);
      
      if (isPartNumber) {
        checkForSymbol = false;
      }
    } 

    if (isNumber && !checkForSymbol) {
      sum += parseInt(currentNumber);
    }
    
    if (!isNumber && !checkForSymbol) {
      console.log(parseInt(currentNumber))
      sum += parseInt(currentNumber);
      currentNumber = '';
      checkForSymbol = true;
    }

    if (!isNumber) {
      currentNumber = '';
      checkForSymbol = true;
    }
  }
}

console.log(sum);
