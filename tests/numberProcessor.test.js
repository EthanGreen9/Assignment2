const fs = require('fs');

const text = fs.readFileSync('./data/sample-numbers.txt', 'utf8');
const lines = text.split('\n');
const numbers = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.length > 0) {
        numbers.push(parseFloat(line));
    }
}

function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

function findHighest(numbers) {
    let highest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > highest) {
            highest = numbers[i];
        }
    }
    return highest;
}

function findLowest(numbers) {
    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < lowest) {
            lowest = numbers[i];
        }
    }
    return lowest;
}

function calculateAverage(numbers) {
    return calculateSum(numbers) / numbers.length;
}

console.log(calculateSum(numbers));
console.log(findHighest(numbers));
console.log(findLowest(numbers));
console.log(calculateAverage(numbers));

module.exports = {
    calculateSum,
    findHighest,
    findLowest,
    calculateAverage
};
