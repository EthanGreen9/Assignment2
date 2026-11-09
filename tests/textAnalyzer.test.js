
const path = require('path');

const {
    countWords,
    findLongestWord,
    countLines
} = require('../src/textAnalyzer');

const filePath = path.join(__dirname, '../data/sample-text.txt');

test('counts the words in a text file', () => {
    expect(countWords(filePath)).toBeGreaterThanOrEqual(0);
});

test('finds the longest word', () => {
    expect(typeof findLongestWord(filePath)).toBe('string');
});

test('counts the number of lines', () => {
    expect(countLines(filePath)).toBeGreaterThanOrEqual(0);
});
