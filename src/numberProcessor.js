const fs = require('fs');

function readNumbers(filePath) {
    const text = fs.readFileSync(filePath, 'utf8');
    const lines = text.split('\n');
    const numbers = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.length > 0) {
            numbers.push(parseFloat(line));
        }
    }

    return numbers;
}

function calculateSum(filePath) {
    const numbers = readNumbers(filePath);
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

function findHighest(filePath) {
    const numbers = readNumbers(filePath);
    let highest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > highest) {
            highest = numbers[i];
        }
    }

    return highest;
}

function findLowest(filePath) {
    const numbers = readNumbers(filePath);
    let lowest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < lowest) {
            lowest = numbers[i];
        }
    }

    return lowest;
}

function calculateAverage(filePath) {
    const numbers = readNumbers(filePath);
    return calculateSum(filePath) / numbers.length;
}

console.log(calculateSum('./data/sample-numbers.txt'));
console.log(findHighest('./data/sample-numbers.txt'));
console.log(findLowest('./data/sample-numbers.txt'));
console.log(calculateAverage('./data/sample-numbers.txt'));

module.exports = {
    calculateSum,
    findHighest,
    findLowest,
    calculateAverage
};
