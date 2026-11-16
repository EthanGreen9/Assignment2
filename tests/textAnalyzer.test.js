const { countWords, findLongestWord, countLines } = require('../src/textAnalyzer');

test('should count words', () => {
    const result = countWords('Hello world test');
    expect(result).toBe(3);
});

test('should find the longest word', () => {
    const result = findLongestWord('Hello programming world');
    expect(result).toBe('programming');
});

test('should count lines', () => {
    const result = countLines('Hello\nWorld');
    expect(result).toBe(2);
});

test('should handle empty text', () => {
    const result = countWords('');
    expect(result).toBe(0);
});

test('should handle a single word', () => {
    const result = findLongestWord('Hello');
    expect(result).toBe('Hello');
});

test('should handle a single line', () => {
    const result = countLines('Hello world');
    expect(result).toBe(1);
});
