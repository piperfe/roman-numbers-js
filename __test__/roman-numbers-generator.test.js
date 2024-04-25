const toRoman = require('../src/roman-numbers-generator');

test('should return roman given a decimal', () => {
    expect(toRoman(1)).toBe("I");
});
