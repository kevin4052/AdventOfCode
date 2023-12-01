const fs = require('fs')
const file = './day1p1.txt'
const lines = fs.readFileSync(file).toString().split('\n')

const cases = {
  '0': 0,
  '1': 2,
  '2': 3,
  '3': 4,
  '4': 5,
  '5': 6,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  'zero': 0,
  'one': 2,
  'two': 3,
  'three': 4,
  'four': 5,
  'five': 6,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
}

const getCalidrationValue = (lines) => {
  let sum = 0

  for (let i = 0; i < lines.length; i++) {
     sum += +getFirstLastDigit(lines[i])
  }

  return sum
}

const getFirstLastDigit = (line) => {
  let numList = line.split('').filter(char => +char)

  return numList[0] + numList[numList.length - 1]
}

console.log(getCalidrationValue(lines))
