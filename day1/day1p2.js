const fs = require('fs')
const file = './day1p1.txt'
const lines = fs.readFileSync(file).toString().split('\n')

const cases = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
}

const getCalidrationValue = (lines) => {
  let sum = 0

  for (let i = 0; i < lines.length; i++) {
     sum += getFirstLastDigit(lines[i])
  }

  return sum
}

const getFirstLastDigit = (line) => {
  const keys = Object.keys(cases);
  let arr = [];

  for (let i = 0; i < line.length; i++) {
    const char = line[i]

    for (let j = 0; j < keys.length; j++) {
      const key = keys[j]
      if (key[0] === char) {
        key === line.slice(i, i + key.length) && arr.push(cases[key])
      }
    }

  }

  return arr[0] * 10 + arr[arr.length - 1]
}

console.log(getCalidrationValue(lines))
