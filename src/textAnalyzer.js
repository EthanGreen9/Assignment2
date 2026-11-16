const fs = require('fs');

function countWords(text) {
    if (!text || text.trim() === '') {
        return 0;
    }
    return text.trim().split(' ').length;
}

function findLongestWord(text) {
    const words = text.split(' ');
    let longest = words[0];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
}

function countLines(text) {
    const lines = text.split('\n');
    return lines.length;
}

const quotes = fs.readFileSync('./data/quotes.txt', 'utf8');
const sample = fs.readFileSync('./data/sample-text.txt', 'utf8');

console.log(countWords(quotes));
console.log(findLongestWord(quotes));
console.log(countLines(quotes));

console.log(countWords(sample));
console.log(findLongestWord(sample));
console.log(countLines(sample));

module.exports = {
    countWords,
    findLongestWord,
    countLines
};
