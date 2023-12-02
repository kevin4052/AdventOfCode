const fs = require("fs");
const file = "../inputs/day1p1.txt";
const lines = fs.readFileSync(file).toString().split("\n");

const getCalidrationValue = (lines) => {
  let sum = 0;

  for (let i = 0; i < lines.length; i++) {
    sum += +getFirstLastDigit(lines[i]);
  }

  return sum;
};

const getFirstLastDigit = (line) => {
  let numList = line.split("").filter((char) => +char);

  return numList[0] + numList[numList.length - 1];
};

console.log(getCalidrationValue(lines));
