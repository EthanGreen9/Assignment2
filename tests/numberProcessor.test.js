
const fs = require('fs');
const os = require('os');
const path = require('path');

const {
    calculateSum,
    findHighest,
    findLowest,
    calculateAverage
} = require('../src/numberProcessor');

let tempDir;
let filePath;

beforeAll(() => {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'number-test-'));
    filePath = path.join(tempDir, 'numbers.txt');
    fs.writeFileSync(filePath, '10\n20\n-5\n15');
});

afterAll(() => {
    fs.rmSync(tempDir, { recursive: true, force: true });
});

test('calculates the sum of all numbers', () => {
    expect(calculateSum(filePath)).toBe(40);
});

test('finds the highest number', () => {
    expect(findHighest(filePath)).toBe(20);
});

test('finds the lowest number', () => {
    expect(findLowest(filePath)).toBe(-5);
});

test('calculates the average', () => {
    expect(calculateAverage(filePath)).toBe(10);
});
