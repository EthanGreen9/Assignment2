
const fs = require('fs');

function readNumbers(filePath) {
    const text = fs.readFileSync(filePath, 'utf8').trim();
    return text ? text.split(/[\s,]+/).map(Number) : [];
}

function calculateSum(filePath) {
    const numbers = readNumbers(filePath);
    return numbers.reduce((sum, num) => sum + num, 0);
}

function findHighest(filePath) {
    const numbers = readNumbers(filePath);
    return numbers.length ? Math.max(...numbers) : null;
}

function findLowest(filePath) {
    const numbers = readNumbers(filePath);
    return numbers.length ? Math.min(...numbers) : null;
}

function calculateAverage(filePath) {
    const numbers = readNumbers(filePath);
    if (numbers.length === 0) return null;

    const sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length;
}

module.exports = {
    calculateSum,
    findHighest,
    findLowest,
    calculateAverage
};

