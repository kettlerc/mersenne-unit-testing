const leapYear = require('../leapyear');

test('1996 should return true', () => {
    let result = leapYear(1996);
    expect(result).toBe(true);
});

test('1997 should return false', () => {
    let result = leapYear(1997);
    expect(result).toBe(false);
});

test('1100 should return false', () => {
    let result = leapYear(1100);
    expect(result).toBe(false);
});

test('2000 should return true', () => {
    let result = leapYear(2000);
    expect(result).toBe(true);
});