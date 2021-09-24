const fizzBuzz = require('../fizzbuzz');

test('3 should return FIZZ', () =>{
    let result = fizzBuzz(3);
    expect(result).toBe('FIZZ');
});

test('10 should return BUZZ', () => {
    let result = fizzBuzz(10);
    expect(result).toBe('BUZZ');
});

test('15 should return FIZZBUZZ', () => {
    let result = fizzBuzz(15);
    expect(result).toBe('FIZZBUZZ');
});

test ('13 should return null', () => {
    let result = fizzBuzz(13);
    expect(result).toBe(null);
});