
const fs = require('fs');
const path = require('path');

const {
    countWords,
    findLongestWord,
    countLines
} = require('../src/textAnalyzer');

const file = path.join(__dirname, 'temp-text.txt');

beforeAll(() => fs.writeFileSync(file, 'Cat elephant\nDog'));
afterAll(() => fs.unlinkSync(file));

test('counts words', () => {
    expect(countWords(file)).toBe(3);
});

test('finds longest word', () => {
    expect(findLongestWord(file)).toBe('elephant');
});

test('counts lines', () => {
    expect(countLines(file)).toBe(2);
});
