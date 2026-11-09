
const fs = require('fs');

function countWords(filePath) {
    const text = fs.readFileSync(filePath, 'utf8');
    const words = text.match(/\b[\w']+\b/g) || [];
    return words.length;
}

function findLongestWord(filePath) {
    const text = fs.readFileSync(filePath, 'utf8');
    const words = text.match(/\b[\w']+\b/g) || [];

    let longest = '';

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

function countLines(filePath) {
    const text = fs.readFileSync(filePath, 'utf8').trimEnd();
    return text ? text.split(/\r?\n/).length : 0;
}

module.exports = { countWords, findLongestWord, countLines };

