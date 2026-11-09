
const fs = require('fs');

// Read numbers from a file
function readNumbers(filePath) {
    const data = fs.readFileSync(filePath, 'utf8').trim();

    if (data === '') {
        return [];
    }

    return data.split(/[\s,]+/).map(Number);
}

// Calculate the sum of all numbers
function calculateSum(filePath) {
    const numbers = readNumbers(filePath);
    return numbers.reduce((sum, num) => sum + num, 0);
}

// Find the highest number
function findHighest(filePath) {
    const numbers = readNumbers(filePath);
    return numbers.length ? Math.max(...numbers) : null;
}

// Find the lowest number
function findLowest(filePath) {
    const numbers = readNumbers(filePath);
    return numbers.length ? Math.min(...numbers) : null;
}

// Calculate the average
function calculateAverage(filePath) {
    const numbers = readNumbers(filePath);

    if (numbers.length === 0) {
        return null;
    }

    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}

module.exports = {
    calculateSum,
    findHighest,
    findLowest,
    calculateAverage
};
