
const fs = require('fs');
const path = require('path');

const {
    calculateSum,
    findHighest,
    findLowest,
    calculateAverage
} = require('../src/numberProcessor');

const file = path.join(__dirname, 'temp-numbers.txt');

beforeAll(() => fs.writeFileSync(file, '10\n20\n-5\n15'));
afterAll(() => fs.unlinkSync(file));

test('calculates sum', () => {
    expect(calculateSum(file)).toBe(40);
});

test('finds highest number', () => {
    expect(findHighest(file)).toBe(20);
});

test('finds lowest number', () => {
    expect(findLowest(file)).toBe(-5);
});

test('calculates average', () => {
    expect(calculateAverage(file)).toBe(10);
});
