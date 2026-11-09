
const fs = require('fs');

function countWords(filePath) {
    const text = fs.readFileSync(filePath, 'utf8');
    const words = text.match(/\b[\w']+\b/g);
    return words ? words.length : 0;
}

function findLongestWord(filePath) {
    const text = fs.readFileSync(filePath, 'utf8');
    const words = text.match(/\b[\w']+\b/g) || [];

    let longestWord = '';

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

function countLines(filePath) {
    const text = fs.readFileSync(filePath, 'utf8');

    if (text.length === 0) {
        return 0;
    }

    return text.replace(/\r\n/g, '\n')
               .replace(/\n$/, '')
               .split('\n').length;
}

module.exports = {
    countWords,
    findLongestWord,
    countLines
};
