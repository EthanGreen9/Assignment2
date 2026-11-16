const { calculateSum, findHighest, findLowest, calculateAverage } = require('../src/numberProcessor');

test('should calculate the sum', () => {
    const result = calculateSum([5, 10, 15]);
    expect(result).toBe(30);
});

test('should find the highest number', () => {
    const result = findHighest([5, 10, 15]);
    expect(result).toBe(15);
});

test('should find the lowest number', () => {
    const result = findLowest([5, 10, 15]);
    expect(result).toBe(5);
});

test('should calculate the average', () => {
    const result = calculateAverage([5, 10, 15]);
    expect(result).toBe(10);
});

test('should work with negative numbers', () => {
    const result = findHighest([-5, -10, -15]);
    expect(result).toBe(-5);
});
