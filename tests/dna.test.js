const dna = require('../dna');

test('CTAGGGTA should return CTAGGGTA', () => {
    let result = dna('CTAGGGTA');
    expect(result).toBe('CTAGGGTA');
});

test('cTAGGGTA should return cTAGGGTA', () => {
    let result = dna('cTAGGGTA');
    expect(result).toBe('TAGGGTA');
});

test('Blank string should return blank string', () => {
    let result = dna('');
    expect(result).toBe('');
});